import React, { Component } from "react";
import "./login.css";

// This is Ryan's index.html
// Logic is located at index.js in the src folder

function LandingPage(){
  return (
  <div className="container">
    <h1>
      Landing Page
    </h1>
    <div className="split left">
      {/* <h1>Cochon Volant Brasserie</h1> */}
      <a href="login.html" className="button"> Piggy</a>
    </div>
    <div className="split right">
      {/* <h1>Taureaux Tavern</h1> */}
      <a href="login.html" className="button"> Bully</a>
    </div>
  </div>
  )
}

export default LandingPage;

// conditional rendering