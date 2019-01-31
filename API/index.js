'use strict';
var express  = require('express'),
bodyParser   = require('body-parser'),
http         = require('http'),
config       = require('C:/Users/tanusharma2/API/config.js'),
server       = express(),
mongoose     = require('mongoose'),
TeamInfo     = require('C:/Users/tanusharma2/API/Models/TeamInfo.js'),
GameSchedule = require('C:/Users/tanusharma2/API/Models/GameSchedule.js');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl,{ useNewUrlParser: true });

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

var routes = require('C:/Users/tanusharma2/API/Routes/Routes.js'); //importing route
routes(server); //register the route

var app = require('express')();


var listener = server.listen(8000, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8000
});

