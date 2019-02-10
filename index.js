'use strict';
var express  = require('express'),
bodyParser   = require('body-parser'),
http         = require('http'),
config       = require('./Config'),
server       = express(),
MongoClient = require('mongodb').MongoClient,
app = express()
              
console.log(config);
              
              app.get('/', function(req,res)
              {
    MongoClient.connect(config.dbUrl,function(err, db) {    // Connect to the db
     
               //Get Employee Data
              
              var db = db.db('EmployeeData');
              var emplist = db.collection('emp').find({});
              var str = "";

                //noinspection JSDeprecatedSymbols
                emplist.forEach(function(item)
                
                {
                               if(item!=null)
                               {
                             
                               str = str + "Employee Name " + item.EmpName + "</br>";
                               
                               }
                             
                },
                function(err){
                res.send(str);



                });
              });

              });


              console.log('process.env.PORT', process.env.PORT)
              app.listen((process.env.PORT || 3000), function () {
    console.log("Server is up and listening on port" + process.env.PORT);
              });

              
