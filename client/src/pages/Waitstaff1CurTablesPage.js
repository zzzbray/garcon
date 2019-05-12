import React from 'react';
import WaitstaffNavBar from "../components/Waitstaff/WaitstaffNavBar.js"
import CurrentTablesComp from "../components/Waitstaff/CurrentTablesComp.js"
import newNavBar from "../components/Waitstaff/newNavBar"

function Waitstaff1CurTablesPage(){
  return (
  <div>
    <newNavBar />
    <WaitstaffNavBar />
    <CurrentTablesComp />
  </div>
  )
}


export default Waitstaff1CurTablesPage