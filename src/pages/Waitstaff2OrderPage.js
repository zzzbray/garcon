import React from "react";
import WaitstaffNavBar from "../components/Waitstaff/WaitstaffNavBar.js"
import OrderPageMenuComp from "../components/Waitstaff/OrderPageMenuComp"
import OrderPageCurReceiptComp from "../components/Waitstaff/OrderPageCurReceiptComp"

function Waitstaff2OrderPage(){
  return (
  <div>
    <WaitstaffNavBar />
    <h1>Waitstaff Current Tables</h1>
    <OrderPageCurReceiptComp />
    <OrderPageMenuComp />
  </div>
  )
}


export default Waitstaff2OrderPage;