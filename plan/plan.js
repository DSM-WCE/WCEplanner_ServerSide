//function for plan
const Plans = require('../DB/Plans');
const fs = require('fs');

module.exports.addPlan = function (req) {
    console.log(req.body.title);
    console.log(req.body.description);
    console.log(req.session.passport.user);
    Plans.findOne({title: req.body.title}, function(err, plan) {
        if(plan) {
            Plans.findOneAndUpdate({title: req.body.title}, {$push: {description: req.body.description}}, {new: true}, function(err, data) {
                console.log(data);
            });
        } else {
            let newPlan = new Plans ({
                name: req.session.passport.user,
                title: req.body.title,
                description: req.body.description,
                date: Date.now(),
                backgroundImg: req.file.filename,
            });
            newPlan.save();
        }
    });
}
//save function

module.exports.loadPlan = function (req, res) {
    Plans.find({name: req.session.passport.user}).exec(function(err, data) {
        console.log(data);
        return res.json(data);
    });
}
//loadfunction for main

module.exports.search = function (req ,res, id) {
    console.log(id);
    console.log(req.session.passport.user);
    Plans.find({name: req.session.passport.user}).findOne({_id: id}).exec(function(err,data) {
        console.log(data);
        return res.json(data);
    });
}
//search plan function for plan page

module.exports.deletedes = function(req) {
    Plans.find({title: req.body.title}).findOneAndUpdate({description: req.body.description}, {$pull: {'description': req.body.description}}, {new: true},function(err, data) {
        console.log('delete this des');
        console.log(data);
    });
}
//deletedes plan

module.exports.editplan = function(req) {
    console.log(req.body.title);
    Plans.find({ name: req.session.passport.user}).find({title: req.body.title}).findOneAndUpdate({description: req.body.before}, { 'description.$': req.body.description }, {new: true},function(err, data) {
        console.log(data);
    });
}
//edit plan
module.exports.deleteplan = function(req) {
    Plans.findOneAndRemove({title: req.body.title}, function(err, data) {
        fs.unlink('backgrounds/'+data.backgroundImg, function(err) {
            console.log('delete success');
        });
        console.log('dalete this Plan: ');
        console.log(data);
    });
}
//delete plan