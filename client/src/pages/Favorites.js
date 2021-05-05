import React from 'react'
import background from "../imgs/fav.jpeg";


const styles = {
    height: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    backgroundSize: "cover",
    backgroundImage: `url(${background})`,
    
  };


function Favorites() {
    return (
        <div style={styles}>
            <p>Hello Favorites</p>
        </div>
    )
}

export default Favorites;


