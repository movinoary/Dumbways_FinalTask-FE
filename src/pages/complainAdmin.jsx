import React from "react";
import * as Components from "../components/index";
import * as Assets from "../assets/index";
import * as cssModule from "../style/index";

const ComplainAdmin = () => {
  return (
    <>
      <Components.Nav />
      <section className={cssModule.Page.complainSec}>
        <div className={cssModule.Page.complainCard}>
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
          <Components.CardUser />
        </div>
        <div className={cssModule.Page.complainChat}>
          <div className={cssModule.Page.complainChatProfile}>
            <img
              src="https://i.pinimg.com/564x/23/6a/cb/236acb35ba948106b665f8bf0854fd21.jpg"
              alt="profile"
            />
            <p>jinny nmixx</p>
          </div>
          <div className={cssModule.Page.complainChatBubble}>
            <div className={cssModule.Page.bubbleLeft}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis adipisci, cum nihil saepe natus quos modi dolore ea
                totam, iste enim earum praesentium. Sit deleniti reprehenderit,
                hic nisi adipisci ipsam repellat porro possimus dolor asperiores
                atque veritatis quibusdam blanditiis ab iusto enim quae
                voluptate, dolore sapiente? Nam consequuntur facilis esse.
              </p>
            </div>
            <div className={cssModule.Page.bubbleRight}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis adipisci, cum nihil saepe natus quos modi dolore ea
                totam, iste enim earum praesentium. Sit deleniti reprehenderit,
                hic nisi adipisci ipsam repellat porro possimus dolor asperiores
                atque veritatis quibusdam blanditiis ab iusto enim quae
                voluptate, dolore sapiente? Nam consequuntur facilis esse.
              </p>
            </div>
            <div className={cssModule.Page.bubbleLeft}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis adipisci, cum nihil saepe natus quos modi dolore ea
                totam, iste enim earum praesentium. Sit deleniti reprehenderit,
                hic nisi adipisci ipsam repellat porro possimus dolor asperiores
                atque veritatis quibusdam blanditiis ab iusto enim quae
                voluptate, dolore sapiente? Nam consequuntur facilis esse.
              </p>
            </div>
            <div className={cssModule.Page.bubbleRight}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis adipisci, cum nihil saepe natus quos modi dolore ea
                totam, iste enim earum praesentium. Sit deleniti reprehenderit,
                hic nisi adipisci ipsam repellat porro possimus dolor asperiores
                atque veritatis quibusdam blanditiis ab iusto enim quae
                voluptate, dolore sapiente? Nam consequuntur facilis esse.
              </p>
            </div>
          </div>
          <form>
            <input type="text" placeholder="Write your message here ..." />
            <button>
              <img src={Assets.svgSend} alt="send" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ComplainAdmin;
