
const mongoose = require('mongoose');

const JobApplySchema = mongoose.Schema({

	appliedId:String,
	userId:String,
	jobId:String,
	isApplied:Boolean,
	appliedDate:Date,
	appliedMsg:String,
	status:String
 });

module.exports = mongoose.model('JobApply', JobApplySchema);