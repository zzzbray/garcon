import React from 'react';

// Pages
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import Guest1SignUpLogin from "./pages/Guest1SignUpLogin";
import Guest2ResMake from "./pages/Guest2ResMake";
import Guest3ResConf from "./pages/Guest3ResConf";
import ManagerPage from "./pages/ManagerPage";
import Waitstaff1CurTablesPage from "./pages/Waitstaff1CurTablesPage";
import Waitstaff2OrderPage from "./pages/Waitstaff2OrderPage";
import Waitstaff3ReceiptPage from "./pages/Waitstaff3ReceiptPage";

// Components

import './App.css';

function App() {
  return (
    <div className="App">
    {/* Routing will go here */}
      {/* <LandingPage /> */}
      {/* <Login /> */}
      {/* <Guest1SignUpLogin /> */}
      {/* <Guest2ResMake /> */}
      {/* <Guest3ResConf /> */}
      {/* <ManagerPage /> */}
      {/* <Waitstaff1CurTablesPage /> */}
      <Waitstaff2OrderPage />
      {/* <Waitstaff3ReceiptPage /> */}
    </div>
  );
}

export default App;


// Add Router
// Add all components

