import React from "react";
import { useHistory } from "react-router-dom";
import background from "../../imgs/home.jpeg";

import "./home.css";
import { useAuth } from "../../utils/auth";

function Home() {
  const { user, logout } = useAuth();
  const history = useHistory();

  const styles = {
    height: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${background})`,
  };
  const titleStyles = {
    backgroundSize: "cover",
    display: "center",
    backgroundColor: "#4D6241",
    marginTop: "15%",
    marginBottom: "3%",
    listStyleType: "none",
    display: "inline-block",
    fontSize: "1rem",
    borderRadius: "50px",
    fontFamily: "Roboto, Times New Roman, Times, serif",
  };

  return (
    <div style={styles} className="App">
      <div style={titleStyles} className="App-header">
        <h1>Welcome to Parkify</h1>
        <h5>!You deserve to live a great life!</h5>
        <h6>
          To get started please create an account or sign in if you have already
          been registered.
        </h6>
      </div>
      <p className="App-intro">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => logout()}
        >
          Logout
        </button>
      </p>
    </div>
  );
}

export default Home;
