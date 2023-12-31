function createProductTable(knex, tableName) {
    return knex.schema.createTable(tableName, function(table) {
      table.increments('id').primary();
      table.string('type')
      table.string('name');
      table.string('description');
      table.decimal('price');
    });
  }
  
  exports.up = function(knex) {
    return Promise.all([
      createProductTable(knex, 'product'),
 
    ]);
  };
  
  exports.down = function(knex) {
    return Promise.all([
      knex.schema.dropTable('product'),

    ]);
  };