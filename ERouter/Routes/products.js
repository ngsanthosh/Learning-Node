const express = require("express");

const route = express.Router();

route.get("/getproducts", (req, res) => {
  const products = ["Pepsi", "Coke", "Red bull"];
  res.send(products);
});

route.get("/addproducts", (req, res) => {
  res.send("This is all about adding products page");
});

module.exports = route;
