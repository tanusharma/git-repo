'use strict';
var express  = require('express'),
bodyParser   = require('body-parser'),
http         = require('http'),
config       = require('C:/Users/tanusharma2/Documents/GitHub/git-repo/API/config.js'),
server       = express(),
mongoose     = require('mongoose'),
TeamInfo     = require('C:/Users/tanusharma2/Documents/GitHub/git-repo/API/Models/TeamInfo.js'),
GameSchedule = require('C:/Users/tanusharma2/Documents/GitHub/git-repo/API/Models/GameSchedule.js');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl,{ useNewUrlParser: true });

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

var routes = require('C:/Users/tanusharma2/Documents/GitHub/git-repo/API/Routes/Routes.js'); //importing route
routes(server); //register the route

var app = require('express')();


server.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});


