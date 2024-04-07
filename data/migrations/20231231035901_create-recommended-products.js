exports.up = function(knex) {
  return knex.schema.hasTable('recommendations').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('recommendations', function(table) {
        table.increments('id').primary();
        // User receiving recommendation
        table.string('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        // Product being recommended
        table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE');
        table.unique(['user_id', 'product_id']);
        table.timestamps(true, false); //timestamp for when recommended to user
      });
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recommendations');
};
