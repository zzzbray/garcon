import React, { Component } from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./login.css"

class LoginPage extends Component {
  render() {
    return <div>
        <div class="loginbox">
         {/* <h1>Garçon</h1> */}
        <form action="/api/signup" method="POST">
          <p>Username</p>
         <input type="text" name="email" placeholder="Enter Username" />
          <p>Password</p>
          <input type="password" name="password" placeholder="Enter Password" />
          <input type="submit" name="" value="Sign In" />
          <a href="index.html">Pick Your Pleasure</a>
        </form>
      </div> 
    Sign Up Form */}
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else. Promise.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
</div>
  }
}

export default LoginPage;
