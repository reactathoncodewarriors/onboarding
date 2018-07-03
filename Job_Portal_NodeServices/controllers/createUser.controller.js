const CreateUser = require('../models/CreateUser.model.js');


var mongoose = require('mongoose');
var shortUserId = require('shortid');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/JobPortal';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;



exports.create = (req, res) => {

    var id="USR-"+req.body.userName.substring(0,3)+"-"+Math.floor(10000+Math.random()*90000)

	const newUser = new CreateUser({
        userId: id, 
        userName: req.body.userName,
        userPassword: req.body.userPassword,
        userEmail: req.body.userEmail,
        keySkills: req.body.keySkills,
        secondarySkills: req.body.secondarySkills,
        candidateOrEmployee: req.body.candidateOrEmployee,
        userRole: req.body.userRole
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

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    CreateUser.find()
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
    

    CreateUser.findOne({ 'userId': req.query.userId})
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

 CreateUser.remove({ 'userId': req.query.userId})
        .then(user => {
            console.log(user)
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });


   };

// Update a note identified by the noteId in the request