import React from "react";
class Register extends React.Component {
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  state = {
    username: "",
    pwd: "",
    email: "",
  };
  render() {
    return (
      <div className="register">
        <form onSubmit={this.handleSubmit}>
        <input
            name="username"
            type="username"
            placeholder="username"
            onChange={this.handleChange}
          />
          <br></br>
         <input
            type="password"
            name="pwd"
            placeholder="password"
            onChange={this.handleChange}
          />
          <br></br>
           <input
            name="email"
            type="email"
            placeholder="type your email"
            onChange={this.handleChange}
          />
          <br></br>
          <button
          onSubmit={this.handleSubmit}>
          Click here for register
          </button>
        </form>
      </div>
    );
  }
}
export default Register;