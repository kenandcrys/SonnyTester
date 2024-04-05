exports.up = function(knex) {
  return knex.schema
    .createTable("category", (table) => {
      table.increments().primary();
      table.string("category_name", 255).notNullable();
    })
    .createTable("subcategory", (table) => {
      table.increments();
      table.string("subcategory_name", 255).notNullable();
      table
        .integer("categoryId")
        .notNullable()
        .references("id")
        .inTable("category")
        .onDelete("CASCADE"); // Add this line to delete subcategories when a category is deleted
    })
    .createTable("products", (table) => {
      table.increments();
      table.string("product_name", 255).notNullable();
      table.string("product_description", 1000).notNullable();
      table.string("product_price", 255).notNullable();
      table
        .integer("subcategoryId")
        .nullable()
        .references("id")
        .inTable("subcategory")
        .onDelete("CASCADE"); // Add this line to delete products when a subcategory is deleted
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("products")
    .dropTableIfExists("subcategory")
    .dropTableIfExists("category");
};
