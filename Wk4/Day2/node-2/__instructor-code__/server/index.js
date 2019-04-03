const express = require("express");
// invoking express give us access to CRUD methods
const app = express();
const bodyParser = require("body-parser");
const pokeController = require("./controllers/pokemonController");
// give us a body object on the request coming in
app.use(bodyParser.json());

// PARAMETERS
// http://localhost:3002/api/pokemon/josh
// expected output => parameters:  { name: 'josh' }
// expected output => queries:  {}

// QUERIES
// http://localhost:3002/api/pokemon/josh?age=31
// expected output => parameters:  { name: 'josh' }
// expected output => queries: { age: 31 }

// BODY
// http://localhost:3002/api/pokemon/josh?age=31
// expected output => parameters:  { name: 'josh' }
// expected output => queries: { age: 31 }
// expected output => body: {test : this came from the body}

// app.post("/api/pokemon/:name", (req, res) => {
//   console.log("parameters: ", req.params);
//   console.log("queries: ", req.query);
//   console.log("body: ", req.body);
//   res.status(200).send("<button>Press Me</button>");
// });

app.get("/api/favorites", pokeController.readPokemon);
app.post("/api/favorites", pokeController.createPokemon);
app.put("/api/favorites/:id", pokeController.updatePokemonById);

const PORT = 3002;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
