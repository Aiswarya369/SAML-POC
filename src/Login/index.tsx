import axios from "axios";

const index = () => {
  const handleLogin = async () => {
    try {
      const response = await axios.get(
        "https://api.dev.ims.experionglobal.dev/api/user/login",
    
      );
      console.log("response", response.data);
      window.location.replace(response?.data);
    } catch (error) {
      console.log(error);
    }
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
