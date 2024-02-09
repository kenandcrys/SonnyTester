const { Model } = require("objection");
class Support extends Model {
  static get tableName() {
    return "supports";
  }

  static query(...args) {
    return super.query(...args).where("role", "support");
  }

  static get relationMappings() {
    const User = require('./User'); 
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'supports.user_id',
          to: 'users.id',
        },
      },

    };
  }
}

module.exports = Support;
