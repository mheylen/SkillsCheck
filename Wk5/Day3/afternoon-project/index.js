require('dotenv').config()
const express = require ('express');
const app = express();
const massive = require("massive");
const products_controller = require("./products_controller");

const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json())


massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance);
    console.log('Connected to db');

    })
    .catch(err => console.log(err));


app.get('/api/products', products_controller.getAll);
app.get('/api/products/:id', products_controller.getOne);
app.put('/api/products/:id?desc=...', products_controller.update);
app.post('/api/products', products_controller.create);
app.delete('/api/products/:id', products_controller.delete)

const PORT = 4000
app.listen(PORT, () => {
    console.log(`Round 1 with ${PORT}, FIGHT!`);
});


