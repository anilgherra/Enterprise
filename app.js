var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
var session = require('express-session')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const okta = require('@okta/okta-sdk-nodejs');
const { ExpressOIDC } = require('@okta/oidc-middleware');

const db = require('./models');


var app = express();

app.use(session({
    secret: 'awefijcozlwasdfaekc',
    resave: true,
    saveUninitialized: false
}));


const client = new okta.Client({
    orgUrl: 'https://dev-557331.oktapreview.com',    
    token: '0090gEZ3ZmLqSh9D4RL2v7tEy8sDLR4Tsi8FG8cDW-'    // Obtained from Developer Dashboard
});
//okta configs
const oidc = new ExpressOIDC({
    issuer: 'https://dev-557331.oktapreview.com/oauth2/default',
    client_id: '0oaevnh1ydLMZjazH0h7',
    client_secret: 'yg2bOjNvUh0vV9HvL2JcoUHZlTmjJacrLs0Ros9l',
    redirect_uri: 'http://localhost:3000/authorization-code/callback',
    scope: 'openid profile'
    });

// ExpressOIDC will attach handlers for the /login and /authorization-code/callback routes
app.use(oidc.router);

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');




db.sequelize.sync().then(()=> {

    console.log('checking database connection');
})
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.use('/', indexRouter);
app.use('/users', usersRouter);

// tell the express app to listen on port 8000
oidc.on('ready', () => {
    app.listen(3000, () => console.log(`Started!`));
});

oidc.on('error', err => {
    console.log('Unable to configure ExpressOIDC', err);
});
