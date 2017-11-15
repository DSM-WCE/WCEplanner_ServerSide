const path = require('path');
const config = require('../config');

module.exports = function(router) {
    router.get('/mypage', function(req, res){
        res.sendFile(path.join(config.publicPath, 'MyPage.html'));
    });
    
    return router;
}

