require("express-async-errors");
const errorHandler = require('./Middleware/errorHandler')
const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");

//Objection db connection
const setupDB = require("../data/db-config");
setupDB();

const config_result = dotenv.config();
if (process.env.NODE_ENV != "production" && config_result.error) {
  throw config_result.error;
}

//###[  Routers ]###
const AuthenticationRoute=require("./Routes/AuthenticationRoute/AuthenticationRoute");
const AdminRouter = require("./Routes/Admin");
const BuyerRouter = require("./Routes/Buyer");
const SellerRouter = require("./Routes/Seller");
const PublicRoutes = require("./Routes/PublicRoutes");

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
server.use("/api/auth", AuthenticationRoute);
server.use("/api", PublicRoutes);
server.use("/api", BuyerRouter);
server.use("/api/seller", SellerRouter);
server.use("/api/admin", AdminRouter);

server.get("/", (_req, res) => {
  res.json({ api: "up" });
});

// catch 404 and forward to error handler
server.use(function (_req, _res, next) {
  next(createError(404));
});

// error handler
server.use(errorHandler);

module.exports = server;
