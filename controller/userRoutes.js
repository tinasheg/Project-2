module.exports = function(app) {
  // New user
  app.post("/api/user/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    user.update(
      {
        user: req.body.id
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          console.log("req.body", req.body);
          return res.status(200).json(req.body);
        }
      }
    );
  });

  app.put("/api/user/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    //update name
    user.update(
      {
        user: req.body.name
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          return res.status(200).end();
        }
      }
    );
  });

  app.put("/api/user/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    //update email
    user.update(
      {
        user: req.body.email
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          return res.status(200).end();
        }
      }
    );
  });

  app.put("/api/user/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    //update known language
    user.update(
      {
        user: req.body.knownLanguages
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          return res.status(200).end();
        }
      }
    );

    app.put("/api/user/:id", function(req, res) {
      var condition = "id = " + req.params.id;
      //update languages they want to learn
      user.update(
        {
          user: req.body.newLanguages
        },
        condition,
        function(result) {
          if (result.changedRows === 0) {
            return res.status(200).end();
          }
        }
      );
    });
  });
};
