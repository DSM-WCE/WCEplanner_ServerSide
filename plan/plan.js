//function for plan
const Plans = require('../DB/Plans');

function addPlan(req) {
    let newPlan = new Plans ({
        title: req.title,
        description: req.description,
        date: req.date,
        backgroundImg: {data: req.data, contentsType: req.contentsType} 
    });
    newPlan.save();
}
//save function

function loadPlan() {
    Plans.find({}, function(err, res) {
        //여기에 _id의 index로 res를 배열로 만들어서 보내기
        return res;
    });
}
//loadfunction

function search(id) {
    Plans.find({_id: id}, function(err, res) {
        return res;
    })
}
//search plan function