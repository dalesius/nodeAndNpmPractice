var express = require('express');
var app = express();

app.get('/', function(request, response){
  response.send('My first API');
});

app.listen(3000, function(){
  console.log('API succesfully running on port 3000');
});