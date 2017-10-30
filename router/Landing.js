const path = require('path');

module.exports = function(router) {
    router.get('/landing', function(req, res){
        res.sendFile(path.join(__dirname, 'front', 'Landing.html'));
    });

    return router;
}