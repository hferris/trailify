import React from 'react'
import background from "../imgs/fav.jpeg";


const styles = {
    minHeight: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    backgroundSize: "cover",
    backgroundImage: `url(${background})`,
    backgroundAttachment: "fixed"
    
  };


function Favorites() {
    
    return (
        <div style={styles}>
            <p>Hello Favorites</p>
        </div>
    )
}

export default Favorites;


