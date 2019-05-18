import React, { Component } from "react";
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./login.css"
import Spaghetti from "./spaghettiman.jpg"


class LoginPage extends Component {
  render() {
    return <section>
      <img fluid className= "imgResponsive"
        alt={"garcon!"}
        style={{ 
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
}} 
        src={ Spaghetti } />
        <div class="loginbox">
        <form>
          <p>Username</p>
         <input type="text" name="email" placeholder="Enter Username" />
          <p>Your Password</p>
          <input type="password" name="password" placeholder="Enter Password" />
          <Link className="nav-link" to="/current-tables">Server Login</Link>
          <Link className="nav-link" to="/manager">Manager Login</Link>
          <input type="submit" name="" value="Sign In"/>
          {/* <a href="index.html">Pick Your Pleasure</a> */}
         </form>
      </div> 
      
</section>
  }
}

export default LoginPage;
