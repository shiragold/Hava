/**
 * Created by shira on 27/08/2017.
 */
const Conversion = require('./controllers/conversion');

module.exports = function(app) {
    app.post('/convert', Conversion.convert);
};