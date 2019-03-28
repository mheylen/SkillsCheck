const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const movieController = require("./movieController/movieController")

app.use(bodyParser.json());

app.get("/api/movies", movieController.movieTime);
// app.get("/api/")
app.put("/api/movies/:id", movieController.updateMovie);
app.post("/api/movies", movieController.userAddMovie);
app.delete("/api/movies/:id", movieController.movieDelete);

const PORT = 4000
app.listen(PORT, () => console.log(`Surfin USA with port ${PORT}`));

