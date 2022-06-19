import React, { useContext } from "react";
import { useQuery } from "react-query";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import * as Components from "../components/index";
import * as cssModule from "../style/index";
import * as Configs from "../config/index";
import * as Assets from "../assets/index";

const Profile = () => {
  const [state] = useContext(Configs.UserContext);
  const navigate = useNavigate();

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
    <motion.section
      className={cssModule.Page.profileSec}
      initial="out"
      animate="in"
      exit="out"
      variants={Assets.animationOne}
      transition={Assets.transition}
    >
      <div>
        <h1 className={cssModule.Page.profileTitle}>my profile</h1>
        <div className={cssModule.Page.profileInfo}>
          <img src={profile?.image || Assets.imgBlankProfile} alt="profile" />
          <div className={cssModule.Page.profileDesc}>
            <h2>Full Name</h2>
            <p>{state.user.name}</p>
            <h2>Email</h2>
            <p>{state.user.email}</p>
            {profile ? (
              <>
                <h2>Phone</h2>
                <p>{profile?.phone}</p>
                <h2>Address</h2>
                <p>{profile?.address}</p>
                <h2>Gender</h2>
                <p>{profile?.gender}</p>
                <h2>Pos Code</h2>
                <p>{profile?.posCode}</p>
              </>
            ) : (
              <div className={cssModule.Page.profileDescButton}>
                <button onClick={() => navigate("add-profile")}>
                  <h2>Add Profile</h2>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={cssModule.Page.profileTransaction}>
        <h1 className={cssModule.Page.title}>my transaction</h1>
        <Components.CardTransaction />
      </div>
    </motion.section>
  );
};

export default Profile;
