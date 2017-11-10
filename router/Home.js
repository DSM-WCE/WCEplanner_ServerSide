const path = require('path');
const config = require('../config');
const plan = require('../plan/plan');
module.exports = function(router) {
    router.get('/', function(req, res){
        res.render()
        res.sendFile(path.join(config.publicPath, 'Main.html'));
    });
    return router;
}