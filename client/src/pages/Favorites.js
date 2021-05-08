import React from "react";
import background from "../imgs/fav.jpeg";
import PARKAPI from "../utils/auth/trailAPI/trailAPI";
import axios from "axios";
import response from "./Dashboard";

const styles = {
  minHeight: "100vh",
  width: "100vw",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundImage: `url(${background})`,
  backgroundAttachment: "fixed",
};

function Favorites() {
  React.useEffect(() => {
    PARKAPI.getParks().then(({ data }) => {
      console.log("favorites:", data);
    });
  });

  return <div style={styles}></div>;
}

export default Favorites;
