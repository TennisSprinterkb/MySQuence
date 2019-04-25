const db = require("../../models");
const router = require("express").Router();

router.get('/', function (req, res) {
  res.send("root")
})

router.route("/sequence")
  // .get(function(req, res) {
  //   db.Sequence.findAll({}).then(function(dbSequence) {
  //     res.json(dbSequence);
  //   });
  // })
  .post(function(req, res) {
    db.Sequence.create(req.body).then(function(dbSequence) {
      res.json(dbSequence);
    });
  })
router.route("/signup")
  .post(function(req, res) {
    console.log(req.body);
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  // router.route("/signup")
  // .post(function(req, res) {
  //   console.log(req.body);
  //   db.userObject.create(req.body).then(function(userObject) {
  //     res.json(userObject);
  //   });
  // });
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
    next()
  });
});


  router.route("/login")
    .get(function(req, res){ 
     db.User.findOne({
      where: {
        userName: req.body.username,
        passwordHash: req.body.password
        
      }
    }).then(function(dbUser) {
      console.log("this is the response obj" + dbUser.userName)
      res.json(dbUser.userName);
      console.log(res);
    });
  });

module.exports = router