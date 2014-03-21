
var path = require('path');
var express = require('express');

var passport = require('passport');

module.exports = function(app, config) {

    // all environments
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));

    app.use(require('less-middleware')(path.join(__dirname, '../../public')));
    app.use(express.static(path.join(__dirname, '../../public')));

    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());

    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.session({ secret: 'keyboard cat' }));

    // Auth
    app.use(passport.initialize());
    app.use(passport.session());

    // middleware
    app.use(function (req, res, next) {
        if (req.user) {
            res.locals.user = req.user;
        }
        next();
    });

    app.use(app.router);

    // development only
    if ('development' == app.get('env')) {
        console.info('[Development] mode');
        app.use(express.errorHandler());
    }

};
