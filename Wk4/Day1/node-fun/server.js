// require the express package
const express = require('express')
const app = express();
const readAllUsers = require("./getAllUsers");
const data = require('./users.json');

function getUserById(req, res){
    console.log(req.params);
    console.log(req.query);
    let foundUser = data.filter(user => user.id === parseInt(req.params.id));
    if(foundUser.length){
    res.status(200).send(foundUser[0])
    } else {
        res.status(404).send("nothing found")
    }

}

app.get("/api/users", readAllUsers);
app.get("/api/users/:id/",getUserById);
const PORT = 4000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
