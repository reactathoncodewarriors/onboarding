
const mongoose = require('mongoose');

const CreateJobSchema = mongoose.Schema({
    jobId: String,
    jobDescription: String,
    position :String,
    band : String,
    location:String,
	hiringManager : String,
	recuriter :String,
	keySkills: String,
	secondarySkills:String,
	startDate:Date,
	endDate:Date,
	createdBy:String
 },);

module.exports = mongoose.model('CreateJob', CreateJobSchema);