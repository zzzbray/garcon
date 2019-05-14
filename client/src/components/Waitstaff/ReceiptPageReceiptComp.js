import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

class ReceiptPageReceiptComp extends Component {
  constructor(props) {
    super();
    this.state = {
      receipt_items: [],
      totalCheck: ""
    }
  };
  
  // Function that queries the db again to retrieve full bill data for each receipt_id
  currentBill = () => {
    let receiptID = 1; // hard-coding this for now, ideally would pull from route
    let queryString = "http://localhost:3006/api/get-bill/" + receiptID;
    axios.get(queryString)
    // .then(response => console.log(response.data))
    // .then(response => this.calculateTotalBill(response.data))
    .then(response => this.setState({receipt_items:response.data}))
    .then(() => console.log(this.state.receipt_items))
    .then(() => this.calculateTotalBill())
  };

  // Function that processes data retrieved through API call and calculates the total bill
  calculateTotalBill = () => {
    let check = 0;
    for (let k=0; k<this.state.receipt_items.length; k++) {
      check += this.state.receipt_items[k].Orders.length * this.state.receipt_items[k].menu_price;
    };
    let tab = check.toFixed(2);
    this.setState({totalCheck: tab});
    console.log(this.state.totalCheck);
  };
//  getJoinedBill = () => {
//     fetch("http://localhost:3006/api/joins")
//     .then(response => response.json())
//     .then(response => this.setState({ bill : response }, function() {console.log("Testing joined bill pull", this.state.bill)}));
//   };
   
  componentDidMount() {
    this.currentBill();
  }

  renderReceipt = ({menu_id, menu_name, menu_price}) => <tr key={menu_id}><td>{menu_name}</td><td>${menu_price}</td></tr>;
  
  render() {
    return (
      <div>
        <div><h1>Current Receipt</h1></div>
        <br />
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.receipt_items.map(this.renderReceipt)}
            {/* <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Data</td>
              <td>Data</td>
              <td>Data</td>
            </tr> */}
          </tbody>
        </Table>
        <h3>Total: ${this.state.totalCheck}</h3>
      </div>
    );
  };
};

export default ReceiptPageReceiptComp