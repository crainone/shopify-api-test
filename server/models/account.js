var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
  author: { type : String, default : '' },
  text:{ type :  String, default : '' }
});

module.exports = mongoose.model('Account', AccountSchema);