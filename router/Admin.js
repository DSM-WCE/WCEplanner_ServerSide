const Complains = require('../DB/Complains');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');

module.exports = function(router) {
    const upload = multer({
        storage : multer.diskStorage({
            destination: function(req, file, callback){
                callback(null, 'uploads/');
            },
            filename: function(req, file, callback){
                callback(null, new Date().valueOf() + path.extname(file.originalname));
                console.log(JSON.stringify(file));
            }
        }),
    });

    router.post('/admin', upload.single('upFile'), function(req, res){
        /* form text data*/
        let Ntitle = req.body.title;
        let Ndescription = req.body.description;
        let newCom = new Complains({
            title : Ntitle,
            description : Ndescription
        });
        console.log(JSON.stringify(newCom)); //제목과 내용
        newCom.save();
        res.send('<script>alert("문의가 접수되었습니다.");history.go(-1);</script>');
    });
    return router;
}

