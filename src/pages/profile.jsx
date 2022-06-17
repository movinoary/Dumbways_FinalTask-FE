import React, { useContext } from "react";
import { useQuery } from "react-query";
import * as Components from "../components/index";
import * as cssModule from "../style/index";
import * as Configs from "../config/index";

const Profile = () => {
  const [state] = useContext(Configs.UserContext);

  let { data: profile } = useQuery("profileCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await Configs.API.get("/profile", config);
    return response.data.data;
  });

  return (
    <section className={cssModule.Page.profileSec}>
      <div>
        <h1 className={cssModule.Page.profileTitle}>my profile</h1>
        <div className={cssModule.Page.profileInfo}>
          <img src={profile?.image} alt="profile" />
          <div className={cssModule.Page.profileDesc}>
            <h2>Full Name</h2>
            <p>{state.user.name}</p>
            <h2>Email</h2>
            <p>{state.user.email}</p>
            <h2>Phone</h2>
            <p>{profile?.phone}</p>
            <h2>Address</h2>
            <p>{profile?.address}</p>
            <h2>Gender</h2>
            <p>{profile?.gender}</p>
            <h2>Pos Code</h2>
            <p>{profile?.posCode}</p>
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
