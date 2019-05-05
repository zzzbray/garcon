import React from "react";
import WaitstaffNavBar from "../components/Waitstaff/WaitstaffNavBar.js"
import MenuOrderComp from "../components/Waitstaff/MenuOrderComp.js"

function Waitstaff2OrderPage(){
  return (
  <div>
    <WaitstaffNavBar />
    <h1>Waitstaff Current Tables</h1>
    <MenuOrderComp />
  </div>
  )
}


export default Waitstaff2OrderPage;