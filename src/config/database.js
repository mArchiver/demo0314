
var mongoose = require('mongoose');


module.exports = function initDatabase(config) {

	// connect
	var mongodb = 'mongodb://' + config.mongodb.host + ':' + config.mongodb.port +'/' + config.mongodb.db;
	mongoose.connect(mongodb);

	// bind event
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
		// console.info('on db open');
	});

	console.info('--Database init done');
};
