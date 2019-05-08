import React, { Component } from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

class LoginPage extends Component {
  render() {
    return <div>
        <div class="loginbox">
         {/* <h1>Garçon</h1> */}
        <form action="/api/signup" method="POST">
          <p>Username</p>
         {/* <input type="text" name="email" placeholder="Enter Username">
          <p>Password</p>
          <input type="password" name="password" placeholder="Enter Password">
          <input type="submit" name="" value="Sign In">*/}
          <a href="index.html">Pick Your Pleasure</a>
        </form>
      </div> 

    </div>
  }
}

export default LoginPage;
