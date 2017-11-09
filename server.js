const express = require('express');
const router = express.Router();
const http = require('http');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const app = express();
const plan = require('./plan/plan');
const bodyParser = require('body-parser');

/* DB */
const Users = require('./DB/Users');
const Plans = require('./DB/Plans');

/* passport */
app.use(passport.initialize());
app.use(passport.session());
const facebookLogin = require('./login/passport-facebook')(passport);

/* middle ware */
// app.use(express.static(path.join(__dirname, 'front')));

app.use('/', express.static(__dirname + '/public/front'));
app.set('port', process.env.PORT || 8080);
app.use(session({
    secret: 'flouieserver', 
    resave: true, 
    saveUninitialized: false 
}));     

/* router */
const routerLanding = require('./router/Landing')(router);
app.use('/', routerLanding);
const routerLogin = require('./router/Login')(router);
app.use('/', routerLogin);
const routerHome = require('./router/Home')(router);
app.use('/home', routerHome);
// const routerNewPlan = require('./router/NewPlan')(router);
// app.use('/', routerNewPlan);
app.get('/newplan', function(req, res) {
    res.sendFile(__dirname+'/public/front/NewPlan.html');
});
app.use(bodyParser.urlencoded({extended: true}));
app.post('/newplan', function(req, res) {
    plan.addPlan(req.body);
})

/* Open server */
http.createServer(app).listen(app.get('port'), function(){
    console.log('Open Server At 8080 port');
});