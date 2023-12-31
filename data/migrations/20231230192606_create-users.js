/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
      return knex.schema.createTable("users", function(table) {
        //BOTH
        table.increments('id').primary(); // Auto-incrementing primary key
        table.string('name').notNullable();
        table.string('profile_picture').nullable();
        table.string('email').unique().notNullable();
        table.string('phone').nullable();
        table.enum('role', ['buyer', 'seller']).defaultTo('buyer'); // Role can be 'buyer' or 'seller'
        table.json('payment_methods').nullable(); // Array of payment methods common to both buyers and sellers
        table.json('order_history').nullable(); // Array of order history common to both buyers and sellers
        table.timestamps(true, true); // Adds 'created_at' and 'updated_at' timestamp columns
        //BUYER ONLY
        table.string('address').nullable(); // Address specific to buyers
        table.json('saved_items').nullable(); // Array of saved items specific to buyers
        table.json('recommendations').nullable(); // Array of recommendations specific to buyers
        //SELLER ONLY
        table.string('business_name').nullable(); // Business name specific to sellers
        table.string('business_address').nullable(); // Business address specific to sellers
        table.string('biz_cert_number_ein').nullable(); // Business certification number/EIN specific to sellers
        table.json('verification_images').nullable(); // Array of verification images specific to sellers
        table.json('products_listed').nullable(); // Array of products listed specific to sellers
        table.json('customers').nullable(); // Array of customers specific to sellers
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
