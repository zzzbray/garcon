import React from "react";
import WaitstaffNavBar from "../components/Waitstaff/WaitstaffNavBar.js"
import OrderPageMenuComp from "../components/Waitstaff/OrderPageMenuComp"
import OrderPageCurReceiptComp from "../components/Waitstaff/OrderPageCurReceiptComp"

function Waitstaff2OrderPage(props){
  return (
  <div>
    <WaitstaffNavBar />
    <OrderPageCurReceiptComp />
    <OrderPageMenuComp menu={props.menu} />
  </div>
  )
}


export default Waitstaff2OrderPage;

