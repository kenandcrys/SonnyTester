const yup = require("yup");
const schemaValidator = require("../SchemaValidator");

const BuyerValidation = yup
  .object({
    name:yup.string().required(),
    profile_picture:yup.string('profile_picture').nullable(),
    email:yup.string().email().required(),
    phone:yup.string().nullable(),
    role:yup.string().oneOf(['buyer']).required(), 
    address:yup.string().nullable(),
    address_line_2:yup.string().nullable(),
    address_line_3:yup.string().nullable(),
    city:yup.string().max(100).nullable(),
    postal_code:yup.string().max(20).nullable(), 
    password:yup.string().required()
  })
  .noUnknown();

module.exports = schemaValidator(BuyerValidation);
