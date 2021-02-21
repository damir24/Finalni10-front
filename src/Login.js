import React from "react";
import { Component } from "react";
class Login extends React.Component {
  state = {
    username: "",
    pwd: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <input
            type="username"
            name="username"
            placeholder="username..."
            requried
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="pwd"
            placeholder="password"
            requried
            onChange={this.handleChange}
          />
          <button onSubmit={this.handleSubmit}>log in</button>
        </form>
      </div>
    );
  }
}
export default Login;
