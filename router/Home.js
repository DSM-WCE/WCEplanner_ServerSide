const path = require('path');
const config = require('../config');
const plan = require('../plan/plan');
module.exports = function(router) {
    router.get('/', function(req, res, next) {
        plan.loadPlan(res, path.join(config.publicPath, 'Main.ejs'));
    });
    return router;
}