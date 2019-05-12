import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Col from "react-bootstrap/Col"


function WaitstaffNavBar(){
  return (
    
    <Nav class="navbar navbar-expand-lg navbar-dark bg-dark"> 
    {/* Href tag needs to be added correctly on the line below to run without warnings  */}
   <a class="navbar-brand" href="nowhere.js">Garçon</a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav mr-auto">
       <li class="nav-item">
       {/* Href tag needs to be added correctly on the line below to run without warnings */}
         <a class="nav-link" href>Staff <span class="sr-only">(current)</span></a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="sales.html">Current Table</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="menuItems.html">Menu Items</a>
       </li>
     </ul>
     <ul class="navbar-nav mr-right">
       <li class="nav-item">
        {/* Href tag needs to be added correctly on the line below to run without warnings  */}
         <a class="nav-link" href>Welcome, ServerA</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="logout.html">Logout</a>
       </li>
     </ul>
   </div>
 </Nav>
  )
}


export default WaitstaffNavBar;