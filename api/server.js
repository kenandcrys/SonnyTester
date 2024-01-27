require("express-async-errors");
const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const yup = require("yup");

//Objection db connection
const setupDB = require("../data/db-config");
setupDB();

const ProductRouter = require("./Routes/ProductRoute/ProductRoute");
const ReviewRouter = require("./Routes/ReviewRoute/ReviewRoute");
const OrderRouter = require("./Routes/OrderRoute/OrderRoute");
const BuyerRouter = require("./Routes/BuyerRoute/BuyerRoute");
const AdminRouter = require("./Routes/AdminRoute/AdminRoute");
const UserRouter = require("./Routes/UserRoute/UserRoute");
const config_result = dotenv.config();
if (process.env.NODE_ENV != "production" && config_result.error) {
  throw config_result.error;
}

//###[  Routers ]###
// const indexRouter = require('./index/indexRouter');
// const profileRouter = require('./profile/profileRouter');
// const userRouter = require('./user/userRouter');

const server = express();

process.on("unhandledRejection", (reason, p) => {
  console.error("Unhandled Rejection at: Promise", p, "reason:", reason);
  // application specific logging, throwing an error, or other logic here
});

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger("dev"));
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());

// application routes
// route.use('/', indexRouter);
// route.use(['/profile', '/profiles'], profileRouter);
// route.use(['/user'], userRouter);

server.use("/api/products", ProductRouter);
server.use("/api/reviews", ReviewRouter);
server.use("/api/orders", OrderRouter);
server.use("/api/buyers", BuyerRouter);
server.use("/api/admin", AdminRouter);
server.use("/api/user", UserRouter);

server.get("/", (_req, res) => {
  res.json({ api: "up" });
});

// catch 404 and forward to error handler
server.use(function (_req, _res, next) {
  next(createError(404));
});

// error handler
server.use(function (err, _req, res, next) {
  if (err instanceof yup.ValidationError) {
    const errors = err.inner.map((err) => {
      return {
        path: err.path,
        message: err.message,
      };
    });

    return res.status(400).json({ error: { errors } });
  }

  if (err instanceof createError.HttpError) {
    res.locals.message = err.message;
    res.locals.status = err.statusCode;
    if (process.env.NODE_ENV === "development") {
      res.locals.error = err;
    }
  }
  if (process.env.NODE_ENV === "production" && !res.locals.message) {
    res.locals.message = "ApplicationError";
    res.locals.status = 500;
  }
  if (res.locals.status) {
    res.status(res.locals.status);
    const errObject = { error: res.locals.error, message: res.locals.message };
    return res.json(errObject);
  }

  res.status(500).json({ error: err.message }); // We show the error message just while in development
  // res.status(500).json("Something went wrong");
});

module.exports = server;
