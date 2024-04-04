const { Model } = require("objection");

class Subcategory extends Model {
  static get tableName() {
    return "subcategory";
  }

  static get relationMappings() {
    const Product = require("./Product");
    return {
      products: { // 'products' relation represents all products under a subcategory
        relation: Model.HasManyRelation, // A Subcategory has many Products
        modelClass: Product,
        join: {
          from: 'subcategory.id', // Assuming 'subcategory.id' is the primary key of subcategories
          to: 'products.subcategoryId' // Assuming 'products.subcategoryId' is the foreign key in products
        }
      }
    }
  }
}

module.exports = Subcategory;
