import React from "react";

const index = () => {
  const params = new URL(window.location.href).searchParams;
  const res = params.get("SAMLResponse");
  console.log("response", res);
  return (
    <>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          borderStyle: "none",
          outline: "none",
          padding: "8px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        LOGIN WITH GOOGLE
      </button>
    </>
  );
};

export default index;
