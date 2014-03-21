
var Post = require('./controllers/post');
var User = require('./controllers/user');


module.exports = function(app) {

    app.get('/', function (req, res) {
        res.render('index', {
            title: 'Demo-AAA'
        });
    });

    app.get('/posts', Post.list);
    app.get('/posts/:id', Post.show);
    app.get('/posts/new', Post.new);
    app.get('/posts/:id/edit', Post.edit);
    app.post('/posts', Post.create);
    app.put('/posts/:id', Post.update);
    app.delete('/posts/:id', Post.destroy);


};
