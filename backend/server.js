const express = require("express");
const next = require("next");
const config = require("../config");

const port = parseInt(process.env.PORT, 10) || config.port;
const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();
const bodyParser = require("body-parser");
const prework = require("./utilities/preWork");
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const {createDefaultUser} = require("./utilities/defaultUser");

// mongo to persist session data
const MongoStore = require("connect-mongo")(session);

// make use of passport js
require("./utilities/passport");

// import middlewares
const userAuthentication = require("./middlewares/authenticate");

const handleError = (err, req, res) => {
  // console.log(err);
  // console.log(req.status);
  res.status(500);
  res.render("error", {error: err});
};

const initializeServer = server => {
  // require api
  const post = require("./API/post");
  const user = require("./API/user");
  // enable CORS
  server.use(require("cors")());
  // server.use(require("morgan")("combined"));
  server.use(require("cookie-parser")());
  server.use(session({
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    secret: "thisissomesecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {secure: false}
  }));
  server.use(passport.initialize());
  server.use(passport.session());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({
    extended: false
  }));
  server.use("/post", post);
  server.use("/user", user);
  server.get("/", userAuthentication);
  server.get("/home", userAuthentication);
  server.post("/login", passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/login"
  }));
  server.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
  });
  server.get("*", (req, res) => handle(req, res));
  server.use(handleError);
  server.listen(port, err => {
    if (err) {
      console.log("Error while creating the server", err);
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
};

app.prepare()
  .then(() => {
    const server = express();
    prework().then(() => {
      // Mongo is available add default User
      createDefaultUser();
      initializeServer(server);
    }).catch(err => {
      console.log("Something broke in Pre-worker", err);
    });
    // body parser
  });
