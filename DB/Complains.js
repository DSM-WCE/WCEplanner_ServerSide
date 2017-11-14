const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
mongoose.Promise = global.Promise;

const database = mongoose.connection;
database.on('error', console.error);
database.once('open', function(){
    console.log('Connected complain-DataBase');
});
mongoose.connect('mongodb://rudtj2316:germany74@ds139585.mlab.com:39585/wce_planner');

const UsersSchema = new mongoose.Schema({
   title : {type : String, default : 'no title'}, 
   description : {type : String, default : 'no description'},
});

module.exports = mongoose.model('Complains', UsersSchema);