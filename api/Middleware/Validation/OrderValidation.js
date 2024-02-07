const yup = require("yup");
const schemaValidator = require("../SchemaValidator");

const OrderValidation = yup
  .object({
    user_id:yup.string().required(),
    delivery_fee:yup.number().required(),
    total_price:yup.number().required(),
    billing_address_id:yup.number().required(),
    delivery_address_id:yup.number().required(),
    payment_method_id:yup.number().required(),
    status: yup.string().required(),
    date_shipped: yup.date().required(),  
  })
  .noUnknown();

module.exports = schemaValidator(OrderValidation);
