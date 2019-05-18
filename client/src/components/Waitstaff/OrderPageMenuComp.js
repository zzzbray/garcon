import React, {Component} from "react";
import {Table, Button } from "react-bootstrap";
import axios from "axios";

class MenuOrderComp extends Component {
  constructor(props) {
    super();
    this.state = {
      menu: [],
      newOrders: [],
      receipt_id: props.receiptID,
      inventory_stock: ""
    }
  };

  getMenu = () => {
    axios.get("/api/menu")
    // .then(response => response.json())
    // .then((response) => console.log(response));
    .then(response => this.setState({ menu : response.data }));
  };
  
  getDetails = (id) => {
    let query="/api/bill/" + id;
    console.log("Get Details test", query);
    axios.get(query)
    .then(response => this.setState({ newOrders : [...this.state.newOrders, response.data]}));
  };

  handleClick = event => {
    const clickID = event.target.id.toString();
    console.log(clickID);
    this.getDetails(clickID);
  };

  orderButtonHandleClick = () => {
    for (let i=0; i<this.state.newOrders.length; i++) {
      let newOrderData = {
        "receipt_id": this.state.receipt_id,
        "InventoryMenuId": this.state.newOrders[i].menu_id
      };
      this.inventoryUpdate(this.state.newOrders[i].menu_id);
      axios.post("http://localhost:3006/api/new-order", newOrderData);
      // axios.put("http://localhost:3006/api/inventory/" + menuItem);
    };
  };

  inventoryUpdate = (id) => {
    let query="/api/stock/" + id;
    console.log("Get Details test", query);
    axios.get(query)
    .then(response => this.setState({ inventory_stock : response.data}))
    .then(() => {
      let inventoryUpdate = {
      "menu_id": id,
      "stock": this.state.inventory_stock - 1
      };
      axios.put("/api/inventory/" + id, inventoryUpdate);
    })
    // .then(() => axios.put("/api/inventory/" + id, inventoryUpdate));
    // .then(() => console.log("Inventory", this.state.inventory_stock));
  };

  // renderMenu function that takes in menu data (pulled from db in App.js) and dynamically
  // generates HTML to insert them into the table coded by this component.
  // We call this function as the callback to the map function on line 68 below.
  renderMenu = ({menu_id, menu_name, menu_price}) => <tr key={menu_id}><td>{menu_name}</td><td>{menu_price}</td><td><button id={menu_id} onClick={this.handleClick}>Add</button></td></tr>;
  
  // renderCart function that takes in menu data and dynamically
  // generates HTML to insert them into the table coded by this component.
  // We call this function as the callback to the map function on line 95 below.
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