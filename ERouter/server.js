const express = require("express");

const app = express();

const routes = require("./Routes/user");

app.use("/user", routes);

app.listen(5000, function (req, res) {
  console.log("The port is listening to port 5000");
});
