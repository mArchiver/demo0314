
var config = {
	'development': {

		mongodb: {
			host: 'localhost',
			db: 'demo1403',
			port: 27017
		}
	},
	'production': {
		//
	}
};
// 要記得加結尾符號 XD

module.exports = config['development'];
