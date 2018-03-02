const chai = require("chai");
const faker = require("faker");
const { makeUsers, connection } = require("./../app");
const axios = require("axios");

let expect = chai.expect;

describe("Checking Users Array", () => {
  it("should be an Array of length 500", () => {
    let myArr = makeUsers();
    expect(myArr)
      .to.be.an("array")
      .of.length(500);
  });
});

describe("Testing Home Page GET", () => {
  it("should be fetching home page", done => {
    axios
      .get("/")
      .then(res => {
        console.log(res.data);
        expect(res.data).to.be(0);
        done("all good");
      })
      .catch(err => {
        expect(err).to.be.a("string");
        done(err);
      });
  });
});
