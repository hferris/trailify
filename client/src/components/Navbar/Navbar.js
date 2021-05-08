import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";

const styles = {
  height: "10vh",
  width: "20vw",
  padding: "15px",
  fontFamily: "Arial",
  
  
 
};

const backStyles = {
  fontSize: 20,
  fontWeight: "bold",
  
};

const navStyles = {
  backgroundColor: "#F0550D ",
};

const createLink = ({ text, to, ...rest }) => {
  const className = "nav-link";
  if (to) {
    return (
      <Link className={className} to={to} {...rest}>
        {text}
      </Link>
    );
  }
  return (
    <span
      role="button"
      className={className}
      style={{ cursor: "pointer" }}
      {...rest}
    >
      {text}
    </span>
  );
};

function NavLinks() {
  const { isLoggedIn, logout } = useAuth();
  const links = [];
  if (isLoggedIn) {
    links.push({ text: "Home", to: "/" });
    links.push({ text: "Dashboard", to: "/dashboard" });
    links.push({ text: "Favorites", to: "/favorites" });
    links.push({ text: "Logout", onClick: () => logout() });
  } else {
    links.push({ text: "Signup", to: "/signup" });
    links.push({ text: "Login", to: "/login" });
  }
  return (
    <ul style={styles} className="navbar-nav">
      {links.map((link, i) => (
        <li key={i} className="nav-item">
          {createLink(link)}
        </li>
      ))}
    </ul>
  );
}

function Navbar() {
  return (
    <nav style={navStyles}className="navbar navbar-expand navbar-dark bg-dark green">
      <div style={backStyles} className="container">
        <Link className="navbar-brand" to="/">
        </Link>
        <NavLinks />
      </div>
    </nav>
  );
}

export default Navbar;
