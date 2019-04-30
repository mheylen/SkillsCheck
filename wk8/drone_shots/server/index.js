const express = require("express");
const app = express();
const massive = require("massive");
const bcrypt = require("bcrypt");
const session = require("express-session");
const uC = require("./controllers/usersController");
const cC = require("./controllers/contentController");
const cloudinary = require('cloudinary');
require("dotenv").config();


const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
app.use(express.json());

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
    massive(CONNECTION_STRING).then(dbInstance => {
        app.set("db", dbInstance);
        // dbInstance.init();
        console.log("db..pf pf pf... is connected")
    });
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

// content
app.get("/api/content", cC.getAll);
app.post("/api/content",cC.upload);
app.get("/api/pilotContent/", cC.getOne);
// app.put("/api/content/:id");
app.delete("/api/content/:id", cC.delete);

app.get('/api/upload', (req, res) => {
    const timestamp = Math.round((new Date()).getTime() / 1000);
    const api_secret  = process.env.CLOUDINARY_SECRET_API;
    const signature = cloudinary.utils.api_sign_request({ timestamp: timestamp }, api_secret);

    const payload = {
        signature: signature,
        timestamp: timestamp
    };
        res.json(payload);

})

app.listen(SERVER_PORT || 4000, () => console.log(`Riding the ${SERVER_PORT} heat wave`))