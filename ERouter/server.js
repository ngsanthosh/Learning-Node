const express = require("express");

const app = express();

//Now the below code fetches for /routes and /products accordingly
const routes = require("./Routes/user");
const prodroutes = require("./Routes/products");

app.use("/user", routes);
app.use("/product", prodroutes);

//Everytime when we change something, the server needs 
//An restart and that's where nodemon comes into picture
//It auto reloads your server...as you alter anything
app.listen(5000, function (req, res) {
  console.log("The port is listening to port 5000");
});
