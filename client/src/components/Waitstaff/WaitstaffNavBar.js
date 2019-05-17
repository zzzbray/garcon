import React from "react";
import Nav from "react-bootstrap/Nav"

function WaitstaffNavBar(){
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
    {/* Href tag needs to be added correctly on the line below to run without warnings  */}
   <a className="navbar-brand" href="#">Garçon</a>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav mr-auto">
       <li className="nav-item">
         <a className="nav-link" href="sales.html">Current Table</a>
       </li>
     </ul>
     <ul className="navbar-nav mr-right">
       <li className="nav-item">
        {/* Href tag needs to be added correctly on the line below to run without warnings  */}
         <a className="nav-link" href="nowhere.js">Welcome, Server</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="logout.html">Logout</a>
       </li>
     </ul>
   </div>
 </Nav>
  )
}

export default WaitstaffNavBar;