var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const db = require('./models');



var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




db.sequelize.sync().then(()=> {

    console.log('checking database connection');
})
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });




app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
