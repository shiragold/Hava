/**
 * Created by shira on 02/09/2017.
 */
const Lead = require('../models/lead');

exports.convert = function(req, res, next) {
    if (!req.body.email) {
        return res.status(422).send('You must provide an email');
    }

    Lead.findOne({ email: req.body.email }, function(err, existingUser) {

        if (err) { return next(err); }
        if (existingUser) {
            return res.status(422).send({ error: 'Email was already converted'});
        }
        const lead = new Lead({
            leadName: req.body.name,
            leadEmail: req.body.email,
            leadType: req.body.type,
            leadCompany: req.body.company
        });
        lead.save(function(err) {
            if (err) { return next(err); }

            res.json({ created: true });
        })
    });
};