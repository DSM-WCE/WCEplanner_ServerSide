const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const database = mongoose.connection;
database.on('error', console.error);
database.once('open', function(){
    console.log('Connected DataBase');
});
mongoose.connect('mongodb://flouie74:#@sjk0704*@ds139585.mlab.com:39585/wce_planner');

const UsersSchema = new mongoose.Schema({
    id : {type : String, required : true, unique : true}, //must be include and unique value
    name : {type : String, required : true}, //must be include
    gender : {type : String},
    //profile_picture : {?},
    email : {type : String, required : true}
});

module.exports = mongoose.model('Users', UsersSchema);