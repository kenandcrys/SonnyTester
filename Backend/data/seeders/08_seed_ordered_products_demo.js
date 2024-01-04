const faker = require('faker');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ordered_products').del()
    .then(async function () {
      // Inserts seed entries
      const orderIds = await knex.select('id').from('orders');
      const productIds = await knex.select('id').from('products');

      const seedData = [];
      const numberOfSeeds = 20; // Adjust as needed

      for (let i = 0; i < numberOfSeeds; i++) {
        const seed = {
          order_id: faker.random.arrayElement(orderIds).id,
          product_id: faker.random.arrayElement(productIds).id,
          quantity: faker.random.number({ min: 1, max: 10 }),
          price: faker.random.number({ min: 10, max: 100, precision: 0.01 }),
          created_at: faker.date.past(),
          updated_at: faker.date.recent(),
        };

        seedData.push(seed);
      }

      return knex('ordered_products').insert(seedData);
    });
};
