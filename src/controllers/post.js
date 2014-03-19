
var Post = require('../models/post');

exports.list = function list (req, res) {
    Post.list(function  (err, posts) {
        res.render('post/list', {
            posts: posts
        });
    })
}
