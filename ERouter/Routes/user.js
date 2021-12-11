const express = require("express");

const route = express.Router();

route.get("/login", (req, res) => {
  res.send("This is login route");
});


route.get("/register", (req, res) => {
  res.send("This is Registration route");
});