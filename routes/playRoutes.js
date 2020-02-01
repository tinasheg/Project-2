var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the plays
  app.get("/api/play", function(req, res) {
    var query = {};
    if (req.query.UserId) {
      query.UserId = req.query.UserId;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Game.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbGame) {
      res.json(dbGame);
    });
  });

  // Get route for retrieving a single game
  app.get("/api/play/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Game.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbGame) {
      res.json(dbGame);
    });
  });

  // POST route for saving a new game
  app.post("/api/play", function(req, res) {
    db.Game.create(req.body).then(function(dbGame) {
      res.json(dbGame);
    });
  });

  // DELETE route for deleting play ******* may not be required
  app.delete("/api/play/:id", function(req, res) {
    db.Game.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbGame) {
      res.json(dbGame);
    });
  });

  // PUT route for updating play
  app.put("/api/play", function(req, res) {
    db.Game.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbGame) {
      res.json(dbGame);
    });
  });
};
