import axios from "axios";
import React from "react";

const index = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const userId = queryParams.get("user_id");
  const firstName = queryParams.get("first_name");

  if (userId) {
    axios
      .get(
        `https://api.dev.cars.experionglobal.dev/api/user/verify_authorization?user_id=${userId}`
      )
      .then(function (response) {
        console.log("response", response);
      });
  }

  return <>Welcome Home {firstName}!!</>;
};

export default index;
