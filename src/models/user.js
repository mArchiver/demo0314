var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name: String
});

var User = mongoose.model('User', UserSchema);


// var dca = new User({ name: 'dca' });

// dca.save(function (err, docs) {
//     console.info('user saved');
// });
