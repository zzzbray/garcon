import React from "react";
import WaitstaffNavBar from "../components/Waitstaff/WaitstaffNavBar.js"
import OrderPageMenuComp from "../components/Waitstaff/OrderPageMenuComp"
import Header from "../components/Header"

function Waitstaff2OrderPage(props){
  return (
  <div>
    <WaitstaffNavBar />
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-md-12" >
        <OrderPageMenuComp receiptID={props.match.params.receiptNum} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Waitstaff2OrderPage;

