import React from "react";
import WaitstaffNavBar from "../components/Waitstaff/WaitstaffNavBar.js"
import OrderPageMenuComp from "../components/Waitstaff/OrderPageMenuComp"
import OrderPageCurReceiptComp from "../components/Waitstaff/OrderPageCurReceiptComp"
import Header from "../components/Header"

function Waitstaff2OrderPage(props){
  return (
  <div>
    <WaitstaffNavBar />
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-md-12" >
        <OrderPageCurReceiptComp />
        <OrderPageMenuComp receiptID={props.match.params.receiptNum} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Waitstaff2OrderPage;

