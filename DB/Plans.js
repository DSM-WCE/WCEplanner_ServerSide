const mongoose = require('mongoose');

//mongoose.connect('')

const PlansSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    date: {type: Date, default: Date.now},
    backgroundImg: {data: Buffer, contentsType: String}
});


module.exports = mongoose.model('Plans', PlansSchema);