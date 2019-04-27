const db = require("../../models");
const router = require("express").Router();

router.get('/', function (req, res) {
  res.send("root")
})

router.route("/signup")
  .post(function(req, res) {
    console.log(req.body);
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  router.route("/login")
  .post(function(req, res, next){ 
   db.User.findOne({
    where: {
      userName: req.body.username,
      passwordHash: req.body.password, 
    }  
   }).then(function(dbUser) {
    console.log("this is the response obj" + dbUser.userName)
    res.json({dbUser});
    // next();
  });
});

  router.route("/user/:id")
  .get(function(req, res){
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });


  router.route("/sequence")
  .post(function(req, res) {
    db.Sequence.create(req.body).then(function(dbSequence) {
      res.json(dbSequence);
    });
  });

  router.route("/sequence/:id")
  .get(function(req, res){
    db.Sequence.findAll({
      where: {
      UserId: req.params.id
      }
    }).then(function(dbUserSequences) {
      console.log("this is the response obj" + dbUserSequences.sequenceName)
      res.json({dbUserSequences});
    });
  })
  .delete(function(req, res){
    db.Sequence.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbGone){
        console.log(dbGone);
        res.json({dbGone})
    });
  });

module.exports = router