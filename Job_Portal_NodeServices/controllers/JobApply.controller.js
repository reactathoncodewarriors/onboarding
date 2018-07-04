const JobApply = require('../models/JobApply.model.js');
const CreateJob = require('../models/CreateJob.model.js');
const  AppliedJobsWithDetails= require('../models/AppliedJobsWithDetails.model.js');
var shortid = require('shortid');
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/JobPortal';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;



exports.applyJob = (req, res) => {

    var id="VZ-AppliedId-"+shortid.generate();

	const applyJob = new JobApply({
        appliedId: id,
        userId: req.body.userId,
        jobId :req.body.jobId,
        isApplied : true,
        status:"Applied",
        appliedDate:new Date(),
        appliedMsg:req.body.appliedMsg        
    });
    applyJob.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });

};




exports.viewAppliedJobDetails = (req, res) => {
    JobApply.findOne({ 'userId': req.query.userId})
    .then(appliedDetails => {
       
       CreateJob.findOne({'jobId':appliedDetails.jobId}).
       then(jobDesc => {

       	var obj= {

       jobId:jobDesc.jobId,
       jobDescription:jobDesc.jobDescription,
       position:jobDesc.position,
       	userId:appliedDetails.userId,
       isApplied:appliedDetails.isApplied,
       	keySkills:jobDesc.keySkills
};
       	res.send(obj);

       }).catch(err => {
       	res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });

       });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });


};





exports.viewAllAppliedJobs = (req, res) => {
    JobApply.find({ 'userId': req.query.userId})
    .then(appliedJobs => {
       
       res.send(appliedJobs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });


};

