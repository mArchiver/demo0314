
var Post = require('../models/post');

exports.list = function (req, res) {
    Post.list(function  (err, posts) {
        res.render('post/list', {
            posts: posts
        });
    });
}

exports.show = function (req, res) {
    res.send('done');
}

exports.new = function (req, res) {
    res.render('post/new',{
        //
    });
}

exports.edit = function (req, res) {
    res.send('done');
}

exports.create = function (req, res) {
    Post.create({
        title: req.body.title,
        content: req.body.content,
        author: req.user && req.user._id || null
    }, function  (err, result) {
        res.redirect('/posts');
    });
}

exports.update = function (req, res) {
    res.send('done');
}

exports.destroy = function (req, res) {
    res.send('done');
}
