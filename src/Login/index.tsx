import axios from "axios";

const index = () => {
  const handleLogin = () => {
    axios.get("http://127.0.0.1:8000/login").then(function (response) {
      console.log("response", response);
      window.location.replace = response as any;
    });
  };

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
        onClick={handleLogin}
      >
        LOGIN WITH GOOGLE
      </button>
    </>
  );
};

export default index;
