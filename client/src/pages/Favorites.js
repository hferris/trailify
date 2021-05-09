import React from "react";
import background from "../imgs/fav.jpeg";
import PARKAPI from "../utils/auth/trailAPI/trailAPI";
import axios from "axios";

const styles = {
  minHeight: "100vh",
  width: "100vw",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundImage: `url(${background})`,
  backgroundAttachment: "fixed",
};

const cardStyles = {
    display: "flex",
    flexDirection: "row",
    width: "75%",
    border: "1px solid black",
    borderRadius: "10px",
    opacity: "0.85",
    marginRight: "auto",
    marginLeft: "auto",
    textAlign: "center",
    backgroundColor: "#D3D3D3",
  };

function Favorites() {
  React.useEffect(() => {
    PARKAPI.getParks().then(({ data }) => {
      console.log("favorites:", data);
    });
  });

  return (
    <div style={cardStyles} className="card">
      <img
        // style={{ width: "400px", height: "400px" }}
        // src={}
        className="card-img-top"
        // alt={}
      />
      <div>
        <div className="card-body">
          <h5 className="card-title"> {} </h5>
          <p style={{ backgroundColor: "#D3D3D3" }} className="list-group-item">
            {}
          </p>

          <p className="card-text">
            Description: {} 
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li
            style={{ backgroundColor: "#D3D3D3" }}
            className="list-group-item"
          >
            Directions: {}
          </li>

          <li
            style={{ backgroundColor: "#D3D3D3" }}
            className="list-group-item"
          >
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={(event) => {
                console.log(event.target.value);
                // saveInput(obj);
              }}
            >
              Check the weather forecast for this park!
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Favorites;
