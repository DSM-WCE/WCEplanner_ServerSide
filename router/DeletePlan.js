const path = require('path');
const config = require('../config');
const plan = require('../plan/plan');
 module.exports = function(router) {
    router.post('/deleteplan', function(req, res) {
        plan.deleteplan(req);
    });
     return router;
 }