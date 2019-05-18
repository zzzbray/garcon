// This will be the table for Waitstaff to keep track of active tables
import React, {Component} from 'react';
import {Table, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

class CurrentTablesComp extends Component {
  constructor() {
    super();
    this.state = {
      activeOrders: [],
      nextReceiptNum: "",
      billTotals: [],
      currentTables: [],
      finalTables: [],
      clickedTable: ""
    }
  };

  // Still need to add functionality to capture clicked id and route to Waitstaff page 2
  // for that specific order
  handleClick = event => {
    // I know how to grab the id
    console.log("Clicked button id: ", event.target.id);
    this.setState({clickedTable: event.target.id});

    // insert routing functionality here
  };

  // newTableHandleClick = () => {
  //   this.newReceiptNum();
  //   console.log(this.state.nextReceiptNum);
  // };

  // Function that queries the database to find all active tables (i.e. tables that have
  // not yet been closed out)
  getActiveTables = () => {
    fetch("http://localhost:3006/api/active-tables")
    .then(response => response.json())
    .then(response => {
      for (let a=0; a<response.length; a++) {
        this.setState({ activeOrders : [...this.state.activeOrders, {receipt_id: response[a].receipt_id}]});
      }})
    .then(() => this.currentBill())
  };
  
  // Function that queries the db again to retrieve full bill data for each receipt_id
  currentBill = () => {
    for (let m=0; m<this.state.activeOrders.length; m++) {
      let receiptID = this.state.activeOrders[m].receipt_id;
      let queryString = "http://localhost:3006/api/get-bill/" + receiptID;
      axios.get(queryString)
      .then(response => this.calculateBill(response.data, m))
    }
  };

  // Function that processes data retrieved through API call and calculates the total bill
  calculateBill = (arr, index) => {
    let check = 0;
    for (let k=0; k<arr.length; k++) {
      check += arr[k].Orders.length * arr[k].menu_price;
    };
    let tab = check.toFixed(2);
    let activeOrdersCopy = this.state.activeOrders;
    activeOrdersCopy[index].bill = tab;
    this.setState({activeOrders: activeOrdersCopy});
  };

  // Use this function when "New Table" button is clicked
  newReceiptNum = () => {
    fetch("http://localhost:3006/api/new-receipt-id")
    .then(response => response.json())
    .then(response => this.setState({ nextReceiptNum : response[0].receipt_id + 1 }))
    .then(() => console.log((this.state.nextReceiptNum)));
  };

  componentDidMount() {
    this.getActiveTables();
    this.newReceiptNum();
  }
  
  // renderTable function that accepts bill data and dynamically
  // generates HTML to insert them into the table coded by this component.
  // We call this function as the callback to the map function on line 93 below.
  renderTables = ({receipt_id, bill}) => <tr key={receipt_id}><td>{receipt_id}</td><td>${bill}</td><td><button id={receipt_id}><Link to={"/order/" + receipt_id}>Update Order</Link></button><button id={receipt_id}><Link to={"/receipt/" + receipt_id}>Close Out</Link></button></td></tr>;

  render() {
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Receipt ID</th>
              <th>Current Bill</th>
              <th>Actions</th>
              {/* <th>Order More</th>
              <th>Close Out</th> */}
            </tr>
          </thead>
          <tbody>
            {this.state.activeOrders.map(this.renderTables)}
          </tbody>
        </Table>
          <Link to={"/order/" + this.state.nextReceiptNum}>
            <Button variant="success" size="lg" block>
              New Table
            </Button>
          </Link>
      </div>
    )  
  }
};

export default CurrentTablesComp