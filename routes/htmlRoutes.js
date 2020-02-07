/* eslint-disable prettier/prettier */
require("dotenv").config();
var db = require("../models");
var Sequelize = require("sequelize");
var googleTranslate = require("google-translate")(
  process.env.GOOGLE_TRANSLATE_API
);

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });
  // eslint-disable-next-line prettier/prettier
  app.get("/play", function (req, res) {
    db.Dictionary.findOne({
      where: {
        level: "1"
      },
      order: Sequelize.literal("rand()")
    }).then(function (result) {
      var word = result.word;
      var targetLanguage = "de";
      try {
        googleTranslate.translate(word, targetLanguage, function (
          err,
          translation
        ) {
          if (err) {
            console.log("err1", err);
          }
          console.log("translated:", translation.translatedText);
          res.render("play", {
            originalWord: word,
            translatedWord: translation.translatedText
          });
        });
      } catch (err) {
        console.log("err2", err);
      }
    });
  });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
