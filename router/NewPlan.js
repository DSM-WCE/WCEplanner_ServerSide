const path = require('path');
const config = require('../config');
const plan = require('../plan/plan');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // cb 콜백함수를 통해 전송된 파일 이름 설정
    }
  });
  var upload = multer({ storage: storage })

 module.exports = function(router) {
    router.get('/newplan', function(req, res){
        res.sendFile(path.join(config.publicPath, 'NewPlan.html'));
    });
    router.post('/newplan', upload.single('background'),function(req, res) {
        plan.addPlan(req);
    });
     return router;
 }