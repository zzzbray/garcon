import React, {Component} from "react";
import "./manager.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Table from "react-bootstrap/Table";

class ManagerPage extends Component {
  constructor(props) {
    super();
    this.state = {
      activeOrders: [],
      closedOrders: [],
      billTotals: [],
      currentTables: [],
      finalTables: []
    }
  };

  // Function that queries the database to find all active tables (i.e. tables that have
  // not yet been closed out)
  getActiveTables = () => {
    fetch("http://localhost:3006/api/active-tables")
    .then(response => response.json())
    .then(response => {
      for (let a=0; a<response.length; a++) {
        this.setState({ activeOrders : [...this.state.activeOrders, {receipt_id: response[a].receipt_id}]});
      }})
    .then(() => this.activeBill())
    .then(() => this.getClosedTables())
  };

  // Function that queries the db again to retrieve full bill data for each receipt_id
  activeBill = () => {
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

  // Function that queries the database to find all closed tables
  getClosedTables = () => {
    fetch("http://localhost:3006/api/closed-tables")
    .then(response => response.json())
    .then(response => {
      for (let b=0; b<response.length; b++) {
        this.setState({ closedOrders : [...this.state.closedOrders, {receipt_id: response[b].receipt_id}]});
      }})
    .then(() => this.closedBill())
  };

  // Function that queries the db again to retrieve full bill data for each receipt_id
  closedBill = () => {
    for (let n=0; n<this.state.closedOrders.length; n++) {
      let receiptID = this.state.closedOrders[n].receipt_id;
      let queryString = "http://localhost:3006/api/get-bill/" + receiptID;
      axios.get(queryString)
      .then(response => this.calculateCheck(response.data, n))
    }
  };

  // Function that processes data retrieved through API call and calculates the total bill
  calculateCheck = (arr, index) => {
    let check = 0;
    for (let o=0; o<arr.length; o++) {
      check += arr[o].Orders.length * arr[o].menu_price;
    };
    let tab = check.toFixed(2);
    let closedOrdersCopy = this.state.closedOrders;
    closedOrdersCopy[index].bill = tab;
    this.setState({closedOrders: closedOrdersCopy});
  };


  componentDidMount() {
    this.getActiveTables();
  };

  // renderTable function that accepts bill data and dynamically
  // generates HTML to insert them into the table coded by this component.
  // We call this function as the callback to the map function on line 93 below.
  renderTables = ({receipt_id, bill}) => <tr key={receipt_id}><td>{receipt_id}</td><td>${bill}</td></tr>;




  // ====================================
  // CSS Rules... literally
  listGroup = {
    marginBottom: '1rem'
  };

  displayBlock = {
    display: 'block'
  };

  twentyWidth = {
    width: "20rem"
  };

  TwentyHeightScroll = {
    maxHeight: "20rem",
    overflowY: "scroll"
  }

  moveOver ={
    padding: "20px"
  }

  padthis={
    paddingTop: "15px"
  }
  // CSS Rules (fin)
  // ====================================
  
  render() {
    return (
      <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* Href tag needs to be added correctly on the line below to run without warnings */}
      <a class="navbar-brand" href="manager.html">Garçon</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" style={this.twentyWidth} id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
          {/* Href tag needs to be added correctly on the line below to run without warnings */}
            <a class="nav-link" href>Manager <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="sales.html">Sales</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="menuItems.html">Menu Items</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="staff.html">Staff</a>
          </li>
        </ul>
        <ul class="navbar-nav mr-right">
          <li class="nav-item">
          {/* Href tag needs to be added correctly on the line below to run without warnings */}
            <a class="nav-link" href>Welcome, Doctor</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="logout.html">Logout</a>
          </li>
        </ul>
      </div>
    </nav>

    {/* Header */}
    <header id="header" style={this.padthis}>
      <div class="container">
        <div class="row">
          <div class="col-sm-10">
            <h2>Cochon Volant Brasserie</h2>
          </div>
          <div class="col-sm-2">
            <div class="dropdown create">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Update
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  {/* Href tag needs to be added correctly on the line below to run without warnings */}
                  <a class="dropdown-item" type="button" data-toggle="modal" data-target="#addMenuItem" href>Add Menu
                    Item</a></li>
                    {/* Href tag needs to be added correctly on the line below to run without warnings */}
                <a class="dropdown-item" type="button" data-toggle="modal" data-target="#addUser" href>Add Staff</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Breadcrumb */}
    <section id="breadcrumb">
      <div class="container">
        <ol class="breadcrumb">
          <li class="active">Manager</li>
        </ol>
      </div>
    </section>

    {/* Manager Cards */}
    <section id="main">
      <div class="container">
        <div class="row">
          <div class="col-md-4" >
            <div class="list-group" style={this.listGroup}>
              <a href="manager.html" class="list-group-item list-group-item-action active main-color-bg"><i
                  class="fas fa-cog"></i>
                Manager
              </a>
              <a href="sales.html" class="list-group-item list-group-item-action">Sales</a>
              <a href="menuItems.html" class="list-group-item list-group-item-action">Menu Items</a>
              <a href="staff.html" class="list-group-item list-group-item-action">Staff</a>
            </div>
            <div class="card border-secondary mb-4" style={this.twentyWidth}>
              <div class="card-header main-color-bg" style={this.moveOver}>Current Sales</div>
              <div class="card-body text-secondary" style={this.TwentyHeightScroll}>
                <h5 class="card-title">Sales:</h5>
              </div>
            </div>
          </div>
          <div class="card border-secondary mb-4 " style={this.twentyWidth}>
            <div class="card-header main-color-bg">Active Tables</div>
            <div class="card-body text-secondary" style={this.TwentyHeightScroll}>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Receipt ID</th>
                  <th>Current Bill</th>
                  {/* <th>Order More</th>
                  <th>Close Out</th> */}
                </tr>
              </thead>
              <tbody>
                {this.state.activeOrders.map(this.renderTables)}
              </tbody>
            </Table>
              
              {/* <h5 class="card-title">Number of Seated Tables:</h5>
              <p class="card-text">
                <strong>Table ID:</strong>
                <ul>
                  <li>Table 1</li>
                  <li>Table 2</li>
                  <li>Table 3</li>
                  <li>Table 4</li>
                </ul>
              </p> */}
            </div>
          </div>
          <div class="card border-secondary mb-4" style={this.twentyWidth}>
            <div class="card-header main-color-bg">Guest Checks</div>
            <div class="card-body text-secondary">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Receipt ID</th>
                    <th>Final Bill</th>
                    {/* <th>Order More</th>
                    <th>Close Out</th> */}
                  </tr>
                </thead>
                <tbody>
                  {this.state.closedOrders.map(this.renderTables)}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Modals */}
    {/* Add Menu Item */}
    <div class="modal fade" id="addMenuItem" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Menu Item</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Name</label>
              <input type="text" class="form-control" placeholder="Name" />
            </div>
            <div class="form-group">
              <label>Type</label>
              <select style={this.displayBlock} class="form-control">
                <option value="Appetizer">Appetizer</option>
                <option value="Entrée">Entrée</option>
                <option value="Dessert">Dessert</option>
                <option value="Beverage">Beverage</option>
              </select>
            </div>
            <div class="form-group">
              <label>Price</label>
              <input type="number" step="0.01" min="0" class="form-control" placeholder="Price" />
              {/* </textarea> */}
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-secondary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </div>

    {/* Add User */}
    <div class="modal fade" id="addUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <Form>
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add Staff</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" placeholder="Name" />
              </div>
              <div class="form-group">
                <label>Position</label>
                <select style={this.displayBlock} class="form-control">
                  <option value="Manager">Manager</option>
                  <option value="Server">Server</option>
                </select>
              </div>
              <div class="form-group">
                <label>Login</label>
                <input type="text" class="form-control" placeholder="Login" />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-secondary">Save changes</button>
            </div>
        </Form>
        </div>
      </div>
    </div>
    </div>
    );
  };
};

export default ManagerPage;