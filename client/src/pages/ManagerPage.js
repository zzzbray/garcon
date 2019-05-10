import React from "react"
import ManagerNavBar from "../components/Manager/ManagerNavBar.js"
import ManagerTableComp from "../components/Manager/ManagerTableComp.js"

function ManagerPage(){
  return (
  <div>
    <div>
    <ManagerNavBar />
    </div>
    Manager Page

    <ManagerTableComp />
  </div>
  )
}


export default ManagerPage;