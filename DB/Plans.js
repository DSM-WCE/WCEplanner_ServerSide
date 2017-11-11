const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
mongoose.Promise = global.Promise;

var db = mongoose.createConnection('mongodb://doyeong:yhj13098*@ds139585.mlab.com:39585/wce_planner');
db.on('error', console.error);
db.once('open', function(){
    console.log("Connected DataBase(Plans.js)");
});

const PlansSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, default: Date.now},
    backgroundImg: Buffer
});

module.exports = mongoose.model('Plans', PlansSchema);