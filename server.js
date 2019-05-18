// Require environment variables, express and database
require('dotenv').config()
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const db = require("./models");
const path = require("path");
const passport = require('passport');
const session = require("express-session");
const router = require("express").Router();
const apiRoutes = require("./routes/api-routes.js");

// Config for express app
var app = express();
var PORT = process.env.PORT || 3006;

// Middleware to handle data parsing and establish static directory
// to use static files (e.g. js and css files)
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.static("client/public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport
// app.use(passport.initialize())
// app.use(passport.session()) // calls the deserializeUser

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);
  //build mode

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

// API Routes
app.use(apiRoutes);

//   app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/public/index.html'));
// })


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
