import React from "react";
import Nav from "react-bootstrap/Nav"


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
         <a class="nav-link" href="sales.html">Current Table</a>
       </li>
     </ul>
     <ul class="navbar-nav mr-right">
       <li class="nav-item">
        {/* Href tag needs to be added correctly on the line below to run without warnings  */}
         <a class="nav-link" href>Welcome, Server</a>
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