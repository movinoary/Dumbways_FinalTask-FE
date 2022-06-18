import React from "react";
import * as cssModule from "../style/index";
import * as Assets from "../assets/index";

const Chats = ({ contact, user, messages, sendMessage }) => {
  return (
    <>
      {contact ? (
        <>
          <div className={cssModule.Page.complainChatProfile}>
            <img
              src={contact.profile?.image || Assets.imgBlankProfile}
              alt="profile"
            />
            <p>{contact.name}</p>
          </div>
          <div className={cssModule.Page.complainChatBubble}>
            {messages.map((item, index) => (
              <div key={index}>
                <div
                  id="chat-messages"
                  className={`${
                    item.idSender === user.id
                      ? cssModule.Page.bubbleRight
                      : cssModule.Page.bubbleLeft
                  }`}
                >
                  <div
                    className={
                      item.idSender === user.id
                        ? cssModule.Page.bubbleMessage
                        : cssModule.Page.bubbleMessageOther
                    }
                  >
                    <p>{item.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={cssModule.Page.sendMessage}>
            <input
              className="sub-input"
              onKeyPress={sendMessage}
              type="text"
              placeholder="Send Message"
            />
            <button onClick={sendMessage}>
              <img src={Assets.svgSend} alt="send" />
            </button>
          </div>
        </>
      ) : (
        <div className={cssModule.Page.noMessage}>
          <img src={Assets.svgNoMessage} alt="svg" />
        </div>
      )}
    </>
  );
};

export default Chats;
