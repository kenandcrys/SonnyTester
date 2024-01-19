const { Model } = require("objection");

class Product extends Model {
  static get tableName() {
    return "products";
  }

  // This is an example of the relation but User Model is not created yet
  // static get relationMappings() {
  //   const User = require("./User");

  //   return {
  //     seller: {
  //       relation: Model.BelongsToOneRelation,
  //       modelClass: User,
  //       join: {
  //         from: "users.id",
  //         to: "products.user_id",
  //       },
  //     },
  //   };
  // }
}

module.exports = Product;
