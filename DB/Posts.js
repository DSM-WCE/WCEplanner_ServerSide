const mongoose = require('mongoose');

//Users.js에 db에 연결을 해서 필요 없다고 생각.

const PostsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    text: String,
    backgroundImg: {data: Buffer, contentsType: String}
});

module.exports = mongoose.model('Posts', PostsSchema);