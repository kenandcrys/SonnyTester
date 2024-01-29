const { Model } = require("objection");

class Admin extends Model {
  static get tableName() {
    return "users";
  }

  static query(...args) {
    return super.query(...args).where("role", "admin");
  }
}

module.exports = Admin;
