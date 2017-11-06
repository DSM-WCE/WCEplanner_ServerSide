const path = require('path');
const config = require('../config');
module.exports = function(router) {
    router.get('/newplan', function(req, res){
        res.sendFile(path.join(config.publicPath, 'NewPlan.html'));
    });
    return router;
}