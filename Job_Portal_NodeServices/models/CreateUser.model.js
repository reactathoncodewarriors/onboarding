
const mongoose = require('mongoose');

const CreateUserSchema = mongoose.Schema({
    userId: String,
    userName: String,
    userPassword :String,
    userEmail : String,
	keySkills: String,
	secondarySkills:String,
	candidateOrEmployee:String,
	userRole:String
 },);

module.exports = mongoose.model('CreateUser', CreateUserSchema);