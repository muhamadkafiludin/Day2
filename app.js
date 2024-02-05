var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose")
require("dotenv").config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productRouter = require("./routes/product")
const categoryRouter = require("./routes/Categories")

var app = express();
const mongodConnect = process.env.MONGOLAB_URI;
mongoose.connect(mongodConnect)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', productRouter)
app.use('/', categoryRouter)


module.exports = app;
