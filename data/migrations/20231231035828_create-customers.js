exports.up = function(knex) {
  return knex.schema.createTable('customers', function(table) {
    // Customer details
    table.string('user_id').primary()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
    table.integer('number_of_orders').defaultTo(0);
    table.integer('customer_since_years');
    table.integer('total_spending');
    table.integer('average_order_amount');
    table.date('first_purchase_date');
    table.date('last_purchase_date');
    table.string('seller_id') // Use string type here
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('customers');
};
