// The Functionalities of the user is to login to a page or register to a page
// or else change the password by using forget password link

const express = require("express");

const route = express.Router();

route.get("/login", (req, res) => {
  res.send("This is login route");
});

route.get("/register", (req, res) => {
  res.send("This is Registration route");
});

route.get("/forgetpassword", (req, res) => {
  res.send("This is Resetting password route");
});
