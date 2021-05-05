import React from "react"
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
    backgroundPosition: 'center',
    backgroundSize: "cover",
    backgroundImage: `url(${background})`,
    
  };
  

  return (
    <div style={styles} className="App">
      <div className="App-header">
        
        <h2>Welcome to Parkify</h2>
        
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
