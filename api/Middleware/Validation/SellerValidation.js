const yup = require("yup");
const schemaValidator = require("../SchemaValidator");

const SellerValidation = yup
  .object({
    name:yup.string().required(),
    profile_picture:yup.string('profile_picture').nullable(),
    email:yup.string().email().required(),
    phone:yup.string().nullable(),
    role:yup.string().oneOf(['seller']).required(), 
    business_name:yup.string().required(),
    business_address:yup.string().nullable(),
    business_address_line_2:yup.string().nullable(),
    business_address_line_3:yup.string().nullable(),
    business_city:yup.string().max(100).nullable(),
    business_postal_code:yup.string().nullable(),
    biz_cert_number_ein:yup.string().nullable(),
    verification_images:yup.mixed().nullable(),
    password:yup.string().required()
  })
  .noUnknown();

module.exports = schemaValidator(SellerValidation);
