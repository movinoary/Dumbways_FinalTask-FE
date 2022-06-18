import React from "react";
import * as cssModule from "../../style/index";
import * as Assets from "../../assets/index";

const CardUser = ({ dataContact, clickContact, contact }) => {
  return (
    <>
      {dataContact.length > 0 && (
        <>
          {dataContact.map(item => (
            <div
              className={cssModule.Components.cardUser}
              key={item.id}
              onClick={() => {
                clickContact(item);
              }}
            >
              <img
                src={item.profile.image || Assets.imgBlankProfile}
                alt="profile"
              />

              <p>{item.name}</p>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default CardUser;
