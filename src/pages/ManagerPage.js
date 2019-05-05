import React from 'react';
import ManagerNavBar from "../components/Manager/ManagerNavBar.js"
import ManagerTableComp from "../components/Manager/ManagerTableComp.js"

function ManagerPage(){
  return (
  <div>
    <ManagerNavBar />
    <h1>ManagerPage</h1>
    <ManagerTableComp />
  </div>
  )
}


export default ManagerPage;