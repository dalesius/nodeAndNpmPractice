var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
  {
    'id':'00001',
    'name':'Milk'
  },
  {
    'id':'00002',
    'name':'Egg'
  },
  {
    'id':'00003',
    'name':'Chocolate'
  },
  {
    'id':'00004',
    'name':'Chicken'
  }
]

app.get('/', function(request, response){
  response.send(ingredients);
});

app.post('/', function(request, response){
  var ingredient = request.body;
  if (!ingredient || ingredient.name === '') {
    response.status(500).send('Motherfoooo put an ingredient!');
  } else {
    ingredients.push(ingredient);
    response.status(200).send('Your ingredient named ' + ingredient.name + ' has been added succesfully');
  }
});

app.listen(3000, function(){
  console.log('API succesfully running on port 3000');
});