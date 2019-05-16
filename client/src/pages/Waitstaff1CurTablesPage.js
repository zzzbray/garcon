import React from 'react';
import WaitstaffNavBar from "../components/Waitstaff/WaitstaffNavBar.js"
import CurrentTablesComp from "../components/Waitstaff/CurrentTablesComp.js"
import Header from "../components/Header"

import "./manager.css"

function Waitstaff1CurTablesPage(){
  return (
  <div>
    <WaitstaffNavBar />
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-md-12" >
        <CurrentTablesComp />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Waitstaff1CurTablesPage