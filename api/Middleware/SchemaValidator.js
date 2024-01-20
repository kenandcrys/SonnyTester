const schemaValidator = (schema) => async (req, res, next) => {
  const validated = await schema.validate(req.body, { abortEarly: false });
  req.body = validated;

  return next();
};

module.exports = schemaValidator;
