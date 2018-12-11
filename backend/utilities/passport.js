const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("User");

passport.use("login", new LocalStrategy(
  ((username, password, done) => {
    User.findOne({username: username}, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {message: "Incorrect username."});
      }
      console.log(user);
      console.log(password);
      if (user.password !== password) {
        return done(null, false, {message: "Incorrect password."});
      }
      return done(null, user);
    });
  })
));
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
