var friendsList = require('../data/friends.js');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function(app){

  app.get('/api/friends', function(req, res){
    
    res.json(friendsList);
  });

  app.post('/api/friends', function(req,res){

    console.log(req.body.name);
    console.log(req.body.scores.length);

    var match = {};

    var differenceToBeat = 100;

    for(var i = 0; i < friendsList.length; i++){

      differenceArray = [];
      var totalDifference = 0;

      for(var j = 0; j < friendsList[i].scores.length; j++) {
        differenceArray.push( Math.abs( req.body.scores[j] - friendsList[i].scores[j]));
      };

      console.log(differenceArray);

      for(var k = 0; k < differenceArray.length; k++){
        totalDifference += differenceArray[k];
      }

      console.log(totalDifference);

      if(match=={}) {
        match = friendsList[i];
        differenceToBeat = totalDifference;
      } else if ( totalDifference < differenceToBeat){
        match = friendsList[i];
        differenceToBeat = totalDifference;
      }

      console.log(differenceToBeat);

    }

    console.log('Your Match is: ' + match.name);

    friendsList.push(req.body);
    res.json(match);

  });
    
}