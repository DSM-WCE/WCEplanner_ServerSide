//function for plan
const Plans = require('../DB/Plans');

module.exports.addPlan = function (req) {
    console.log(req.title);
    console.log(req.description);
    console.log(req.backgroundImgdata);
    console.log(req.backgroundImgcontentsType);
    let newPlan = new Plans ({
        title: req.title,
        description: req.description,
        date: Date.now(),
        //backgroundImg: {data: req.backgroundImgdata, contentsType: req.backgroundImgcontentsType}//이미지를 보낼 방법을 생각 해야함 
    });
    console.log('add(after)');
    newPlan.save();
}
//save function

module.exports.loadPlan = function () {
    Plans.find({},function(err, res) {
        console.log(res);
        return res;
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