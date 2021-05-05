import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../utils/auth";
import background from "../imgs/login.jpeg";

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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useAuth();
  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = event => {
    event.preventDefault();

    login(email, password)
      // navigate to the profile page
      .then(() => history.push("/"))
      .catch(err => {
        alert(err.response.data.message);
      });
  };

  return (
    <div style={styles} className="container">
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            className="form-control"
            placeholder="Email goes here..."
            name="email"
            type="email"
            id="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            className="form-control"
            placeholder="Password goes here..."
            name="password"
            type="password"
            id="pwd"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p>
        <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default Login;
