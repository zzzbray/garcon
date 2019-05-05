import React, { Component } from "react";
import "./login.css";
import Form from "react-bootstrap/Form"

class LoginPage extends Component {
  render() {
    return <div>
      <h1>Garçon</h1>
      <Form action="/api/signup" method="POST">
        <p>Username</p>
        <input type="text" name="email" placeholder="Enter Username" />
        <p>Password</p>
        <input type="password" name="password" placeholder="Enter Password" />
        <input type="submit" name="" value="Sign In" />
        <a href="index.html">Pick Your Pleasure</a>
      </Form>
    </div>
  }
}

export default LoginPage;
