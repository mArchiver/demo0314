
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
}

module.exports = config['development'];
