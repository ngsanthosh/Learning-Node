const express = require("express");

const app = express();

const routes = require("./Routes/user");
const prodroutes = require("./Routes/products");

app.use("/user", routes);
app.use("/product", prodroutes);

app.listen(5000, function (req, res) {
  console.log("The port is listening to port 5000");
});
