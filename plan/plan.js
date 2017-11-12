//function for plan
const Plans = require('../DB/Plans');

module.exports.addPlan = function (req) {
    console.log(req.body.title);
    console.log(req.body.description);
    console.log(req.session.passport.user);
    let newPlan = new Plans ({
        name: req.session.passport.user,
        title: req.body.title,
        description: req.body.description,
        date: Date.now(),
        backgroundImg: req.body.backgroundImg
    });
    console.log('add(after)');
    newPlan.save();
}
//save function

module.exports.loadPlan = function (res, path, req) {
    Plans.find({name: req.session.passport.user}).exec(function(err, data) {
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