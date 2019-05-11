// var db = require("../models");
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/login");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Merge conflict need ensure we can delete
  // Test route to ensure search functionality is working
  // app.get("/search-test", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/search-results.html"));

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/login");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Route for when customer logs in
  app.get("/login", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // app.get("/manager", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/manager.html"));
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
