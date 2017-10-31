const path = require('path');
const config = require('../config');

module.exports = function(router) {
    router.get('/landing', function(req, res){
        res.sendFile(path.join(config.publicPath, 'Landing.html'));
    });

    return router;
}