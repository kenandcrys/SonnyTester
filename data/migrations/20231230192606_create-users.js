/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
      return knex.schema.createTable("users", function(table) {
        //BOTH
        table.string('id').primary(); 
        table.string('name').notNullable();
        table.string('profile_picture').nullable();
        table.string('email').unique().notNullable();
        table.string('phone').nullable();
        table.enum('role', ['admin', 'buyer', 'seller', 'premier_seller']).defaultTo('buyer'); // Role can be 'buyer' or 'seller'
        table.timestamps(true, true); // Adds 'created_at' and 'updated_at' timestamp columns
        //BUYER ONLY
        table.string('address').nullable();
        table.string('address_line_2').nullable();
        table.string('address_line_3').nullable();
        table.string('city', 100).nullable();
        table.string('postal_code', 20).nullable();
        //SELLER ONLY
        table.string('business_name').nullable();
        table.string('business_address').nullable();
        table.string('business_address_line_2').nullable();
        table.string('business_address_line_3').nullable();
        table.string('business_city', 100).nullable();
        table.string('business_postal_code', 20).nullable();
        table.string('biz_cert_number_ein').nullable();
        table.json('verification_images').nullable();
        table.string('password').notNullable();

    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  // Drop foreign key constraints
  return knex.schema.table('recommendations', function(table) {
    table.dropForeign('user_id');
  })
  // Drop the 'users' table
  .then(() => knex.schema.dropTableIfExists('users'));
};


