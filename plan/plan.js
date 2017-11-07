const Plans = require('../DB/Plans');

function addPlan() {
    let newPlan = new Plans ({
        title: '',
        description: '',
        date: '',
        backgroundImg: {data: '', contentsType: ''} 
    });
    newPlan.save();
}

function loadPlan() {
    Plans.find({}, function(err, res) {
        return res;
    });
}