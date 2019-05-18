import React from "react";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

function WaitstaffNavBar(){
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
    {/* Href tag needs to be added correctly on the line below to run without warnings  */}
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav mr-auto">
     <li className="nav-item">
     <a className="navbar-brand" href="#">Garçon</a>
        </li>
       <li className="nav-item">
       <Link className="nav-link" to="/current-tables">Current Tables</Link>
       </li>
     </ul>
     <ul className="navbar-nav mr-right">
       <li className="nav-item">
        {/* Href tag needs to be added correctly on the line below to run without warnings  */}
         <a className="nav-link"href="#">Welcome, Server</a>
       </li>
       <li className="nav-item">
        <Link className="nav-link" to="/login">Logout</Link>
        </li>
     </ul>
   </div>
 </Nav>
  )
}

export default WaitstaffNavBar;