const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function(router) {

    router.get('/auth/facebook', passport.authenticate('facebook', {
        authType : 'rerequest', //매번 로그인 시도시, public_profile과 email을 달라고 요청
        scope : ['public_profile', 'email'] //facebook에 사용자의 public_profile과 email를 요청
    }));

    //facebook이 검증을 마치고난 후 결과를 전송해주는 router
    router.get('/auth/facebook/callback', passport.authenticate('facebook', {failureRedirect : '/landing'}), 
    function(req, res){
        res.redirect('/home');
    });
    
    return router;
}