module.exports = {
   getAll: (req, res) => {
       const db = req.app.get("db");
       console.log("first");

       db.get_content().then(content =>{
           console.log(content);
           res.status(200).json(content);
       })
       .catch(err => console.log(err.detail));
   },
   upload: (req, res) => {
       const db = req.app.get("db");
       const { title, tag, description, video, id } = req.body;
       db.upload_content([title, description, tag,  video, id])
       .then(response => {
           res.status(200).json(response);
       })
       .catch(err => {
           console.log(err);
           res.status(400).send("Whatcho Whatcho Whatcho Want.")
       })
   },
   update: (req, res) => {
       const dbInstance = req.app.get('db');
       const {params, query} = req;
       dbInstance.update_content()
       .then( () => res.sendStatus(200) ).catch(err => {
           res.status(500).send({errorMessage: "Error while updating"}) 
           console.log(err)
       })
   },
   delete: (req, res, next) => {
       const dbInstance = req.app.get('db');
       const {id} = req.params;
       dbInstance.delete_content().then (() => res.sendStatus(200)).catch(err => {
           res.status(500).send({errorMEssage: "Error trying to delete"})
           console.log(err)
       })
   },
   getOne: (req, res) => {
       const db = req.app.get("db")
console.log(req.session,"GetOne")
       db.get_one(req.session.users.id).then( content => {
           console.log(content,"Content LABEL");
          res.status(200).json(content);
    })
    .catch(err => console.log(err))
   }
}
