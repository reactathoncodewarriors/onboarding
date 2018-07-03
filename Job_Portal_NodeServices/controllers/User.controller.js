const User = require('../models/User.model.js');

var shortid = require('shortid');
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/JobPortal';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;



exports.create = (req, res) => {

var id="VZ-Guest-User-"+shortid.generate();

	const newUser = new User({

         userId: id,
    userName: req.body.userName,
    email :req.body.email,
    password : req.body.password,
    role:"Genaral"
  

        
    });
    newUser.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });

};


exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    

    User.findOne({ 'uesrId': req.query.jobId})
        .then(user => {
           
        res.send(user);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });


   };

// Update a note identified by the noteId in the request


// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

 CreateJob.remove({ 'jobId': req.query.jobId})
        .then(job => {
            console.log(job)
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });


   };

// Update a note identified by the noteId in the request



