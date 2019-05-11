// Require database models to configure API routes.
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // POST route to send user login credentials to DB for authentication
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.redirect("/login");
  });
};
  // POST route to send new user signup credentials to DB for future authentication.
  app.post("/api/login", function(req, res) {
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
