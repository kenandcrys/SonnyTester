const { Model } = require("objection")

class Category extends Model {
    static get tableName(){
        return "category";
    }

    static get relationMappings() {
        return {
            
        }
    }
}

module.exports = Category;