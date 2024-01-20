const { Model } = require("objection");

class Review extends Model {
  static get tableName() {
    return "reviews";
  }


  static get relationMappings() {
    const User = require("./User");
    const Product = require("./Product");

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "reviews.user_id",
          to: "users.id",
        },
      },
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: Product,
        join: {
          from: "reviews.product_id",
          to: "products.id",
        },
      },
    };
  }

}

module.exports = Review;
