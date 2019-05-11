// This will be the table for Waitstaff to keep track of active tables

import React, {Component} from 'react';
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

class CurrentTablesComp extends Component {
  constructor(props) {
    super();
    this.state = {
      activeOrders: [],
      nextReceiptNum: ""
    }
  };

  handleClick = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    console.log("Clicked button id: ", event.target.id)
  };

  getActiveTables = () => {
    fetch("http://localhost:3006/api/current-tables")
    .then(response => response.json())
    .then(response => this.setState({ activeOrders : response }))
    .then(() => this.newReceiptNum())
  };
  
  // Use this function when "New Table" button is clicked
  newReceiptNum = () => {
    fetch("http://localhost:3006/api/receipt-id")
    .then(response => response.json())
    .then(response => this.setState({ nextReceiptNum : response[0].receipt_id + 1 }, function() {console.log(this.state.orders)}));
  };

  // ==============================
  // PUTTING THIS ON HOLD FOR NOW
  // ==============================
  // currentBill = () => {
  //   for (let i=0; i<this.state.maxReceiptNum; i++) {
  //     fetch("/api/current-bill/", i)
  //     .then(response => response.json())
  //     // .then(response => this.setState({ bill : "erge"}))
  //   }
  // };

  componentDidMount() {
    this.getActiveTables();
  }

  

  // renderTable function that takes in orders data (pulled from db in App.js) and dynamically
  // generates HTML to insert them into the table coded by this component.
  // We call this function as the callback to the map function on line 32 below.
  renderTables = ({entry_id, receipt_id}) => <tr key={entry_id}><td>{receipt_id}</td><td></td><td></td><td><button id={receipt_id} onClick={this.handleClick}>Update Order</button><button id={receipt_id} onClick={this.handleClick}>Close Out</button></td></tr>;

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