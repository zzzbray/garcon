import React from 'react';
import WaitstaffNavBar from "../components/Waitstaff/WaitstaffNavBar.js"
import CurrentTablesComp from "../components/Waitstaff/CurrentTablesComp.js"
import Nav from "react-bootstrap/Nav"
import "./manager.css"



function Waitstaff1CurTablesPage(){
  return (
  <div>
    
    <WaitstaffNavBar />
    <header id="header">
    <div class="container">
      <div class="row">
        <div class="col-sm-10">
          <h2>Cochon Volant Brasserie</h2>
        </div>
      </div>
    </div>
  </header>
    <CurrentTablesComp />

    
  </div>
  )
}


export default Waitstaff1CurTablesPage