const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const database = mongoose.connection;
database.on('error', console.error);
database.once('open', function(){
    console.log('Connected DataBase');
});
mongoose.connect('mongodb://rudtj2316:germany74@ds139585.mlab.com:39585/wce_planner');

const PostsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    text: String,
    date: {type: Date, default: Date.now},
    backgroundImg: {data: Buffer, contentsType: String}, 
});

module.exports = mongoose.model('Posts', UsersSchema);