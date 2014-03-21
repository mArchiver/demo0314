var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
    title: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // author: String,
    body:   String,
    comments : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]

});


PostSchema.statics.list = function (callback) {
    this.find({})
        .populate('author')
        .exec(function (err, posts) {
            callback(err, posts)
        });
}


var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
