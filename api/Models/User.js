const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "users";
  }


static fromDatabaseJson(json) {
    if (json.role == "buyer") {
      const Buyer = require("./Buyer");
      return Model.fromDatabaseJson.call(Buyer, json);
    }else if (json.role == "admin") {
      const Admin = require("./Admin");
      return Model.fromDatabaseJson.call(Admin, json);
    }else {
      return Model.fromDatabaseJson.call(User, json)
    }
  }

 
}

module.exports = User;
