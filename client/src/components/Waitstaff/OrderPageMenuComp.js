import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";

class MenuOrderComp extends Component {
  constructor(props) {
    super();
    this.state = {
      menu: [],
      newOrders: [],
      cart: []
    }
  };

  getMenu = () => {
    fetch("http://localhost:3006/api/menu")
    .then(response => response.json())
    .then(response => this.setState({ menu : response }, function() {console.log("Testing menu pull", this.state.menu)}));
  };
  
  getDetails = (id) => {
    let query="http://localhost:3006/api/bill/" + id;
    axios.get(query)
    .then(response => this.setState({ newOrders : [...this.state.newOrders, response.data]}, function() {console.log("Testing", this.state.newOrders)}));
  };

  handleClick = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    console.log("Clicked button id: ", event.target.id);
    const clickID = event.target.id.toString();
    this.getDetails(clickID);
  };

  orderButtonHandleClick = () => {
    console.log("CLICKED");
    for (let i=0; i<this.state.newOrders.length; i++) {
      let newOrderData = {
        "receipt_id": 2,
        "InventoryMenuId": this.state.newOrders[i].menu_id
      };
      axios.post("http://localhost:3006/api/new-order", newOrderData)
    };
    console.log("orderButton", this.state.newOrders)
  };


  // renderMenu function that takes in menu data (pulled from db in App.js) and dynamically
  // generates HTML to insert them into the table coded by this component.
  // We call this function as the callback to the map function on line 32 below.
  renderMenu = ({menu_id, menu_name, menu_price}) => <tr key={menu_id}><td>{menu_name}</td><td>{menu_price}</td><td><button id={menu_id} onClick={this.handleClick}>Add</button></td></tr>;
  
  renderCart = ({menu_id, menu_name}) => <tr key={menu_id}><td>{menu_id}</td><td>{menu_name}</td><td></td></tr>;
  
  componentDidMount() {
    this.getMenu();
  }

  render() {
    return (
      <div>
        <h3>
          Add to Order
        </h3>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Menu Item</th>
              <th>Price</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            {this.state.menu.map(this.renderMenu)}
            {/* <tr>
              <td>Menu Item </td>
              <td>Add
                <div id='counter'>{this.state.counter}
                  <button onClick = {this.increment}> Add 1 </button> 
                  <button onClick = {this.decrement}> Minus 1 </button> 
                </div>
              </td>
            </tr> */}
          </tbody>
        </Table>
        <h3>
          Current Order
        </h3>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Menu ID</th>
              <th>Menu Item</th>
              <th>Remove?</th>
            </tr>
          </thead>
          <tbody>
            {this.state.newOrders.map(this.renderCart)}
          </tbody>
        </Table>
        <Button variant="danger" onClick={this.orderButtonHandleClick}>Order</Button>
      </div>
    )
  }
};

export default MenuOrderComp