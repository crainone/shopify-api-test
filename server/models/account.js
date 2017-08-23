var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
	name: { type : String, default : '', unique : true },
	user: { type : String, default : '' }
});
AccountSchema.index({ name: 1, type: -1 });

module.exports = mongoose.model('Account', AccountSchema);