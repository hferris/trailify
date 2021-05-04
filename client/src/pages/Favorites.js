import React from 'react'
import background from "../imgs/fav.jpeg";


const styles = {
    // fontFamily: "Roboto, Times New Roman, Times, serif",
    // boxSizing: "border-box",
    width: '100vw',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
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


