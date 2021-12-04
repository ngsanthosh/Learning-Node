// console.log("Hello world");
const obj = require('./objinfo')
const http = require("http");

http
  .createServer(function (req, res) {
    // res.end("Hello world!!, This is a random text!!")
    // if we need to do routing, then with the help of the req object we can do that
    if (req.url === "/") {
      res.end("This is home page and your name is "+ obj.name);
    } else if (req.url === "/login") {
      res.end("This is login page and your age is " + obj.age);
    } else if (req.url === "/signup") {
      res.end("This is signup page");
    }
  })
  .listen(9000);
