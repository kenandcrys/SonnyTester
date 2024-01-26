const { Model } = require("objection");

class Review extends Model {
  static get tableName() {
    return "reviews";
  }


  static get relationMappings() {


    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass:  require("./Buyer"),
        join: {
          from: "reviews.user_id",
          to: "users.id",
        },
      },
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: require("./Product"),
        join: {
          from: "reviews.product_id",
          to: "products.id",
        },
      },
    };
  }

}

module.exports = Review;
