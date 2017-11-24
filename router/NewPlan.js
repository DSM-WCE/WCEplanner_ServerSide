const path = require('path');
const config = require('../config');
const plan = require('../plan/plan');
const multer = require('multer');
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'backgrounds/');
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    }
  }),
});

 module.exports = function(router) {
    router.get('/newplan', function(req, res){
        res.sendFile(path.join(config.publicPath, 'NewPlan.html'));
    });
    router.post('/newplan', upload.single('background'),function(req, res) {
        plan.addPlan(req);
    });
     return router;
 }