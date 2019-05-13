import React, {Component} from "react"
import Table from "react-bootstrap/Table"

class ReceiptPageReceiptComp extends Component {
  constructor(props) {
    super();
    this.state = {
      bill: []
    }
  };
  
  getJoinedBill = () => {
    fetch("http://localhost:3006/api/joins")
    .then(response => response.json())
    .then(response => this.setState({ bill : response }, function() {console.log("Testing joined bill pull", this.state.bill)}));
  };
  
  componentDidMount() {
    // this.getJoinedBill();
  }
  
  render() {
    return (
      <div>
        <div><h1>Current Receipt</h1></div>
        <br />
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>menu_name</th>
              <th>menu_price</th>
              <th>time_added</th>
            </tr>
          </thead>
          <tbody>

            {/* <tr>
              <td>Data</td>
              <td>Data</td>
              <td>Data</td>
            </tr> */}
          </tbody>
        </Table>
      </div>
    );
  };
};

export default ReceiptPageReceiptComp