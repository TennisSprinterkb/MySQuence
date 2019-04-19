const db = require("../../models");

module.exports = function(app) {
 app.get("/api/login/:id", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.User.findOne({
      where: {
        userId: req.params.id,
        passwordHash: req.params.password
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

app.get("/api/user", function (req, res){

  db.User.findAll({})
  .then(function (dbUser) {
    res.json(dbUser);
  });
});

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        name: req.user.name,
        email: req.user.email,
        id: req.user.id,
        isTeacher: req.user.isTeacher,
        certificationNumber: req.user.certificationNumber
      });
    }
  });

  // app.post("/signup", function(req, res) {
  //   // console.log(req.body);
  //   db.User.create({
  //     name: req.body.name,
  //     email: req.body.email,
  //     password: req.body.password,
  //     isTeacher: req.body.password,
  //     certificationNumber: req.body.certificationNumber

  //   })
  //     .then(function() {
  //       res.redirect(307, "/login");
  //     })
  //     .catch(function(err) {
  //       console.log(err);
  //       res.json(err);
  //     });
  // });


  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });



};


