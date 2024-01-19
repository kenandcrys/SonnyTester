const yup = require("yup");
const schemaValidator = require("../SchemaValidator");

const ProductValidation = yup
  .object({
    name: yup.string().required(),
    description: yup.string().required(),
    category: yup.string().required(),
    images: new yup.ArraySchema(),
    price: yup.number().strict(true).required(),
    status: yup.string(),
    stock_quantity: yup.number().strict(true)
  })
  .noUnknown();

module.exports = schemaValidator(ProductValidation);
