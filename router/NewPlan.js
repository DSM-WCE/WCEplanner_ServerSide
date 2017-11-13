 const path = require('path');
 const config = require('../config');
 const plan = require('../plan/plan');
 module.exports = function(router) {
    router.get('/newplan', function(req, res){
        res.sendFile(path.join(config.publicPath, 'NewPlan.html'));
    });
    router.post('/newplan', function(req, res) {
        plan.addPlan(req);
    });
     return router;
 }