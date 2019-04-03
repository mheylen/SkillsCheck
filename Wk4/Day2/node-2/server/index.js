const express = require("express");
//  invoking express five us access to CRUD methods
const app = express();
const bodyParser = require('body-parser');
const pokemonController = require('./controllers/pokemonController');
// give us a body object on the request coming in

app.use(bodyParser.json())

//  PARAMETERS
// http:localHost:3002/api/pokemon/josh
// expected output => parameters: { name: 'josh' }

// Queries (?)
// 
// http://localHost:3002/api/pokemon/josh?age=32
// expected output => parameters: { name: 'josh' }
// expected output => queries: { age: 32 }

// BODY
// http://localHost:3002/api/pokemon/josh?age=32
// expected output => parameters: { name: 'josh' }
// expected output => queries: { age: 32 }

// app.post('/api/pokemon/:name', (req, res) => {
//     console.log(req.params);
//     console.log(req.query);
// console.log("body: ", req.body);
//     res.status(200).send("<button>Push Me.</button>");
// });

app.get("/api/favorites", pokemonController.readPokemon);
app.post("/api/favorites", pokemonController.createPokemon);
app.put("/api/favorites/:id", pokemonController.updatePokemonById);

const PORT = 3002;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));

