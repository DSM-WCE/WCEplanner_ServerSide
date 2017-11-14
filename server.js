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
app.set('json spaces', 40);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.set('view engine','ejs');
app.set('views','./views');

/* router */
const routerLanding = require('./router/Landing')(router);
app.use('/', routerLanding);
const routerLogin = require('./router/Login')(router);
app.use('/', routerLogin);
const routerHome = require('./router/Home')(router);
app.use('/home', routerHome);
const routerAdmin = require('./router/Admin')(router);
app.use('/', routerAdmin);

/* 모듈화 필요함 */
const routerNewPlan = require('./router/NewPlan')(router);
app.use('/', routerNewPlan);
app.use(bodyParser.urlencoded({extended: true}));
const routerDelete = require('./router/DeleteDes')(router);
app.use('/', routerDelete);
const routerEditPlan = require('./router/EditPlan')(router);
app.use('/', routerEditPlan);
const routerPlans = require('./router/Plans')(router);
app.use('/', routerPlans);

/* Open server */
http.createServer(app).listen(app.get('port'), function(){
    console.log('Open Server At 8080 port');
});