
var Post = require('./controllers/post');
var User = require('./controllers/user');


module.exports = function(app) {

    app.get('/', function (req, res) {
        res.render('index', {
            title: 'Demo-AAA'
        });
    });

    app.get('/post', Post.list);
};
