exports.up = function (knex) {
  return knex.schema
    .createTable("category", (table) => {
      table.increments('id').primary();
      table.string("category_name", 255);
    })
    .createTable("subcategory", (table) => {
      table.increments();
      table.string("subcategory_name", 255);
      table
        .integer("categoryId")
        .references("id")
        .inTable("category");
    })
    .createTable("products", (table) => {
      table.increments();
      table.string("product_name", 255);
      table.string("product_description", 1000);
      table.string("product_price", 255);
      table
        .integer("subcategoryId")
       
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
