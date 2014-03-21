
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
    res.send('done');
}

exports.edit = function (req, res) {
    res.send('done');
}

exports.create = function (req, res) {
    res.send('done');
}

exports.update = function (req, res) {
    res.send('done');
}

exports.destroy = function (req, res) {
    res.send('done');
}
