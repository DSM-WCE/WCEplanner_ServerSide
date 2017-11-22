const path = require('path');
const config = require('../config');
const plan = require('../plan/plan');

module.exports = function(router) {
    router.post('/deletedes', function(req, res) {
        console.log('deletedes');
        plan.deletedes(req);
    });
    return router;
}