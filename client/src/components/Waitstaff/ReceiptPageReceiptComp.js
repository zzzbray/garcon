import React, {Component} from "react";
import { Table, Button, Row } from "react-bootstrap";
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
    let queryString = "http://localhost:3006/api/get-bill/" + this.props.receiptID;
    axios.get(queryString)
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

  // OnClick function for Close Out button to update receipt in Orders table by setting
  // isClosedOut === true
  handleClick = () => {
    let updateURL = "/api/closeout/" + this.props.receiptID;
    axios.put(updateURL);
  };
   
  componentDidMount() {
    this.currentBill();
  }

  renderReceipt = ({menu_id, menu_name, menu_price}) => <tr key={menu_id}><td>{menu_name}</td><td>${menu_price}</td></tr>;
  
  render() {
    return (
      <div>
        <br />
        <Row>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.receipt_items.map(this.renderReceipt)}
            </tbody>
          </Table>
        </Row>
        <div>
        </div>
        <h3>Total: ${this.state.totalCheck}</h3>
        <Button variant="success" size="lg" block onClick={this.handleClick}>
          Cash Out
        </Button>
      </div>
    );
  };
};

export default ReceiptPageReceiptComp