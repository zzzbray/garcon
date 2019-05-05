import React from "react";
import WaitstaffNavBar from "../components/Waitstaff/WaitstaffNavBar.js"
import ReceiptTableComp from "../components/Waitstaff/ReceiptTableComp.js"

function Waitstaff3ReceiptPage(){
  return (
  <div>
    <WaitstaffNavBar />
    <h1>Waitstaff Receipt</h1>
    <ReceiptTableComp />
  </div>
  )
}


export default Waitstaff3ReceiptPage;