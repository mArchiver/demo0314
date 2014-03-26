
var Post = require('./controllers/post');
var User = require('./controllers/user');


module.exports = function(app) {

    app.get('/', function (req, res) {
        console.log('now user', req.user);
        res.render('index', {
            title: 'Demo-0314'
        });
    });

    app.get('/posts', Post.list);
    app.get('/posts/new', Post.new);
    app.get('/posts/:id/edit', Post.edit);
    app.get('/posts/:id', Post.show);
    app.post('/posts', Post.create);
    app.put('/posts/:id', Post.update);
    app.delete('/posts/:id', Post.destroy);


};
