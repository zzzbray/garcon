// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies (Requiring our models)
// =============================================================
const db = require("../models");
var passport = require("../config/passport");
const router = require("express").Router();
const path = require("path");

// Routes
// =============================================================
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });


// GET route for waitstaff to pull active inventory
router.use("/api/menu", function(req, res) {
  db.Inventory.findAll({
    where: {
      isAvailable: true
    }
  }).then(function(activeMenu) {
    res.json(activeMenu);
  });
});

// GET route for waitstaff to pull active inventory
  router.use("/api/bill/:id", function(req, res) {
    db.Inventory.findOne({
      where: {
        menu_id: req.params.id
      }
    }).then(function(billItem) {
      res.json(billItem);
    });
  });

  // GET route for waitstaff to pull active inventory
  router.use("/api/stock/:id", function(req, res) {
    db.Inventory.findOne({
      where: {
        menu_id: req.params.id
      }
    }).then(function(billItem) {
      res.json(billItem.stock);
    });
  });

  // GET route for waitstaff and manager pages to generate bills by receipt_id
  router.use("/api/get-bill/:receipt", function(req, res) {
    db.Inventory.findAll({
      include: [{
        model: db.Order,
        where: {
          receipt_id: req.params.receipt
        }
      }]
    }).then(receipt => {
      res.json(receipt);
    });
  });


  // GET route for waitstaff to pull active tables
  router.use("/api/active-tables", function(req, res) {
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
  router.use("/api/closed-tables", function(req, res) {
    db.Order.findAll({
      where: {isClosedOut: true},
      attributes: [[db.Sequelize.fn("DISTINCT", db.Sequelize.col("receipt_id")), "receipt_id"]],
      order: [
        ["receipt_id", "ASC"]
      ]
    }).then(function(closedTables) {
      res.json(closedTables);
    });
  });

  // GET route for waitstaff to pull active tables
  router.use("/api/new-receipt-id", function(req, res) {
    db.Order.findAll({
      attributes: [[db.Sequelize.fn("MAX", db.Sequelize.col("receipt_id")), "receipt_id"]]
    }).then(function(maxReceiptID) {
      res.json(maxReceiptID);
    });
  });

  // GET route to test Sequelize associations
  router.use("/api/joins", function(req, res) {
    db.Inventory.findAll({
      include: [db.Order]
    }).then(inventories => {
      res.json(inventories);
    });
  });

  // POST route for waitstaff to post orders to database
  router.use("/api/new-order", function(req, res) {
    db.Order.create(req.body).then(newOrderData => {
      console.log(newOrderData);
      res.json(newOrderData);
    });
  });

  // PUT route for waitstaff to close out a table in database
  router.use("/api/closeout/:receipt", function(req, res) {
    db.Order.update({
      isClosedOut: true
    }, {where: {receipt_id: req.params.receipt}
    });
  });


  // PUT route to decrement inventory table in db
  router.use("/api/inventory/:menuID", function(req, res) {
    db.Inventory.update(req.body, {where: {menu_id: req.params.menuID }
    });
  });

  // PUT route to decrement inventory table in db based on orders added
  // router.use("/api/inventory/:menuID", function(req, res) {
  //   db.Inventory.findOne({
  //     where: { 
  //       menu_id: req.params.menuID
  //     }
  //   }).then(dish => {
  //     return dish.decrement("1"); // assumes `option` always exists
  //   }).then(dish => {
  //     return dish.reload();
  //   }).then(dish => {
  //     res.json(dish);
  //   });
    
    
  //   // db.Inventory.decrement([
  //   //   "stock", "1"
  //   // ],{where: {menu_id: req.params.menuID}}
  //   // );
  // });

  // // GET route for waitstaff to calculate current bill by receipt_id
  // app.get("/api/current-bill/:receipt-id", function(req, res) {
  //   connection.query(SELECT_BY_ID, {receipt_id: req.params.receipt-id}, function(err, queryResults) {
  //     res.json(queryResults)
  //   })
  // });

module.exports = router;

// module.exports = function(app) {

  // POST route to send user login credentials to DB for authentication
   router.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.redirect("/current-tables");
  })

  // POST route to send new user signup credentials to DB for future authentication.
  router.use("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
  });


  // app.get("/", function(req,res) {
  //   res.send("hello world");
  // });

  // // GET route for waitstaff to pull active inventory
  // router.route("/api/menu", function(req, res) {
  //   db.Inventory.findAll({
  //     where: {
  //       isAvailable: true
  //     }
  //   }).then(function(activeMenu) {
  //     res.json(activeMenu);
  //   });
  // });

  // // GET route for waitstaff to pull active inventory
  // app.get("/api/bill/:id", function(req, res) {
  //   db.Inventory.findOne({
  //     where: {
  //       menu_id: req.params.id
  //     }
  //   }).then(function(billItem) {
  //     res.json(billItem);
  //   });
  // });

  // // GET route for waitstaff and manager pages to generate bills by receipt_id
  // app.get("/api/get-bill/:receipt", function(req, res) {
  //   db.Inventory.findAll({
  //     include: [{
  //       model: db.Order,
  //       where: {
  //         receipt_id: req.params.receipt
  //       }
  //     }]
  //   }).then(receipt => {
  //     res.json(receipt);
  //   });
  // });


  // // GET route for waitstaff to pull active tables
  // app.get("/api/active-tables", function(req, res) {
  //   db.Order.findAll({
  //     where: {isClosedOut: false},
  //     attributes: [[db.Sequelize.fn("DISTINCT", db.Sequelize.col("receipt_id")), "receipt_id"]],
  //     order: [
  //       ["receipt_id", "ASC"]
  //     ]
  //   }).then(function(activeTables) {
  //     res.json(activeTables);
  //   });
  // });

  // // GET route for waitstaff to pull active tables
  // app.get("/api/closed-tables", function(req, res) {
  //   db.Order.findAll({
  //     where: {isClosedOut: true},
  //     attributes: [[db.Sequelize.fn("DISTINCT", db.Sequelize.col("receipt_id")), "receipt_id"]],
  //     order: [
  //       ["receipt_id", "ASC"]
  //     ]
  //   }).then(function(closedTables) {
  //     res.json(closedTables);
  //   });
  // });

  // // GET route for waitstaff to pull active tables
  // app.get("/api/new-receipt-id", function(req, res) {
  //   db.Order.findAll({
  //     attributes: [[db.Sequelize.fn("MAX", db.Sequelize.col("receipt_id")), "receipt_id"]]
  //   }).then(function(maxReceiptID) {
  //     res.json(maxReceiptID);
  //   });
  // });

  // // GET route to test Sequelize associations
  // app.get("/api/joins", function(req, res) {
  //   db.Inventory.findAll({
  //     include: [db.Order]
  //   }).then(inventories => {
  //     res.json(inventories);
  //   });
  // });

  // // POST route for waitstaff to post orders to database
  // app.post("/api/new-order", function(req, res) {
  //   db.Order.create(req.body).then(newOrderData => {
  //     console.log(newOrderData);
  //     res.json(newOrderData);
  //   });
  // });

  // GET route for waitstaff to calculate current bill by receipt_id
  // app.get("/api/current-bill/:receipt-id", function(req, res) {
  //   connection.query(SELECT_BY_ID, {receipt_id: req.params.receipt-id}, function(err, queryResults) {
  //     res.json(queryResults)
  //   })
  // });

// };
