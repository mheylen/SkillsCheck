const express = require('express');
// const controller = require('./controller');
const app = express();
const bodyParcer = require("body-parser");
const massive = require("massive");
require("dotenv").config()
app.use(bodyParcer.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    db.get_all_products();
    console.log('connected to db');
});

app.get('/api/products', (req, res, next) => {
    const db = req.app.get('db');
    db.get_all_products()
    .then(students => {
        res.status(200).send(students);
    });
});
// app.get('/api/products', controller.gatherProducts);
// app.put('/api/products', controller.updateProducts);
// app.post('/api/products', controller.userAddItems);
// app.delete('/api/products', controller.userDelete)


const PORT = 4000;
app.listen(PORT,() => console.log(`Don't pick a fight with ${PORT}, he be crazy`
    )
);