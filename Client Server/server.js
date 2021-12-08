const express = require("express");

const app = express();

const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Hello this text is from api");
});

app.get("/users", function (req, res) {
  const users = ["Santhosh", "Naan Gokul", "Naan Tarun"];
  res.send(users);
});

app.post("/signin", function (req, res) {
  const usern = req.body.username;
  const pass = req.body.password;
  (usern == "santhosh" && pass == "santhosh")
    ? res.end("Sign in Successful")
    : res.end("Sign in Failed");
});

app.listen(5000, function () {
  console.log("THe port is listening...");
});
