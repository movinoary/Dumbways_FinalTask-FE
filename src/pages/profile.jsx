import React from "react";
import * as Components from "../components/index";
import * as cssModule from "../style/index";

const Profile = () => {
  return (
    <section className={cssModule.Page.profileSec}>
      <div>
        <h1 className={cssModule.Page.profileTitle}>my profile</h1>
        <div className={cssModule.Page.profileInfo}>
          <img
            src="https://i.pinimg.com/564x/23/6a/cb/236acb35ba948106b665f8bf0854fd21.jpg"
            alt="profile"
          />
          <div className={cssModule.Page.profileDesc}>
            <h2>Full Name</h2>
            <p>Jinni</p>
            <h2>Email</h2>
            <p>jinni@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={cssModule.Page.profileTransaction}>
        <h1 className={cssModule.Page.title}>my transaction</h1>
        <Components.CardTransaction />
      </div>
    </section>
  );
};

export default Profile;
