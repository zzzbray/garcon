import React from "react"
import "./manager.css"
import Form from "react-bootstrap/Form"


// CSS Rules... literally
const listGroup = {
  marginBottom: '1rem'
};

const displayBlock = {
  display: 'block'
};

const twentyWidth = {
  width: "20rem"
};

const TwentyHeightScroll = {
  maxHeight: "20rem",
  overflowY: "scroll"
}

const moveOver ={
  padding: "20px"
}

const padthis={
  paddingTop: "15px"
}

function ManagerPageTwo(){
  return (
    <div>
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    {/* Href tag needs to be added correctly on the line below to run without warnings */}
    <a className="navbar-brand" href="manager.html">Garçon</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" style={twentyWidth} id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
        {/* Href tag needs to be added correctly on the line below to run without warnings */}
          <a className="nav-link" href>Manager <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="sales.html">Sales</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="menuItems.html">Menu Items</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="staff.html">Staff</a>
        </li>
      </ul>
      <ul className="navbar-nav mr-right">
        <li className="nav-item">
        {/* Href tag needs to be added correctly on the line below to run without warnings */}
          <a className="nav-link" href>Welcome, Doctor</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="logout.html">Logout</a>
        </li>
      </ul>
    </div>
  </nav>

  {/* Header */}
  <header id="header" style={padthis}>
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
          <div className="list-group" style={listGroup}>
            <a href="manager.html" className="list-group-item list-group-item-action active main-color-bg"><i
                className="fas fa-cog"></i>
              Manager
            </a>
            <a href="sales.html" className="list-group-item list-group-item-action">Sales</a>
            <a href="menuItems.html" className="list-group-item list-group-item-action">Menu Items</a>
            <a href="staff.html" className="list-group-item list-group-item-action">Staff</a>
          </div>
          <div className="card border-secondary mb-4" style={twentyWidth}>
            <div className="card-header main-color-bg" style={moveOver}>Current Sales</div>
            <div className="card-body text-secondary" style={TwentyHeightScroll}>
              <h5 className="card-title">Sales:</h5>
            </div>
          </div>
        </div>
        <div className="card border-secondary mb-4 " style={twentyWidth}>
          <div className="card-header main-color-bg">Current Tables</div>
          <div className="card-body text-secondary" style={TwentyHeightScroll}>
            <h5 className="card-title">Number of Seated Tables:</h5>
              <strong>Table ID:</strong>
              <ul>
                <li>Table 1</li>
                <li>Table 2</li>
                <li>Table 3</li>
                <li>Table 4</li>
              </ul>
          </div>
        </div>
        <div className="card border-secondary mb-4" style={twentyWidth}>
          <div className="card-header main-color-bg">Guest Checks</div>
          <div className="card-body text-secondary">
            <h5 className="card-title">Completed Tables</h5>
              <strong>Table ID:</strong>
              <ul>
                <li>Table 1</li>
                <li>Table 2</li>
                <li>Table 3</li>
                <li>Table 4</li>
              </ul>
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
            <select style={displayBlock} className="form-control">
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
              <select style={displayBlock} className="form-control">
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
  )
}

export default ManagerPageTwo;