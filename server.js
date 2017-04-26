//depends
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//express server
var app = express();
var PORT = process.env.PORT || 3000;
//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
//routing
require('./app/routing/apiroutes.js')(app);
require('./app/routing/htmlroutes.js')(app);
//listener
app.listen(PORT, function(){
  console.log("App hears you on PORT: " + PORT);
});
