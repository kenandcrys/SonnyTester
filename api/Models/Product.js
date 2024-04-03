const { Model } = require("objection");

class Product extends Model {
  static get tableName() {
    return "products";
  }

  // This is an example of the relation but User Model is not created yet
  static get relationMappings() {
    const User = require("./User");
    const Review = require("./Review");
    const Order = require("./Order");
    const Category = require("./Category");
    const Subcategory = require("./Subcategory");
    return {
      seller: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "products.user_id",
          to: "users.id",
        },
      },
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: 'products.id',
          to: 'reviews.product_id'
        }
      },
      orders: {
        relation: Model.ManyToManyRelation,
        modelClass: Order,
        join: {
          from: 'products.id',
          through: {
            from: 'ordered_products.product_id',
            to: 'ordered_products.order_id'
          },
          to: 'orders.id'
        }
      },
      subcategory: { // define relation for subcategory
        relation: Model.BelongsToOneRelation,
        modelClass: Subcategory,
        join: {
          from: "products.subcategoryId",
          to: "subcategories.id"
        },
        modify: query => {
          query.select('subcategories.*', 'c.name as categoryName')
               .join('categories as c', 'subcategories.categoryId', 'c.id');
        }
      }
    };
  }

}

module.exports = Product;
