module.exports = {
  // Very similar to how it should be set up but we are mot usig bcrypt, (HINT: ALWAYS HASH PASSWORDS)
  signIn: (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    db.find_user(username).then(user => {
      if (user[0]) {
        if (password === user[0].password) {
          req.session.user = {
            username: user[0].username,
            full_name: user[0].full_name
          };
          res.status(200).send(req.session.user);
        } else {
          res.status(401).send("Password do not match!");
        }
      } else {
        res
          .status(404)
          .send("that username doesnt exist, please register to continue");
      }
    });
  },
  //   create table admin(
  //     id serial primary key,
  //     username varchar(20) not null,
  //     password varchar(64) not null,
  //     full_name text
  // );
  register: (req, res) => {
    const db = req.app.get("db");
    // user attempts to register by sending the server a username, password, full_name
    const { username, password, full_name } = req.body;
    // check db to see if user already exists
    db.find_user(username).then(user => {
      // if user exist, do not let them register again
      if (user.length) {
        res.status(200).send("That User already exists");
      } else {
        // if the user does not already exist, we will create the user, set them to a session and send the data to the front
        db.create_user([username, password, full_name]).then(user => {
          req.session.user = {
            username: user[0].username,
            full_name: user[0].full_name
          };
          res.status(200).send(req.session.user);
        });
      }
    });
  }
};
