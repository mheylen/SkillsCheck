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
       dbInstance.update_videos()
       .then( () => res.sendStatus(200) ).catch(err => {
           res.status(500).send({errorMessage: "Error while updating"}) 
           console.log(err)
       })
   },
   delete: (req, res, next) => {
       const {id} = req.params;
       let index = videos.findIndex(videos => videos.videos_id === +id)
       if(index !== -1){
           videos.splice(index, 1);
           res.status(200).send(videos)
       }else{
           res.status(404).send("droners flying")
       }
    //    const dbInstance = req.app.delete('db');
    //    dbInstance.delete_videos().then (() => res.sendStatus(200)).catch(err => {
    //        res.status(500).send({errorMEssage: "Error trying to delete"})
    //        console.log(err)
    //    })
   },
   getOne: (req, res) => {
       const db = req.app.get("db")
console.log(req.session,"GetOne")
       db.get_one(req.session.user.id).then( content => {
           console.log(content,"Content LABEL");
          res.status(200).json(content);
    })
    .catch(err => console.log(err))
   }
}
