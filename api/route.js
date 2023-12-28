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

const route = express();

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});

route.use(helmet());
route.use(express.json());
route.use(logger('dev'));
route.use(express.urlencoded({ extended: false }));
route.use(cookieParser());

// application routes
// route.use('/', indexRouter);
// route.use(['/profile', '/profiles'], profileRouter);
// route.use(['/user'], userRouter);

route.get("/", (req, res) => {
  res.json({ api: "up" });
});

// catch 404 and forward to error handler
route.use(function (err, req, res, next) {
  next(createError(404));
});

// error handler
route.use(function (err, req, res, next) {
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

module.exports = route;