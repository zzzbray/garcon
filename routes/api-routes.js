// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies (Requiring our models)
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req,res) {
    res.send("hello world");
  });

  // GET route for waitstaff to pull active inventory
  app.get("/api/menu", function(req, res) {
    db.Inventory.findAll({
      where: {
        isAvailable: true
      }
    }).then(function(activeMenu) {
      res.json(activeMenu);
    });
  });

  // GET route for waitstaff to pull active tables
  app.get("/api/orders", function(req, res) {
    db.Orders.findAll({
      where: {
        isClosedOut: false
      }
    }).then(function(activeTables) {
      res.json(activeTables);
    });
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

  // GET route for waitstaff to calculate current bill by receipt_id
  // app.get("/api/current-bill/:receipt-id", function(req, res) {
  //   connection.query(SELECT_BY_ID, {receipt_id: req.params.receipt-id}, function(err, queryResults) {
  //     res.json(queryResults)
  //   })
  // });

};
