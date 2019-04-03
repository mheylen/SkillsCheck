const data = require("./users.json");
module.exports = function readAllUsers(req, res) {
    console.log(req)
    res.status(200).send(data);
    }