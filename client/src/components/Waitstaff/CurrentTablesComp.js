// This will be the table for Waitstaff to keep track of active tables
import React, {Component} from 'react';
import Table from "react-bootstrap/Table";
import axios from "axios";
// import Button from "react-bootstrap/Button";

class CurrentTablesComp extends Component {
  constructor(props) {
    super();
    this.state = {
      activeOrders: [],
      nextReceiptNum: "",
      billTotals: []
    }
  };

  handleClick = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    console.log("Clicked button id: ", event.target.id)
  };

  getActiveTables = () => {
    fetch("http://localhost:3006/api/active-tables")
    .then(response => response.json())
    .then(response => this.setState({ activeOrders : response }))
    .then(() => this.newReceiptNum())
  };
  
  // Use this function when "New Table" button is clicked
  newReceiptNum = () => {
    fetch("http://localhost:3006/api/new-receipt-id")
    .then(response => response.json())
    .then(response => this.setState({ nextReceiptNum : response[0].receipt_id + 1 }))
    // .then(() => console.log(this.state.activeOrders));
    .then(() => this.currentBill());
  };

  currentBill = () => {
    console.log(this.state.activeOrders);
    for (let m=0; m<this.state.activeOrders.length; m++) {
      // let m = 3;
      let receiptID = this.state.activeOrders[m].receipt_id;
      let queryString = "http://localhost:3006/api/get-bill/" + receiptID;
      axios.get(queryString)
      // .then(response => console.log(this.state.activeOrders));
      .then(response => this.calculateBill(response.data))
      // 
      // .then(response => this.setState({ newOrders : [...this.state.newOrders, response.data]}));)
    }
  };

  calculateBill = (arr) => {
    let check = 0;
    for (let k=0; k<arr.length; k++) {
      check += arr[k].Orders.length * arr[k].menu_price;
    };
    console.log("Bill test: ", check);
    this.setState({ billTotals : [...this.state.billTotals, check]});
    console.log("Bill Totals from state: ", this.state.billTotals);
  };

  componentDidMount() {
    this.getActiveTables();
  }

  

  // renderTable function that takes in orders data (pulled from db in App.js) and dynamically
  // generates HTML to insert them into the table coded by this component.
  // We call this function as the callback to the map function on line 32 below.
  renderTables = ({receipt_id}) => <tr key={receipt_id}><td>{receipt_id}</td><td></td><td></td><td><button id={receipt_id} onClick={this.handleClick}>Update Order</button><button id={receipt_id} onClick={this.handleClick}>Close Out</button></td></tr>;

  render() {
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Receipt ID</th>
              <th>Table</th>
              <th>Current Bill (FF)</th>
              <th>Actions</th>
              {/* <th>Order More</th>
              <th>Close Out</th> */}
            </tr>
          </thead>
          <tbody>
            {this.state.activeOrders.map(this.renderTables)}
            {/* <tr>
              <td>receipt_id</td>
              <td>$$</td>
              <td><Button /></td>
              <td><Button /> </td>
            </tr> */}
          </tbody>
        </Table>
      </div>
    )  
  }
};

export default CurrentTablesComp