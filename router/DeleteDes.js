const path = require('path');
const config = require('../config');
const plan = require('../plan/plan');

module.exports = function(router) {
    router.post('/deletedes', function(req, res) {
        plan.deletedes(req);
    });
    return router;
}