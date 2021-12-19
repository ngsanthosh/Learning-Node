const express = require("express");

const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Medico", (err) => {
  err ? console.log(err) : console.log("Connection successfull mongooo");
});

app.get("", (req, res) => {
  res.send("How are you daaa");
});

app.listen(5000, () => {});
