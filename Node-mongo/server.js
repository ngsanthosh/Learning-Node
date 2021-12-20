const express = require("express");
const app = express();

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/games", (err) => {
  err
    ? console.log("The error is " + err)
    : console.log("Connection successfull for mongooo");
});

const GamesStruc = mongoose.model("games", {
  name: String,
  jersey: Number,
  sport: String,
});

// app.get("", (req, res) => {
//   res.send("How are you daaa");
// });
app.post("/addgames", (req, res) => {
  const addgames = new GamesStruc({
    name: req.body.name,
    jersey: req.body.jersey,
    sport: req.body.sport,
  });

  addgames.save((err) => {
    err ? res.send("The error") : res.send("Successfull addition");
  });
});

app.post("/getgames", (req, res) => {
  GamesStruc.find({}, (err, docs) => {
    err ? res.send("Error Occured") : res.send(docs);
  });
});

app.post("/updategame", (req, res) => {});

app.post("/removegame", (req, res) => {
  GamesStruc.findOneAndDelete({}, (err) => {
    err ? res.send("Error occured!") : res.send("Successfully removed :)");
  });
});

app.listen(5000, () => {});
