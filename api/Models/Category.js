const { Model } = require("objection")

class Category extends Model {
    static get tableName(){
        return "category";
    }

    static get relationMappings() {
        const Subcategory = require("./Subcategory")
        return {
            subcategories: { // 'subcategories' relation represents all subcategories under a category
                relation: Model.HasManyRelation, // A Category has many Subcategories
                modelClass: Subcategory,
                join: {
                    from: 'categories.id', // Assuming 'categories.id' is the primary key of categories
                    to: 'subcategories.categoryId' // Assuming 'subcategories.categoryId' is the foreign key in subcategories
                }
            }
        }
    }
};

module.exports = Category;