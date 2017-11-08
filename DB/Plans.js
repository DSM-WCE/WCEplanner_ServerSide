const mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("Connected DataBase(Plans.js)");
});

mongoose.connect('mongodb://doyeong:yhj13098*@ds139585.mlab.com:39585/wce_planner')

const PlansSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    date: {type: Date, default: Date.now},
    backgroundImg: {data: Buffer, contentsType: String}
});


module.exports = mongoose.model('Plans', PlansSchema);