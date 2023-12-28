const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const config_result = dotenv.config();
if (process.env.NODE_ENV != 'production' && config_result.error) {
  throw config_result.error;
}

//###[  Routers ]###
// const indexRouter = require('./index/indexRouter');
// const profileRouter = require('./profile/profileRouter');
// const userRouter = require('./user/userRouter');

const server = express();

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});

server.use(helmet());
server.use(express.json());
server.use(logger('dev'));
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());

// application routes
// route.use('/', indexRouter);
// route.use(['/profile', '/profiles'], profileRouter);
// route.use(['/user'], userRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

// catch 404 and forward to error handler
server.use(function (err, req, res, next) {
  next(createError(404));
});

// error handler
server.use(function (err, req, res, next) {
  if (err instanceof createError.HttpError) {
    res.locals.message = err.message;
    res.locals.status = err.statusCode;
    if (process.env.NODE_ENV === 'development') {
      res.locals.error = err;
    }
  }
  if (process.env.NODE_ENV === 'production' && !res.locals.message) {
    res.locals.message = 'ApplicationError';
    res.locals.status = 500;
  }
  if (res.locals.status) {
    res.status(res.locals.status);
    const errObject = { error: res.locals.error, message: res.locals.message };
    return res.json(errObject);
  }
  next(err);
});

module.exports = server;