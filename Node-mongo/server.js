const express = require("express");

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/games", (err) => {
  err
    ? console.log("The error is " + err)
    : console.log("Connection successfull for mongooo");
});

const GamesStruc = mongoose.model("games", {
  name: String,
  weight: Number,
  sport: String,
});

// app.get("", (req, res) => {
//   res.send("How are you daaa");
// });
app.post("/addgames", (req, res) => {});

app.post("/getgames", (req, res) => {});

app.post("/updategame", (req, res) => {});

app.post("/removegame", (req, res) => {});

app.listen(5000, () => {});
