const products = require()
let myProducts = [];

module.exports = {
    gatherProducts: (req, res) => {
        res.status(200).send(products)
    },

    userAddItems: (req, res) => {
        const {id, name, image_path, price} = req.body
        myItems.push(newItems);
        res.status(200).send(myItems)
    },

    updateProducts: (req, res) => {
        
    }
}