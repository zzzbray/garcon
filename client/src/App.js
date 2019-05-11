import React, {Component} from 'react';

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
import './App.css';

class App extends Component {

  // Testing State
  state = {
    menu: [],
    // orders: []
  }

  // componentDidMount() {
  //   this.getMenu();
  // }

  // // getMenu function hits an API route on Express server to retrieve menu data from the
  // // inventory table in the database and uses state to store the result of the API call
  // getMenu = () => {
  //   fetch("http://localhost:3006/api/menu")
  //   .then(response => response.json())
  //   .then(response => this.setState({ menu: response }, function() {console.log("Testing menu pull", this.state.menu)}));
  // };

  getOrders = () => {
    fetch("http://localhost:3006/api/orders")
    .then(response => response.json())
    .then(response => this.setState({ orders : response }, function() {console.log("Testing orders pull", this.state.orders)}));
  };

  // Components
  render() {
    // const { menu } = this.state;
    
    return (
      <div className="App">
        {/* <div> */}
          {/* Routing will go here */}
          {/* <LandingPage /> */}
          {/* <Login /> */}
          {/* <Guest1SignUpLogin /> */}
          {/* <Guest2ResMake /> */}
          {/* <Guest3ResConf /> */}
          {/* <ManagerPage /> */}
          {/* <Waitstaff1CurTablesPage /> */}
          <Waitstaff2OrderPage menu={this.state.menu} />
          {/* <Waitstaff3ReceiptPage /> */}
        {/* </div> */}
      </div>
    );
  }
// }
};

export default App;

// Add Router
// Add all components
