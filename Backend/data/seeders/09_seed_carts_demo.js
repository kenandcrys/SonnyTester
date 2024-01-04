const faker = require('faker');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('carts').del()
    .then(async function () {
      // Inserts seed entries
      const userIds = await knex.select('id').from('users');

      const seedData = [];

      for (let i = 0; i < userIds.length; i++) {
        const seed = {
          user_id: userIds[i].id,
          session_id: faker.random.number({ min: 10000, max: 9999999 }).toString(),
        };

        seedData.push(seed);
      }

      return knex('carts').insert(seedData);
    });
};
