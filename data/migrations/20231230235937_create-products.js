exports.up = function (knex) {
  return knex.schema
    .createTable("category", (table) => {
      table.increments("id").primary();
      table.string("category_name", 255).notNullable();
      table.json("image");
    })
    .createTable("subcategory", (table) => {
      table.increments("id").primary();
      // table.integer("categoryId").unsigned().notNullable();
      table.string("subcategory_name", 255).notNullable();
      table.foreign("categoryId").references("id").inTable("category");
    })
    .createTable("products", (table) => {
      table.increments("id").primary();
      table.string("product_name", 255).notNullable();
      table.string("product_description", 1000).notNullable();
      table.string("product_price", 255).notNullable();
      // table.integer("subcategoryId").unsigned().notNullable();
      table.foreign("subcategoryId").references("id").inTable("subcategory").onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("products")
    .dropTableIfExists("subcategory")
    .dropTableIfExists("category");
};
