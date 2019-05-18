import React from 'react';
import {Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav"


function ManagerNavBar(){
  return (
    <Nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* Href tag needs to be added correctly on the line below to run without warnings */}
      <a class="navbar-brand" href="manager.html">Garçon</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="sales.html">Current Table</a>
        </li>
          <li className="nav-item">
          <Link className="nav-link" to="/order/:receiptNum">Order Page</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/receipt/:receiptNum">Receipt Page</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/manager">Manager</Link>
          </li>
        </ul>
        <ul class="navbar-nav mr-right">
          <li class="nav-item">
          {/* Href tag needs to be added correctly on the line below to run without warnings */}
            <a class="nav-link" href>Welcome, Doctor</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="logout.html">Logout</a>
          </li>
        </ul>
      </div>
    </Nav>
  )
}

export default ManagerNavBar;