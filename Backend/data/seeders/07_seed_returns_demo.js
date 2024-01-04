const faker = require('faker');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('returns').del()
    .then(async function () {
      // Inserts seed entries
      const orderIds = await knex.select('id').from('orders');
      const userIds = await knex.select('id').from('users');

      const seedData = [];
      const numberOfSeeds = 10; // Adjust as needed

      for (let i = 0; i < numberOfSeeds; i++) {
        const seed = {
          order_id: faker.random.arrayElement(orderIds).id,
          user_id: faker.random.arrayElement(userIds).id,
          reason: faker.lorem.sentence(),
          approved: faker.random.boolean(),
          rejection_reason: faker.random.boolean() ? faker.lorem.sentence() : null,
          created_at: faker.date.past(),
          updated_at: faker.date.recent(),
        };

        seedData.push(seed);
      }

      return knex('returns').insert(seedData);
    });
};
