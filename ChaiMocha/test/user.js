const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
chai.should();
chai.use(chaiHttp);
describe("Users Api", () => {
  describe("GET /api/users", () => {
    it("should return a list of users", (done) => {
      chai
        .request(server)
        .get(`/api/users`)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          response.body.length.should.be.eq(2);
          done();
        });
    });
  });
  describe("GET /api/users/:id", () => {
    it("should return a user with id", (done) => {
      chai
        .request(server)
        .get(`/api/users/1`)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.should.have.property("id", 1);
          response.body.should.have.property("name", "Ramesh");
          response.body.should.have.property("email", "ramesh@gmail.com");
          done();
        });
    });
  });
  describe("POST /api/users/create", () => {
    it("should create a new user", (done) => {
      chai
        .request(server)
        .post(`/api/users/create`)
        .send({
          id: 3,
          name: "Rajesh",
          email: "rajesh@rajesh.com",
          password: "hello134!",
        })
        .end((err, response) => {
          response.should.have.status(201);
          response.body.should.be.a("array");
          response.body.length.should.be.eq(3);
          done();
        });
    });
  });
  describe("PUT /api/users/:id", () => {
    it("should update a user", (done) => {
      chai
        .request(server)
        .put(`/api/users/2`)
        .send({
          name: "Ramesh",
          email: "rajesh@rajesh.com",
          password: "hello134!",
        })
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          response.body.length.should.be.eq(3);
          response.body
            .find((user) => user.id === 2)
            .name.should.be.eq("Ramesh");
          done();
        });
    });
  });
  describe("DELETE /api/users/:id", () => {
    it("should delete a user",(done)=>{
      chai.request(server).delete(`/api/users/1`).end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a("array");
        response.body.length.should.be.eq(2);
        done();
      })
    })
  });
});
