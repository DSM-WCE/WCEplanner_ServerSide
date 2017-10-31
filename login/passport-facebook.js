const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const Users = require('../DB/Users');

module.exports = function() {
    
    passport.use(new FacebookStrategy({
        clientID : '1829703597058739',
        clientSecret : '4ab455868fa9216016ec3d7d27c075df',
        callbackURL : "http://localhost:8080/auth/facebook/callback",
        passReqToCallback : true,
        profileFields : ['id', 'displayName', 'email', 'gender']
    }, function(req, accessToken, refreshToken, profile,done){
        var temp = profile;
        console.log('받은거 : ');
        console.log(temp);
        getUserData(temp, function() {
            done(null, profile);
        });
    }));
    
    

    passport.serializeUser(function(user, done) { //인증 후 사용자 정보를 세션에 저장
        console.log('doing serializeUser');
        done(null, user.id);
    });

    passport.deserializeUser(function(user, done) { //인증 후 사용자 정보를 세션에서 읽어서 req.user에 저장
        console.log('doing deserializeUser');
        done(null, user.id);
    });
}

function getUserData(temp,callback){
    
    Users.findOne({id : temp.id}, function(err, user){
        console.log('찾은거 : ');
        console.log(user);
        if(err) {
            console.log(err);
            res.status(400).json(err).end();
        }
        if(!user) {
            console.log('DB에 존재하지 않는 유저이므로 저장 시도');
            let newUser = new Users({
                id : temp.id,
                displayName : temp.displayName,
                email : temp.emails[0].value,
                gender : temp.gender,
            });
            console.log('저장 할거 : ');
            console.log(newUser);
            newUser.save();
            console.log('Save success');
            callback();
        } else {
            console.log('이미 DB에 존재하는 유저');
            callback();
        }
    });
}