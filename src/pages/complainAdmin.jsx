import React, { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import * as Components from "../components/index";
import * as cssModule from "../style/index";
import * as Configs from "../config/index";

let socket;

const ComplainAdmin = () => {
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
      console.log(err.message);
    });

    loadContacts();
    loadMessages();

    return () => {
      socket.disconnect();
    };
  }, [messages]);

  const loadContacts = () => {
    socket.emit("load customer contacts");
    socket.on("customer contacts", data => {
      // filter just customers which have sent a message
      let dataContacts = data.filter(
        item =>
          item.status !== "admin" &&
          (item.recipientMessage.length > 0 || item.senderMessage.length > 0)
      );

      // manipulate customers to add message property with the newest message
      // code here
      dataContacts = dataContacts.map(item => ({
        ...item,
        message:
          item.senderMessage.length > 0
            ? item.senderMessage[item.senderMessage.length - 1].message
            : "Click here to start message",
      }));
      // console.log(dataContacts);
      setContacts(dataContacts);
    });
  };

  const onClickContact = data => {
    setContact(data);
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
      loadContacts();
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
      <div className={cssModule.Page.complainCard}>
        <Components.CardUser
          dataContact={contacts}
          clickContact={onClickContact}
          contact={contact}
        />
      </div>
      <div className={cssModule.Page.complainChat}>
        <Components.Chats
          contact={contact}
          messages={messages}
          user={state.user}
          sendMessage={onSendMessage}
        />
      </div>
    </section>
  );
};

export default ComplainAdmin;
