const express = require("express");
const faker = require("faker");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "join_us",
  multipleStatements: true
});

function makeUsers() {
  let usersArr = [];
  let flag = 0;
  function pushUsers() {
    usersArr.push([faker.internet.email(), faker.date.past()]);
    flag++;
    return flag < 500 ? pushUsers() : usersArr;
  }
  return pushUsers();
}

// ===================================================

// let person = { email: faker.internet.email(), created_at: faker.date.past() };
// let myQuery = connection.query(
//   "INSERT INTO users SET ?",
//   person,
//   (err, results, fields) => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(results);
//   }
// );

let usersArr = makeUsers();
let myQuery = `DROP TABLE users;
CREATE TABLE users(
  email VARCHAR(255) PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW()
);
INSERT INTO users(email,created_at) VALUES ?`;
let finalQuery = connection.query(
  myQuery,
  [usersArr],
  (err, results, fields) => {
    if (err) throw err;
    console.log("success");
  }
);
connection.end();
// ===================================================

app.listen(3000, () => {
  console.log("app.js running on port 3000");
});
