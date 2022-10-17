import React from "react";

const index = () => {
  const params = new URL(window.location.href).searchParams;
  const res = params.get("SAMLResponse");
  console.log("response", res);
  return <>Welcome Home!!</>;
};

export default index;
