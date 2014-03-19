
var express = require('express'),
    config  = require('./src/config/config');

var app     = express();

require('./src/config/express')(app, config);
require('./src/config/database')(config);
require('./src/routes')(app);

app.listen( config.port || 3000, function(){
    console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
