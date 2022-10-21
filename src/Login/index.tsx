import axios from "axios";

const index = () => {
  const handleLogin = () => {
    axios
      .get("https://00bb-45-249-169-151.in.ngrok.io/api/user/login",{
        headers: {
          contentType: "application/json",
        }
      })
      .then(function (response) {
        console.log("response", response);
        window.location.replace(response?.data);
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
