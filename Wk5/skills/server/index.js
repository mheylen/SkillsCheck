const express = require('express');
const controller = require('./controller');
const app = express();
const massive = require("massive");
require("dotenv").config()

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('connected to db');
});



const PORT = 4000;
app.listen(PORT,() => console.log(`Don't pick a fight with ${PORT}, he be crazy`
    )
);