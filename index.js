var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res){
    res.send("<center><h1>This is index Page</h1</center>"); 
});

app.listen(port, function(){
    console.log('Server is Running on PORT Number : '+port);
  });