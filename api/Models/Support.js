const { Model } = require("objection");

const Support = () => {
  function tableName() {
    return "supports";
  }
  function query(...args) {
    return Model.query(...args).where("role", "support");
  }
  function relationMappings() {
    const User = require("./User");

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "supports.user_id",
          to: "users.id",
        },
      },
    };
  }
  return {
    tableName,
    query,
    relationMappings,
  };
};


module.exports = Support;
