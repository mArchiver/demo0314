var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
    title: String,
    content: String,
    createTime: {
        type : Date,
        default: Date.now
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});


PostSchema.statics.list = function (callback) {
    this.find({})
        .populate('author')
        .sort('-createTime')
        .exec(function (err, posts) {
            callback(err, posts);
        });
}


var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
