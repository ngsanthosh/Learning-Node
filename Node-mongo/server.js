const express = require("express");

const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/games", (err) => {
  err ? console.log("The error is "+err) : console.log("Connection successfull for mongooo");
});

// app.get("", (req, res) => {
//   res.send("How are you daaa");
// });
app.post("/addgames", (req, res) => {
  
});

app.listen(5000, () => {});
