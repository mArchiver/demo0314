var mongoose = require('mongoose');

var Comment = require('../models/comment');
var Post = require('../models/post');


exports.list = function (req, res) {
    Post.list(function  (err, posts) {
        res.render('post/list', {
            posts: posts
        });
    });
}

exports.show = function (req, res) {
    Post.findPost({
        id: req.params.id
    }, function  (err, post) {
        res.render('post/show', {
            post: post
        });
    });
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
    Comment.create({
        content: req.body.comment
    }, function (err, comment) {
        Post.update({
            _id: req.params.id
        }, {
            $push: {
                comments: comment._id
            }
        }, function (err, result) {
            if (err) {
                res.send('Error');
            }else{
                res.json(result);
            }
        });
    });
}

exports.destroy = function (req, res) {
    res.send('done');
}
