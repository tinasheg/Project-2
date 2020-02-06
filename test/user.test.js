var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

chai.use(chaiHttp);

var request;

describe("POST /api/user", function() {
  this.beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  this.afterEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("Should populate user information into database", function(done) {
    var reqBody = {
      id: "1",
      name: "John",
      description: "name"
      //email: "john@gmail.com",
      //description: "user email",
      //knownLanguages: "english",
      //description: "language they know",
      //newLanguages: "French",
      //description: "language to learn"
    };
    request
      .post("/api/user/1")
      .send(reqBody)
      .end(function(err, res) {
        console.log("res.body", res.body);
eeeeeeeeeee'''''''''mjk        var responseStatus = res.status;
        var responseBody = res.body;

        expect(err).to.be.null;
        expect(responseStatus).to.equal(404);

        expect(responseBody)
          .to.be.an("object")
          .that.includes(reqBody);
        done();
      });
  });
});
