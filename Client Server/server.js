const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello this text is from api");
});

app.get("/users", function (req, res) {
  const users = ["Santhosh", "Naan Gokul", "Naan Tarun"];
  res.send(users);
});

app.listen(5000, function () {
  console.log("THe port is listening...");
});
