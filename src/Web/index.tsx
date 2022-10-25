import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
interface props {}

const Index: React.FC<props> = (props) => {
  const history = useHistory();
  const queryParams = new URLSearchParams(window.location.search);
  const userId = queryParams.get("user_id");

  if (userId) {
    axios
      .get(
        `https://api.dev.ims.experionglobal.dev/api/user/verify_authorization?user_id=${userId}`
      )
      .then(function (response) {
        console.log("response-token", response);
        history.push("/home");
      });
  }
  return (
    <div style={{ textAlign: "center" }}>Redirecting in progress ... </div>
  );
};

export default Index;
