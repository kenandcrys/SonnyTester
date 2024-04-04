const { Model } = require("objection")

class Category extends Model {
    static get tableName(){
        return "category";
    }

    static get relationMappings() {
        const Subcategory = require("./Subcategory")
        return {
            subcategory_name: {
                relation: Model.BelongsToOneRelation,
                modelClass: Subcategory,
            },
            subcategory_image: {
                relation: Model.BelongsToOneRelation,
                modelClass: Subcategory,
            }
        }
    }
}

module.exports = Category;