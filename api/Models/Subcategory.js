const { Model } = require("objection");

class Subcategory extends Model {
  static get tableName() {
    return "subcategory";
  }
  static get relationMappings() {
    return {
        
        }
    }
}
module.exports = Subcategory;