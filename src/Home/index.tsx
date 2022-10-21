import axios from "axios";
import React from "react";

const index = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const userId = queryParams.get("user_id");
  const firstName = queryParams.get("first_name");

  if (userId) {
    axios
      .get(
        `https://00bb-45-249-169-151.in.ngrok.io/api/user/verify_authorization?userId=${userId}`
      )
      .then(function (response) {
        console.log("response", response);
      });
  }

  return <>Welcome Home {firstName}!!</>;
};

export default index;
