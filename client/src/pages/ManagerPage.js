import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./manager.css";
import { Form, Table } from "react-bootstrap";
import axios from "axios";

class ManagerPage extends Component {
  constructor(props) {
    super();
    this.state = {
      activeOrders: [],
      closedOrders: [],
      sales: 0
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
      }
    })
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
    let tab = parseFloat(check);
    let tab_two = check.toFixed(2);
    let salesCopy = this.state.sales;
    salesCopy = salesCopy + tab;
    this.setState({sales: salesCopy});
    let closedOrdersCopy = this.state.closedOrders;
    closedOrdersCopy[index].bill = tab_two;
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
      // <div>
      <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          {/* Href tag needs to be added correctly on the line below to run without warnings */}
          <a className="navbar-brand" href="#">Garçon</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" style={this.twentyWidth} id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
              {/* Href tag needs to be added correctly on the line below to run without warnings */}
                <a className="nav-link" href>Manager <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sales</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Menu Items</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Staff</a>
              </li>
            </ul>
            <ul className="navbar-nav mr-right">
              <li className="nav-item">
              {/* Href tag needs to be added correctly on the line below to run without warnings */}
                <a className="nav-link" href>Welcome, Doctor</a>
              </li>
              <li className="nav-item">
        <Link className="nav-link" to="/">Logout</Link>
        </li>
            </ul>
          </div>
        </nav>

        {/* Header */}
        <header id="header" style={this.padthis}>
          <div className="container">
            <div className="row">
              <div className="col-sm-10">
                <h2>Cochon Volant Brasserie</h2>
              </div>
              <div className="col-sm-2">
                <div className="dropdown create">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Update
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li>
                      {/* Href tag needs to be added correctly on the line below to run without warnings */}
                      <a className="dropdown-item" type="button" data-toggle="modal" data-target="#addMenuItem" href>Add Menu
                        Item</a></li>
                        {/* Href tag needs to be added correctly on the line below to run without warnings */}
                    <a className="dropdown-item" type="button" data-toggle="modal" data-target="#addUser" href>Add Staff</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <section id="breadcrumb">
          <div className="container">
            <ol className="breadcrumb">
              <li className="active">Manager</li>
            </ol>
          </div>
        </section>

        {/* Manager Cards */}
        <section id="main">
          <div className="container">
            <div className="row">
              <div className="col-md-4" >
                <div className="list-group" style={this.listGroup}>
                  <a href="manager.html" className="list-group-item list-group-item-action active main-color-bg"><i
                      className="fas fa-cog"></i>
                    Manager
                  </a>
                  <a href="sales.html" className="list-group-item list-group-item-action">Sales</a>
                  <a href="menuItems.html" className="list-group-item list-group-item-action">Menu Items</a>
                  <a href="staff.html" className="list-group-item list-group-item-action">Staff</a>
                </div>
                <div className="card border-secondary mb-4" style={this.twentyWidth}>
                  <div className="card-header main-color-bg" style={this.moveOver}>Current Sales</div>
                  <div className="card-body text-secondary" style={this.TwentyHeightScroll}>
                    <h5 className="card-title">Sales: ${(this.state.sales).toFixed(2)}</h5>
                  </div>
                </div>
              </div>
              <div className="card border-secondary mb-4 " style={this.twentyWidth}>
                <div className="card-header main-color-bg">Current Tables</div>
                <div className="card-body text-secondary" style={this.TwentyHeightScroll}>
                  <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Receipt ID</th>
                          <th>Current Bill</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.activeOrders.map(this.renderTables)}
                      </tbody>
                    </Table>          
                </div>
              </div>
              <div className="card border-secondary mb-4" style={this.twentyWidth}>
                <div className="card-header main-color-bg">Guest Checks</div>
                <div className="card-body text-secondary">
                  <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Receipt ID</th>
                          <th>Final Bill</th>
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
        <div className="modal fade" id="addMenuItem" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Menu Item</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select style={this.displayBlock} className="form-control">
                    <option value="Appetizer">Appetizer</option>
                    <option value="Entrée">Entrée</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Beverage">Beverage</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input type="number" step="0.01" min="0" className="form-control" placeholder="Price" />
                  {/* </textarea> */}
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-secondary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Add User */}
        <div className="modal fade" id="addUser" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <Form>
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Add Staff</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <label>Position</label>
                    <select style={this.displayBlock} className="form-control">
                      <option value="Manager">Manager</option>
                      <option value="Server">Server</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Login</label>
                    <input type="text" className="form-control" placeholder="Login" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-secondary">Save changes</button>
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