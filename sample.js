// console.log("Hello world");

const http = require('http');

http.createServer(function(req,res){

    res.end("Hello world!!, This is a random text!!")

}).listen(9000)