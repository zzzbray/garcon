import React, { Component } from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./login.css"



class LoginPage extends Component {
  render() {
    return <div style={{  
      backgroundImage: "url(" + "https://www.frenchtoday.com//assets/2015/12/french-food-good-manners.jpg" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
        <div class="loginbox">
         {/* <h1>Garçon</h1> */}
        <form action="/api/signup" method="POST">
          <p>Username</p>
         <input type="text" name="email" placeholder="Enter Username" />
          <p>Your Password</p>
          <input type="password" name="password" placeholder="Enter Password" />
          <input type="submit" name="" value="Sign In" />
          <a href="index.html">Pick Your Pleasure</a>
        </form>
      </div> 
      
</div>
  }
}

export default LoginPage;
