module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { name, description, price, image_url } = req.body;

    dbInstance.create_product([name, description, price, image_url])
    .then( () => res.sendStatus(200) )
    .catch( err => {
        res.status(500).send({errorMessage: "Ah Crap. Something broke."})
        console.log(err)
    });
},

    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params;

        dbInstance.read_product()
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "It's Broken. Now fix it."})
            console.log(err)
        });
    }, 
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_products()
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "This piece of junk is broken."})
            console.log(err)
        })
    }, 
    update: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req; 

        dbInstance.update_product()
        .then( () => res.sendStatus(200) )
        .catch(err => {
            res.status(500).send({errorMessage: "How dare you call me a robot. COMPY BROKEN"})
            console.log(err)
        })
    }, 
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;

        dbInstance.delete_product()
        .then( () => res.sendStatus(200) )
        .catch(err => {
            res.status(500).send({errorMessage: "I'm broken too."})
            console.log(err)
        })
    }
};