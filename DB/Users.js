const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
mongoose.Promise = global.Promise;

const database = mongoose.connection;
database.on('error', console.error);
database.once('open', function(){
    console.log('Connected User-DataBase');
});
mongoose.connect('mongodb://rudtj2316:germany74@ds139585.mlab.com:39585/wce_planner');

const UsersSchema = new mongoose.Schema({
    id : {type : String, required : true, unique : true}, 
    displayName : {type : String}, 
    email : {type : String, default:'No email'},
    gender : {type : String}
});

module.exports = mongoose.model('Users', UsersSchema);