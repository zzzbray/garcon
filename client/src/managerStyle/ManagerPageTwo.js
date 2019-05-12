import React from "react"
import "./manager.css"
import Form from "react-bootstrap/Form"

const listGroup = {
  marginBottom: '1rem'
};

// style=margin-bottom: 1rem

function ManagerPageTwo(){
  return (
    <div>
  <div>

    New Manager Page
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Garçon</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Manager <span class="sr-only">(current)</span></a>
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
          <a class="nav-link" href>Welcome, Doctor</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="logout.html">Logout</a>
        </li>
      </ul>
    </div>
  </nav>

  {/* Header */}
  <header id="header">
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
              <li><a class="dropdown-item" type="button" data-toggle="modal" data-target="#addMenuItem">Add Menu
                  Item</a></li>
              <a class="dropdown-item" type="button" data-toggle="modal" data-target="#addUser">Add Staff</a>
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
        <div class="col-md-4">
          <div class="list-group" style={listGroup}>
            <a href="manager.html" class="list-group-item list-group-item-action active main-color-bg"><i
                class="fas fa-cog"></i>
              Manager
            </a>
            <a href="sales.html" class="list-group-item list-group-item-action">Sales</a>
            <a href="menuItems.html" class="list-group-item list-group-item-action">Menu Items</a>
            <a href="staff.html" class="list-group-item list-group-item-action">Staff</a>
          </div>
          <div class="card border-secondary mb-4 " style="width: 20rem;">
            <div class="card-header main-color-bg">Current Sales</div>
            <div class="card-body text-secondary" style="max-height: 20rem; overflow-y: scroll">
              <h5 class="card-title">Sales:</h5>
            </div>
          </div>
        </div>
        <div class="card border-secondary mb-4 " style="width: 20rem;">
          <div class="card-header main-color-bg">Current Tables</div>
          <div class="card-body text-secondary" style="max-height: 20rem; overflow-y: scroll">
            <h5 class="card-title">Number of Seated Tables:</h5>
            <p class="card-text">
              <strong>Table ID:</strong>
              <ul>
                <li>Table 1</li>
                <li>Table 2</li>
                <li>Table 3</li>
                <li>Table 4</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="card border-secondary mb-4" style="width: 20rem;">
          <div class="card-header main-color-bg">Guest Checks</div>
          <div class="card-body text-secondary">
            <h5 class="card-title">Completed Tables</h5>
            <p class="card-text">
              <strong>Table ID:</strong>
              <ul>
                <li>Table 1</li>
                <li>Table 2</li>
                <li>Table 3</li>
                <li>Table 4</li>
              </ul>
            </p>
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
            <select style="display: block" class="form-control">
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
              <select style="display: block" class="form-control">
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

  )
}


export default ManagerPageTwo;