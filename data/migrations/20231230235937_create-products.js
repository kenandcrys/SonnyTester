exports.up = function(knex) {
  return knex.schema.hasTable('category').then((exists) => {
    if (!exists) {
      return knex.schema.createTable("category", (table) => {
        table.increments().primary();
        table.string("category_name", 255).notNullable();
      });
    }
  })
  .then(() => {
    return knex.schema.hasTable('subcategory').then((exists) => {
      if (!exists) {
        return knex.schema.createTable("subcategory", (table) => {
          table.increments();
          table.string("subcategory_name", 255).notNullable();
          table
            .integer("categoryId")
            .notNullable()
            .references("id")
            .inTable("category")
            .onDelete("CASCADE");
        });
      }
    });
  })
  .then(() => {
    return knex.schema.hasTable('products').then((exists) => {
      if (!exists) {
        return knex.schema.createTable("products", (table) => {
          table.increments();
          table.string("product_name", 255).notNullable();
          table.string("product_description", 1000).notNullable();
          table.string("product_price", 255).notNullable();
          table
            .integer("subcategoryId")
            .nullable()
            .references("id")
            .inTable("subcategory")
            .onDelete("CASCADE");
        });
      }
    });
  });
};


exports.down = function(knex) {
  // Drop foreign key constraint on 'subcategoryId' column in 'products' table
  return knex.schema.table('products', function(table) {
    table.dropForeign('subcategoryId');
  })
  // Drop the 'products' table
  .then(() => knex.schema.dropTableIfExists('products'))
  // Drop the 'subcategory' table
  .then(() => knex.schema.dropTableIfExists('subcategory'))
  // Drop the 'category' table
  .then(() => knex.schema.dropTableIfExists('category'));
};
