var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
    title: String,
    author: String,
    body:   String,
});

var Post = mongoose.model('Post', PostSchema);

exports.list = function (callback) {
    Post.find({ })
        .exec(callback);
};

exports.create = function (callback) {
    //
};

exports.delete = function (callback) {
    //
};

