//function for plan
const Plans = require('../DB/Plans');

module.exports.addPlan = function (req) {
    console.log('add');
    let newPlan = new Plans ({
        title: req.title,
        description: req.description,
        date: req.date,
        backgroundImg: {data: req.data, contentsType: req.contentsType} 
    });
    newPlan.save();
}
//save function

module.exports.loadPlan = function () {
    Plans.find({},function(err, res) {
        return res.title;
    });
}
//loadfunction for main

module.exports.search = function (title) {
    Plans.find({title: title}, function(err, res) {
        return res;
    })
}
//search plan function for plan page