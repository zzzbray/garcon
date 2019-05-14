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

  // GET route for waitstaff to pull detailed inventory info based on menu_id
  app.get("/api/bill/:id", function(req, res) {
    db.Inventory.findOne({
      where: {
        menu_id: req.params.id
      }
    }).then(function(billItem) {
      res.json(billItem);
    });
  });

  // GET route for waitstaff to pull active tables
  app.get("/api/active-tables", function(req, res) {
    db.Order.findAll({
      where: {isClosedOut: false},
      attributes: [[db.Sequelize.fn("DISTINCT", db.Sequelize.col("receipt_id")), "receipt_id"]],
      order: [
        ["receipt_id", "ASC"]
      ]
    }).then(function(activeTables) {
      res.json(activeTables);
    });
  });

  // GET route for waitstaff to pull active tables
  app.get("/api/new-receipt-id", function(req, res) {
    db.Order.findAll({
      attributes: [[db.Sequelize.fn("MAX", db.Sequelize.col("receipt_id")), "receipt_id"]]
    }).then(function(maxReceiptID) {
      res.json(maxReceiptID);
    });
  });

  // GET route to test Sequelize associations
  app.get("/api/joins", function(req, res) {
    db.Inventory.findAll({
      include: [db.Order]
    }).then(inventories => {
      res.json(inventories);
    });
  });

  // POST route for waitstaff to post orders to database
  app.post("/api/new-order", function(req, res) {
    db.Order.create(req.body).then(newOrderData => {
      console.log(newOrderData);
      res.json(newOrderData);
    });
  });

  // GET route for waitstaff to calculate current bill by receipt_id
  // app.get("/api/current-bill/:receipt-id", function(req, res) {
  //   connection.query(SELECT_BY_ID, {receipt_id: req.params.receipt-id}, function(err, queryResults) {
  //     res.json(queryResults)
  //   })
  // });

};
