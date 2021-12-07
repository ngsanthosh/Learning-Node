const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.end("Hello world from express js");
});

app.listen(7000, function (req, res) {
  console.log("Connection is started raa");
});
