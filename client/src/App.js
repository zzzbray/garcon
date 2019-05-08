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
    menu: []
  }

  componentDidMount() {
    this.getMenu();
  }

  getMenu = _ => {
    fetch("http://localhost:3006/api/menu")
      .then(response => response.json())
      // .then(({data}) => {
      //   console.log(data)
      // })
      .then(response => this.setState({ menu: response }))
      .then(console.log(this.state.menu))
  };

  renderMenu = ({menu_id, menu_name}) => <div key={menu_id}>{menu_name}</div>;

// Components
// function App() {
  render() {
    const { menu } = this.state;
    
    return (
      <div className="App">
        {this.state.menu.map(this.renderMenu)}        
        {/* <div> */}
          {/* Routing will go here */}
          {/* <LandingPage /> */}
          {/* <Login /> */}
          {/* <Guest1SignUpLogin /> */}
          {/* <Guest2ResMake /> */}
          {/* <Guest3ResConf /> */}
          {/* <ManagerPage /> */}
          {/* <Waitstaff1CurTablesPage /> */}
          {/* <Waitstaff2OrderPage /> */}
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

