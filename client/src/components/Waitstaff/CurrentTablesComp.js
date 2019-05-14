// This will be the table for Waitstaff to keep track of active tables
import React, {Component} from 'react';
import Table from "react-bootstrap/Table";
import axios from "axios";
// import Button from "react-bootstrap/Button";

class CurrentTablesComp extends Component {
  constructor() {
    super();
    this.state = {
      activeOrders: [],
      nextReceiptNum: "",
      billTotals: [],
      currentTables: [],
      finalTables: []
    }
  };

  handleClick = event => {
    console.log("Clicked button id: ", event.target.id)
  };


  //     this.setState({currentTables : [...this.state.currentTables, {receipt: this.state.activeOrders[x].receipt_id, check: this.state.billTotals[x] }]})


  getActiveTables = () => {
    fetch("http://localhost:3006/api/active-tables")
    .then(response => response.json())
    // .then(response => this.setState({ activeOrders : response }))
    .then(response => {
      for (let a=0; a<response.length; a++) {
        this.setState({ activeOrders : [...this.state.activeOrders, {receipt_id: response[a].receipt_id}]});  
      };
      // console.log("Bill test: ", check);
      })
    .then(() => console.log("STATE TEST", this.state.activeOrders))
    .then(() => this.currentBill())
  };
  
  // Use this function when "New Table" button is clicked
  newReceiptNum = () => {
    fetch("http://localhost:3006/api/new-receipt-id")
    .then(response => response.json())
    .then(response => this.setState({ nextReceiptNum : response[0].receipt_id + 1 }))
    // .then(() => this.currentBill());
  };

  currentBill = () => {
    for (let m=0; m<this.state.activeOrders.length; m++) {
      let receiptID = this.state.activeOrders[m].receipt_id;
      let queryString = "http://localhost:3006/api/get-bill/" + receiptID;
      axios.get(queryString)
      // .then(response => console.log("TESPONDFFG", response))
      .then(response => this.calculateBill(response.data, m))
      // if (m===this.state.activeOrders.length-1) {
      //   this.joinReceipt();
      // }
    }
  };

  calculateBill = (arr, index) => {
    let check = 0;
    for (let k=0; k<arr.length; k++) {
      check += arr[k].Orders.length * arr[k].menu_price;
    };
    // console.log("Bill test: ", check);
    let activeOrdersCopy = this.state.activeOrders;
    activeOrdersCopy[index].bill = check;
    this.setState({activeOrders: activeOrdersCopy});
    // this.setState({ billTotals : [...this.state.billTotals, check]});
    // console.log("Bill Totals from state: ", this.state.billTotals);
    // this.joinReceipt()
  };

  // joinReceipt = () => {
  //   for (let x=0; x<this.state.activeOrders.length; x++) {
  //     this.setState({currentTables : [...this.state.currentTables, {receipt: this.state.activeOrders[x].receipt_id, check: this.state.billTotals[x] }]})
  //   }
  //   // this.setState({currentTables : [{receipt: this.state.activeOrders[0].receipt_id, check: this.state.billTotals[0]}]})
  //   console.log("JOINED?", this.state.currentTables)
  //   // this.dataManip()
  // }

  // dataManip = () => {
  //   let numTables = this.state.activeOrders.length;
  //   let joinLen = this.state.currentTables.length;
  //   let firstIndex = numTables-joinLen;
  //   for (let z=firstIndex; z<joinLen; z++) {
  //     this.setState({finalTables : [...this.state.finalTables, {rec_id: this.state.currentTables[z].receipt, finalBill: this.state.currentTables[z].check }]})
  //   }
  // }

  componentDidMount() {
    this.getActiveTables();
  }

  

  // renderTable function that takes in orders data (pulled from db in App.js) and dynamically
  // generates HTML to insert them into the table coded by this component.
  // We call this function as the callback to the map function on line 32 below.
  renderTables = ({receipt_id, bill}) => <tr key={receipt_id}><td>{receipt_id}</td><td></td><td>${bill}</td><td><button id={receipt_id} onClick={this.handleClick}>Update Order</button><button id={receipt_id} onClick={this.handleClick}>Close Out</button></td></tr>;

  // test = () => this.state.activeOrders.map((value, index) => {
  //     let testContent = this.state.currentTables[index];
  //     return (
  //       <tr>
  //         <td>{value}</td>
  //         <td></td>
  //         <td>{this.state.currentTables[index]}</td>
  //         <td></td>
  //       </tr>
  //     );
  // });


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
            {/* {this.test()} */}
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