import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./login.css"
import Spaghetti from "./spaghettiman.jpg"



class LoginPage extends Component {
  render() {
    return <section>
      <img
        alt={"garcon!"}
        src={ Spaghetti }
        style={{  
            position: "fixed",
            top: 0,
            width: "100%",
            height: "100%",
            backgroundSize: "cover"
          }}
      />
        <div className="loginbox">
        <form>
          <p>Username</p>
         <input type="text" name="email" placeholder="Enter Username" />
          <p>Your Password</p>
          <input type="password" name="password" placeholder="Enter Password" />
          <Link className="nav-link" to="/current-tables">Server Login</Link>
          <Link className="nav-link" to="/manager">Manager Login</Link>
          <input type="submit" name="" value="Sign In"/>
         </form>
      </div> 
      
</section>
  }
}

export default LoginPage;
