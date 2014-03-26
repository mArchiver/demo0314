var mongoose = require('mongoose');

var CommentSchema = mongoose.Schema({
    content: String,
    createTime: {
        type : Date,
        default: Date.now
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});


var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
