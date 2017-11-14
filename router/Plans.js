const path = require('path');
const config = require('../config');
const plan = require('../plan/plan');

module.exports = function(router) {
    router.post('/plans', function(req, res) {
        plan.search(req, path.join(config.publicPath, 'NewPlan.ejs') ,res);
    });
    return router;
}