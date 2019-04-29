const express = require("express");
const app = express();
const massive = require("massive");
const bcrypt = require("bcrypt");
const session = require("express-session");
const uC = require("./controllers/usersController");
const cC = require("./controllers/contentController");
require("dotenv").config();


const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
app.use(express.json());
massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance);
    // dbInstance.init();
    console.log("db..pf pf pf... is connected")
});

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
// users
app.post("/api/signin", uC.signIn);
app.post("/api/register", uC.register);



app.post("/api/logout", (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
});

app.get("/api/users", (req, res) => {
    res.status(200).send(req.session.user);
});

app.put("/api/users/:id")
app.delete("/api/users/:id")
// user

// content
app.get("/api/content", cC.getAll);
app.post("/api/content",cC.upload);
app.get("/api/pilotContent/", cC.getOne);
// app.put("/api/content/:id");
// app.delete("/api/content/:id");

app.listen(SERVER_PORT || 4000, () => console.log(`Riding the ${SERVER_PORT} heat wave`))