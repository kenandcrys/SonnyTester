/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('payment_methods', function (table) {
    table.increments('id').primary();
    table
    .integer('user_id')
    .unsigned().references('id')
    .inTable('users')
    .onDelete('CASCADE');
    table.string('card_type', 20);
    //table.string('card_number', 16); this is heavily regulated by PCI DSS, but putting here if we want to encrypt
    table.string('last_four_digits', 4);
    table.date('expiration_date');
    table.string('security_code', 4); //this is heavily regulated by PCI DSS, but putting here if we want to encrypt
    table.boolean('is_expired').defaultTo(false); 
    table.boolean('is_disabled').defaultTo(false); //not sure if we want to keep this functionality, but kept it in
    table.boolean('is_default_payment_method').defaultTo(false);
    table.boolean('is_billing_same_as_delivery_address').defaultTo(false);
    table.boolean('is_billing_same_as_user_address').defaultTo(false);
    table.string('billing_address', 255).nullable();
    table.string('billing_address_line_2').nullable();
    table.string('billing_address_line_3').nullable();
    table.string('billing_city', 100).nullable();
    table.string('billing_postal_code', 20).nullable(); 
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('payment_methods');
};
