var MongoClient = require('mongodb').MongoClient,
    express=require('express'),
	app = express(),
	http = require('http'),
    config = require('./Config')
    console.log(config);
	
	app.route('/').get(function(req,res)
	{
    MongoClient.connect(config.dbUrl,function(err, db) {    // Connect to the db
     
	 //Get Employee Data
	
	  var  collection = db.collection('emp');
	  var emplist = collection.find({});
	
	  str = "";
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

	  db.close();
	  });
    });
	});



	console.log('process.env.PORT', process.env.PORT)
	app.listen((process.env.PORT || 3000), function () {
    console.log("Server is up and listening on port" + process.env.PORT);
	
});
	 //Insert Employee Data
	 
    // db.collection('emp').insertOne({
     
        // EmpName: "Layaa",
		// EmpRole:"Senior Analyst"
    // });
	
	//Update Employee Data
	
	 // db.collection('emp').updateOne({
        // "EmpName": "Laya"
    // }, {
        // $set: {
            // "EmpName": "Layaa"
        // }
    // });
	
	
	//Delete the emp record
	
	 // db.collection('emp').deleteOne(

        // {
            // "EmpName": "Taniya"
        // }

    // );
	
	