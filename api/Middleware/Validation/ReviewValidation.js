const yup = require("yup");
const schemaValidator = require("../SchemaValidator");

const ReviewValidation = yup
  .object({
    product_id: yup.number().required(),
    description: yup.string(),
    rating: yup.number().min(1).max(5).required(),  
  })
  .noUnknown();

module.exports = schemaValidator(ReviewValidation);
