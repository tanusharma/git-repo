'use strict';

var express = require('express');
module.exports = function(app) {
  var gameDataController = require('C:/Users/tanusharma2/API/Controllers/GameDataController.js');
var apiRoutes =  express.Router();
app.get('/',function(req,res){
    res.send('We are happy to see you using Chat Bot Webhook');
  });
// registerUser Route
  app.route('/',function(req,res){req.post(gameDataController.processRequest)});

};
