import React from 'react';
import WaitstaffNavBar from "../components/Waitstaff/WaitstaffNavBar.js"
import CurrentTablesComp from "../components/Waitstaff/CurrentTablesComp.js"

function Waitstaff1CurTablesPage(){
  return (
  <div>
    <WaitstaffNavBar />
    <h1>Waitstaff Current Tables Page</h1>
    <CurrentTablesComp />
  </div>
  )
}


export default Waitstaff1CurTablesPage;