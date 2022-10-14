import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const params = new URL(location.href).searchParams;
  const res = params.get("SAMLResponse");
  console.log("response", res);
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
