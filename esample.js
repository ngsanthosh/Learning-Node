const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.end("Hello world from express js, now using nodemon!!! Yeah woohhh");
});

app.listen(8000, function () {
  console.log("Connection is started raa dadadadadadaadad");
});
