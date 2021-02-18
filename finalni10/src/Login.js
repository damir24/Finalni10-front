import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="login">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        Login page
      </div>
    );
  }
}

export default Login;
