import React from "react";

const index = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const firstName = queryParams.get("first_name");

  console.log(firstName)

  return <>Welcome Home {firstName}!!</>;
};

export default index;
