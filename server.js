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
  // db.Inventory.findAll({
  //   where: {
  //     isAvailable: true
  //   }
  // }).then(function(activeMenu) {
  //   res.json(activeMenu);
  // });
});

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
