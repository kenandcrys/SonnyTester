const yup = require("yup");
const createError = require("http-errors");

module.exports = function (err, _req, res, next) {
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
};
