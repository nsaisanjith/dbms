import React, { Component } from "react";
import "./css/signin.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
class SignIn extends Component {
  login = async (e) => {
    e.preventDefault();
    const email = e.target.elements.uname.value;
    const password = e.target.elements.psw.value;
    const data = {
      email,
      password,
    };
    try {
      const res = await axios.post("http://localhost:4000/login", data);
      console.log(res);
      if (res.status == 200) {
        this.props.history.push({
          pathname: "/AdminPage",
        });
      } else {
        alert("incorrect Password or Email ID");
      }
    } catch (e) {
      alert("incorrect Password or Email ID");
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <div className="container">
            <label for="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember" />{" "}
              Remember me
            </label>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(SignIn);
