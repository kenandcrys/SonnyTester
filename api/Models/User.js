const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "users";
  }

  static fromDatabaseJson(json) {
    if (json.role == "buyer") {
      const Buyer = require("./Buyer");
      return Model.fromDatabaseJson.call(Buyer, json);
    }

    if (json.role == "admin") {
      const Admin = require("./Admin");
      return Model.fromDatabaseJson.call(Admin, json);
    }

    if (json.role == "seller") {
      const Seller = require("./Seller");
      return Model.fromDatabaseJson.call(Seller, json);
    }
  }
}

module.exports = User;
