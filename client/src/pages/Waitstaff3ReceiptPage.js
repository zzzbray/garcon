import React from "react";
import WaitstaffNavBar from "../components/Waitstaff/WaitstaffNavBar.js"
import ReceiptPageReceiptComp from "../components/Waitstaff/ReceiptPageReceiptComp.js"
import Header from "../components/Header"

function Waitstaff3ReceiptPage(){
  return (
  <div>
    <WaitstaffNavBar />
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-md-12" >
        <ReceiptPageReceiptComp />
        </div>
      </div>
    </div>
  </div>
  )
}


export default Waitstaff3ReceiptPage