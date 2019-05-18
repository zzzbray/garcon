import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import Waitstaff1CurTablesPage from "./pages/Waitstaff1CurTablesPage";
import Waitstaff2OrderPage from "./pages/Waitstaff2OrderPage";
import Waitstaff3ReceiptPage from "./pages/Waitstaff3ReceiptPage";
import ManagerPage from "./pages/ManagerPage"
import './App.css';

class App extends Component {

  // Components
  render() {
  
    return (
      <Router>
        <div className="App">
          <Switch>
            {/* <Route exact path="/" component={LandingPage} /> 
            <Route exact path="/login" component={Login} />    */}
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/current-tables" component={Waitstaff1CurTablesPage} />
            <Route exact path="/order/:receiptNum" component={Waitstaff2OrderPage} />
            <Route exact path="/receipt/:receiptNum" component={Waitstaff3ReceiptPage} />
            <Route exact path="/manager" component={ManagerPage} />
          {/* <div> */}
            {/* Routing will go here */}
            {/* <LandingPage /> */}
            {/* <Login /> */}
            {/* <ManagerPage /> */}
            {/* <Waitstaff1CurTablesPage /> */}
            {/* <Waitstaff2OrderPage /> */}
            {/* <Waitstaff3ReceiptPage /> */}
          {/* </div> */}
          </Switch>
        </div>
      </Router>
    );
  }
// }
};

export default App;