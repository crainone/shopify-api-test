var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	id: { type : Number, required : true, unique : true },
	title: { type : String, default : '' },
	body_html: { type :  String, default : '' },
	vendor: { type : String, required : true }
});

module.exports = mongoose.model('Product', ProductSchema);