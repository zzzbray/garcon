const passport = require("passport");

// Inport all the Strategies
const SignupStrategy = require('./SignupStrategy');
const SigninStrategy = require('./SigninStrategy');

passport.use('local-signin', SigninStrategy);
passport.use('local-signup', SignupStrategy);


module.exports = passport;
