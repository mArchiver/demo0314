
var express = require('express'),
    config  = require('./src/config/config');

var app     = express();





/* --------------------------------------------------
 *
 *
 *
 * -------------------------------------------------- */

// Express.js settings
require('./src/config/express')(app, config);

// Passport.js
require('./src/config/passport')(app, config);

// Database
require('./src/config/database')(config);

// Routes
require('./src/routes')(app);




/* --------------------------------------------------
 *
 *
 *
 * -------------------------------------------------- */
app.listen( config.port || 3000, function(){
    console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
