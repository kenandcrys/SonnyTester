const { Model } = require("objection");

class Subcategory extends Model {
  static get tableName() {
    return "subcategory";
  }
  static get relationMappings() {
    const Product = require("./Product")
    return {
      product_name: {
        relation: Model.BelongsToOneRelation,
        modelClass: Product,
      }
    }
  }
}
module.exports = Subcategory;