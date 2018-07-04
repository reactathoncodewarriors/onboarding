
const mongoose = require('mongoose');

const JobApplySchema = mongoose.Schema({
	userId:String,
	userName:String,
	email:String,
	password:String,
	role:String
 });

module.exports = mongoose.model('JobApply', JobApplySchema);