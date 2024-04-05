exports.up = function (knex) {
  return knex.schema
    .createTable("category", (table) => {
      table.increments('id').primary();
      table.string("category_name", 255).notNullable();
    })
    .createTable("subcategory", (table) => {
      table.increments();
      table.string("subcategory_name", 255).notNullable();
      table
        .integer("categoryId")
        .notNullable()
        .references("id")
        .inTable("category");
    })
    .createTable("products", (table) => {
      table.increments();
      table.string("product_name", 255).notNullable();
      table.string("product_description", 1000).notNullable();
      table.string("product_price", 255).notNullable();
      table
        .integer("subcategoryId")
        .notNullable()
        .references("id")
        .inTable("subcategory");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("products")
    .dropTableIfExists("subcategory")
    .dropTableIfExists("category");
};
