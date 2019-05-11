// This will be the table for Waitstaff to keep track of active tables

import React, {Component} from 'react';
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

class CurrentTablesComp extends Component {
  constructor(props) {
    super();
    this.state = {
      orders: []
    }
  };

  getOrders = () => {
    fetch("http://localhost:3006/api/orders")
    .then(response => response.json())
    .then(response => this.setState({ orders : response }, function() {console.log("Testing orders pull", this.state.orders)}));
  };
  
  newReceiptNum = () => {
    console.log("Testing receipt num func", this.state.orders);
  };

  componentDidMount() {
    this.getOrders();
  }

  // renderTable function that takes in orders data (pulled from db in App.js) and dynamically
  // generates HTML to insert them into the table coded by this component.
  // We call this function as the callback to the map function on line 32 below.
  renderTables = ({entry_id, receipt_id, table_num, menu_name}) => <tr key={entry_id}><td>{receipt_id}</td><td>{table_num}</td><td>{menu_name}</td></tr>;

  render() {
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Receipt ID</th>
              <th>Table</th>
              <th>Menu Item</th>
              {/* <th>Order More</th>
              <th>Close Out</th> */}
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map(this.renderTables)}
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