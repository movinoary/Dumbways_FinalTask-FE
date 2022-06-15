import React from "react";
import * as cssModule from "../../style/index";

const CardUser = () => {
  return (
    <div className={cssModule.Components.cardUser}>
      <img
        src="https://i.pinimg.com/564x/23/6a/cb/236acb35ba948106b665f8bf0854fd21.jpg"
        alt="user"
      />
      <p>jinni nmixx</p>
    </div>
  );
};

export default CardUser;
