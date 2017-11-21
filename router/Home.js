const path = require('path');
const config = require('../config');
const plan = require('../plan/plan');
const fs = require('fs');
module.exports = function(router) {
    router.post('/home', function(req, res) {
        plan.loadPlan(req, res);
    });
    router.get('/home', function(req, res) {
        res.sendFile(path.join(config.publicPath, 'Main.html'));
    });
    return router;
}