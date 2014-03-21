
var passport = require('passport')
  , GoogleStrategy = require('passport-google').Strategy;


module.exports = function(app, config) {

    passport.serializeUser(function(user, done) {
        // done(null, user.id);
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        console.log('deserializeUser', user);
        done(null, user);
    });

    passport.use(new GoogleStrategy({
            returnURL: 'http://localhost:3000/auth/google/return',
            realm: 'http://localhost:3000/',
            stateless: true
        },
        function(identifier, profile, done) {
            var user = {
                id: profile.emails[0].value,
                email: profile.emails[0].value
            };
            done(null, user);
        }
    ));

    app.get('/auth/google', passport.authenticate('google'));
    app.get('/auth/google/return',

    passport.authenticate('google', { successRedirect: '/',
                                    failureRedirect: '/login' }));

    app.post('/login', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/login' }));

    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });

};
