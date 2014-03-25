
var passport = require('passport')
  , GoogleStrategy = require('passport-google').Strategy;

var User = require('../models/user');

module.exports = function(app, config) {

    passport.serializeUser(function(user, done) {
        // done(null, user.id);
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        // console.log('deserializeUser', user);
        done(null, user);
    });

    passport.use(new GoogleStrategy({
            returnURL: 'http://localhost:3000/auth/google/return',
            realm: 'http://localhost:3000/',
            stateless: true
        },
        function(identifier, profile, done) {
            console.log(identifier, profile);
            var now = new Date;
            var query = {
                'openId': identifier,
                'email': profile.emails[0].value
            };

            var update = {
                $set:{
                    'lastLogin' : now
                },
                $setOnInsert: {
                    'createTime': now,
                    'name': profile.displayName
                }
            };

            User.findOneAndUpdate(query, update, { upsert: true }, function (err, user) {
                done(null, user);
            });
        }
    ));

    app.get('/auth/google', passport.authenticate('google'));
    app.get('/auth/google/return',

    passport.authenticate('google', { successRedirect: '/posts',
                                    failureRedirect: '/login' }));

    // app.post('/login', passport.authenticate('local', { successRedirect: '/posts',
    //                                                 failureRedirect: '/login' }));

    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });

};
