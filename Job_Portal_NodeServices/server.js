var express = require('express');
var app = express();
var bodyParser = require('body-parser')

 const createJobContoller = require('./controllers/createJob.controller.js');

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});






app.post('/createJob', createJobContoller.create)


app.get('/getAllJobs', createJobContoller.findAll)

app.get('/getjob', createJobContoller.findOne)

app.get('/deletejob', createJobContoller.delete)



var port=3000;


var server=app.listen(port,function(){
	console.log("Server strated on Port "+port)
});
server.setTimeout=600000;