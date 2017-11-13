const path = require('path');
const config = require('../config');
const plan = require('../plan/plan');

module.exports = function(router) {
    router.post('/editplan', function(req, res) {
        plan.editplan(req);
    });
    return router;
}