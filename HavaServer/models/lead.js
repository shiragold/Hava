/**
 * Created by shira on 02/09/2017.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const leadSchema = new Schema({
    leadName: String,
    leadEmail: { type: String, unique: true, lowecase: true },
    leadType: String,
    leadCompany: String
});

// Create the model class
const ModelClass = mongoose.model('lead', leadSchema);

// Export the model
module.exports = ModelClass;