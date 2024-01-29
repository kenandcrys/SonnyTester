const yup = require("yup");
const schemaValidator = require("../SchemaValidator");

const AdminValidation = yup
  .object({
    name: yup.string().required(),
    profile_picture: yup.string("profile_picture").nullable(),
    email: yup.string().email().required(),
    phone: yup.string().nullable(),
    role: yup.string().oneOf(["admin"]).required(),
    password: yup.string().required(),
  })
  .noUnknown();

module.exports = schemaValidator(AdminValidation);
