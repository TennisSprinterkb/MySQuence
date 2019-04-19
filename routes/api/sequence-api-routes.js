const db = require("../../models");
const router = require("express").Router();

router.route("/sequence")
  .get(function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.Sequence.findAll({}).then(function(dbSequence) {
      
      res.json(dbSequence);
    });
  })
  .post(function(req, res) {
    db.Sequence.create(req.body).then(function(dbSequence) {
      res.json(dbSequence);
    });
  })

router.route("/login")
  .post(function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  })
module.exports = router
// module.exports = function(app) {
//     app.get("/api/sequence", function(req, res) {
//       // 1. Add a join to include all of each Author's Posts
//       db.Sequence.findAll({
//         include: [db.User]
//       }).then(function(dbSequence) {
        
//         res.json(dbSequence);
//       });
//     });
  
  
  
//   app.get("/api/sequence/:id", function(req, res) {
//     // 2; Add a join to include all of the Author's Posts here
//     db.Sequence.findOne({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbSequence) {
//       res.json(dbSequence);
//     });
//   });


//   // app.post("/api/sequence/:id", function(req, res) {
//   //   // 2; Add a join to include all of the Author's Posts here
//   //   db.Sequence.findOneAndUpdate({
//   //     where: {
//   //       id: req.params.id
//   //     }
//   //   }).then(function(dbSequence) {
//   //     res.json(dbSequence);
//   //   });
//   // });


//   // app.post("/api/sequence", function(req, res) {
//   //   db.Sequence.create(req.body).then(function(dbSequence) {
//   //     res.json(dbSequence);
//   //   });
//   // });


//   // app.delete("/api/sequence/:id", function(req, res) {
//   //   db.Sequence.destroy({
//   //     where: {
//   //       id: req.params.id
//   //     }
//   //   }).then(function(dbSequence) {
//   //     res.json(dbSequence);
//   //   });
//   // });

// };




//    // Get all available sequences.
//    app.get("/api/sequences", function(req, res) {
//     db.Sequence.findAll({}).then(function(sequences) {
//       res.json(sequences);
//     });
//   });

//   // Post a new sequence in the database.
//   app.post("/api/sequences", function(req, res) {
//     db.Sequence.create(req.body).then(function(sequence) {
//       res.json(sequences);
//     });