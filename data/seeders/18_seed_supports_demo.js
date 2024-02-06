const faker = require("faker");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("supports").del();

  const users = await knex.select("id").from("users");

  const seedData = [];
  const numberOfSeeds = 10; // Adjust as needed

  for (let i = 0; i < numberOfSeeds; i++) {
    const seed = {
      user_id: faker.random.arrayElement(users).id,
      type: faker.random.arrayElement(["complaint", "question"]),
      status: faker.random.arrayElement(["pending", "in_progress", "resolved"]),
      description: faker.lorem.text(),
      response: faker.lorem.text(),
    };

    seedData.push(seed);
  }

  await knex("supports").insert(seedData);
};
