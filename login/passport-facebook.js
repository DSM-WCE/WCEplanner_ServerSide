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
    }, function(req, accessToken, refreshToken, profile, done){
        console.log(profile);
        //console.log('Accesser email : ' + email);
        Users.findOne({id : profile.id}, function(err, user){
            console.log(profile.id);
            if(err) {
                console.log(err);
                res.status(400).json(err).end();        
            }
            if(user) {
                console.log(user);
                return done(err, user);
            } else {
                const newUsers = new Users({
                    id : profile.id,
                    displayname : profile.displayname,
                    gender : profile.gender,
                    profile_picture : profile.picture,
                    //email : email
                });
                newUsers.save(function(user){
                    return done(null, user);
                });
            }
        });
    }));

    passport.serializeUser(function(user, done) { //인증 후 사용자 정보를 세션에 저장
        console.log('doing serializeUser');
        done(null, user);
    });

    passport.deserializeUser(function(user, done) { //인증 후 사용자 정보를 세션에서 읽어서 req.user에 저장
        console.log('doing deserializeUser');
        done(null, user);
    });
}