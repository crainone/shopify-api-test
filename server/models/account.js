var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
	name: { type : String, default : '' },
	user: { type : String, default : '' }
});

module.exports = mongoose.model('Account', AccountSchema);