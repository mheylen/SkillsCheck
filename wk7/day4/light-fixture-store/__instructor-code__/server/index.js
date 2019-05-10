const express = require("express");
const app = express();
const massive = require("massive");
const bcrypt = require("bcrypt");
const pC = require("./controllers/productController");
const aC = require("./controllers/adminController");
const session = require("express-session");
require("dotenv").config();

function sessionCheck(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.status(401).send("you must login");
  }
}

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
app.use(express.json());
massive(CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  // for development only
  dbInstance.init();
  console.log("we see pretty stuff in the terminal");
});
// 1
// session
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 14
    }
  })
);
// auth
// 2
app.post("/api/login", aC.signIn);
app.post("/api/admin_register", aC.register);

app.use(sessionCheck);

app.get("/api/logout", (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
});

// admin
// 30

app.get("/api/admin", (req, res) => {
  res.status(200).send(req.session.user);
});

app.put("/api/admin/:id");
app.delete("/api/admin/:id");
// products
app.get("/api/store", pC.getAll);
// 4
app.post("/api/store", pC.createProduct);

app.get("/api/store/:id");
app.put("/api/store/:id");
app.delete("/api/store/:id");

app.listen(SERVER_PORT || 4000, () =>
  console.log(`Holy Crap, ${SERVER_PORT} light fixtures exploded!!!!!`)
);
