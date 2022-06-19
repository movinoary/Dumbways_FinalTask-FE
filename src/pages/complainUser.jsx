import React, { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { motion } from "framer-motion";
import * as Assets from "../assets/index";
import * as Components from "../components/index";
import * as cssModule from "../style/index";
import * as Configs from "../config/index";

let socket;

const ComplainUser = () => {
  const [contact, setContact] = useState(null); // data contact yang diklik
  const [contacts, setContacts] = useState([]); // data contact dari server
  const [messages, setMessages] = useState([]);

  const [state] = useContext(Configs.UserContext);

  useEffect(() => {
    socket = io("http://localhost:5000", {
      auth: {
        token: localStorage.getItem("token"),
      },
      query: {
        id: state.user.id,
      },
    });

    socket.on("new message", () => {
      console.log("contact : ", contact);
      socket.emit("load messages", contact?.id);
    });

    socket.on("connect_error", err => {
      console.log(err.message); //Not Authorized
    });
    loadContact();
    loadMessages();

    return () => {
      socket.disconnect();
    };
  }, [messages]);

  const loadContact = () => {
    // emit event load admin contact
    socket.emit("load admin contact");
    // listen event to get admin contact
    socket.on("admin contact", data => {
      // manipulate data to add message property with the newest message
      // code here
      let dataContact = {
        ...data,
        message:
          messages.length > 0
            ? messages[messages.length - 1].message
            : "Click here to start message",
      };
      // console.log(dataContact);
      setContacts([dataContact]);
    });
  };

  const onClickContact = data => {
    setContact(data);
    // code here
    socket.emit("load messages", data.id);
  };

  const loadMessages = () => {
    socket.on("messages", data => {
      if (data.length > 0) {
        const dataMessages = data.map(item => ({
          idSender: item.sender.id,
          message: item.message,
        }));
        setMessages(dataMessages);
      }
    });
  };

  const onSendMessage = e => {
    if (e.key === "Enter") {
      const data = {
        idRecipient: contact.id,
        message: e.target.value,
      };

      socket.emit("send message", data);
      e.target.value = "";
    }
  };

  return (
    <section className={cssModule.Page.complainSec}>
      <motion.div
        className={cssModule.Page.complainCard}
        animate="in"
        exit="out"
        variants={Assets.animationOne}
        transition={Assets.transition}
      >
        <Components.CardUser
          dataContact={contacts}
          clickContact={onClickContact}
          contact={contact}
        />
      </motion.div>
      <motion.div
        className={cssModule.Page.complainChat}
        initial="out"
        animate="in"
        exit="out"
        variants={Assets.animationOne}
        transition={Assets.transition}
      >
        <Components.Chats
          contact={contact}
          messages={messages}
          user={state.user}
          sendMessage={onSendMessage}
        />
      </motion.div>
    </section>
  );
};

export default ComplainUser;
