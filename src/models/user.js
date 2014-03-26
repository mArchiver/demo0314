var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name: String,
    openId: String,
    email: String,
    createTime: Date,
    lastLogin: Date
});


var User = mongoose.model('User', UserSchema);

module.exports = User;

