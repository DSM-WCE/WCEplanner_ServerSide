const path = require('path');
const config = require('../config');
const plan = require('../plan/plan');
var id;

module.exports = function(router) {
    router.post('/plans', function(req, res) {
        res.sendFile(path.join(config.publicPath, 'Plan.html'));
        id = req.body.id
    });
    router.get('/plans', function(req, res) {
        plan.search(req, res, id);
    });
    return router;
}