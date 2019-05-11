// Require environment variables, express and database
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const db = require("./models");

// Config for express app
var app = express();
var PORT = process.env.PORT || 3006;

// Middleware to handle data parsing and establish static directory
// to use static files (e.g. js and css files)
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.static("public"));

// Creating connection to SQL database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "garcon_db"
});

connection.connect(function(err) {
    if (err) throw err;
});


// EXAMPLE SQL QUERIES
const SELECT_ALL_INVENTORY = "SELECT * FROM inventory";
const SELECT_ALL_ORDERS = "SELECT * FROM orders WHERE isClosedOut = 0";
const SELECT_MAX_RECEIPT_ID = "SELECT MAX(receipt_id) AS receipt_id FROM orders";
const SELECT_DISTINCT = "SELECT DISTINCT receipt_id FROM orders WHERE isClosedOut = 0";
// const SELECT_BY_ID = "SELECT * FROM orders WHERE ?";



// EXAMPLE ROUTES
app.get("/", function(req,res) {
    res.send("hello world");
});

// GET route for waitstaff to pull active inventory
app.get("/api/menu", function(req, res) {
    connection.query(SELECT_ALL_INVENTORY, function(err, queryResults) {
        res.json(queryResults)
    })
    
    // Sequelize query
    // db.Inventory.findAll({
    //   where: {
    //     isAvailable: true
    //   }
    // }).then(function(activeMenu) {
    //   res.json(activeMenu);
    // });
});

// GET route for waitstaff to pull active tables
app.get("/api/orders", function(req, res) {
  connection.query(SELECT_ALL_ORDERS, function(err, queryResults) {
      res.json(queryResults)
  })
  
  // Sequelize query
  // db.Orders.findAll({
  //   where: {
  //     isClosedOut: false
  //   }
  // }).then(function(activeTables) {
  //   res.json(activeTables);
  // });
});

// GET route for waitstaff to pull active tables
app.get("/api/current-tables", function(req, res) {
  connection.query(SELECT_DISTINCT, function(err, queryResults) {
      res.json(queryResults)
  })
});

// GET route for waitstaff to pull active tables
app.get("/api/receipt-id", function(req, res) {
  connection.query(SELECT_MAX_RECEIPT_ID, function(err, queryResults) {
      res.json(queryResults)
  })
});

// --------------------------------------------------------
// POST route for waitstaff to post new orders to db.
app.post("/api/orders", function(req, res) {
  db.Orders.create({
    receipt_id: what, //how should we pull this?
    customer_id: req.body.custID, // add function for this optional field
    table_num: req.body.tableNum,
    menu_id: req.body.chosenButton, //multiple different post routes for each row in the order form?
    isClosedOut: false
  }).then(function(newOrder) {
      res.json(newOrder);
  });
});
// --------------------------------------------------------

// GET route for waitstaff to calculate current bill by receipt_id
// app.get("/api/current-bill/:receipt-id", function(req, res) {
//   connection.query(SELECT_BY_ID, {receipt_id: req.params.receipt-id}, function(err, queryResults) {
//     res.json(queryResults)
//   })
// });

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync().then(function() {
  app.listen(process.env.PORT || 3006, function() {
    console.log(
      "==> 🌎  Listening on port %s. All systems go. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
