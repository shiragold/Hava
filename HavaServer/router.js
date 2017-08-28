/**
 * Created by shira on 27/08/2017.
 */
const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
    app.get('/', requireAuth, function(teq, res) {
        res.send({ hi: 'there' });
    });
    app.post('/signup', Authentication.signup);
    app.post('/signin', requireSignin, Authentication.signin);
};