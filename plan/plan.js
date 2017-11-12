//function for plan
const Plans = require('../DB/Plans');

module.exports.addPlan = function (req) {
    console.log(req.title);
    console.log(req.description);
    let newPlan = new Plans ({
        title: req.title,
        description: req.description,
        date: Date.now(),
        backgroundImg: req.backgroundImg
    });
    console.log('add(after)');
    newPlan.save();
}
//save function

module.exports.loadPlan = function (res, path) {
    Plans.find({}).exec(function(err, data) {
        return res.render(path, {data: data});
    });
}
//loadfunction for main

module.exports.search = function (title) {
    Plans.find({title: title}, function(err, res) {
        return res;
    })
}
//search plan function for plan page

module.exports.deletedes = function(req) {
    Plans.findOneAndRemove({'description': req.description}, function(err, res) {});
}