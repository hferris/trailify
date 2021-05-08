import React from 'react'
import background from "../imgs/fav.jpeg";
import PARKAPI from '../utils/auth/trailAPI/trailAPI'
import axios from "axios";

const styles = {
    minHeight: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    backgroundSize: "cover",
    backgroundImage: `url(${background})`,
    backgroundAttachment: "fixed"
    
  };
// const styles = {
//     minHeight: "100vh",
//     width: "100vw",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: 'center',
//     backgroundSize: "cover",
//     backgroundImage: `url(${background})`,
//     backgroundAttachment: "fixed"
    
//   };
function addNewFavorite(parkData){
return axios.post("/api/parks", parkData,{
    "Authorization": getAuthToken()
})
}

function getAuthToken() {
    return localStorage.getItem("id_token");
  }

function Favorites() {
    React.useEffect(() => {
        PARKAPI.getParks().then(({ data }) => {
            console.log("favorites:",data)
        })
    })
    return (
        <div style={styles}>
            <p>Hello Favorites</p>
        </div>
    )
}

export default Favorites;
