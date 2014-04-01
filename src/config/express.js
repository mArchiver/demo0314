
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

	// Note 有 bodyParser 就不需要 json 和 urlencoded
	// app.use(express.json());
	// app.use(express.urlencoded());
	app.use(express.methodOverride());

	app.use(express.cookieParser());
	// Note bodyParser 之後會被捨棄 但現在都還是可以向下相容
	app.use(express.bodyParser());
	// Note 兩個 Session 怪怪的
	app.use(express.cookieSession({ secret: 'keyboard cat' }));
	// app.use(express.session({ secret: 'keyboard cat' }));

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
