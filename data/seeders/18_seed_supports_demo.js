/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("supports").del();

  const users = await knex.select("id").from("users");

  const seedData = [
    {
      user_id: users[0].id,
      type: "complaint",
      status: "pending",
      description: "Sample complaint description",
      response: "Sample response to complaint",
    },
    {
      user_id: users[1].id,
      type: "question",
      status: "resolved",
      description: "Sample question description",
      response: "Sample response to question",
    },
    // Add more seed data as needed
  ];

  await knex("supports").insert(seedData);
};

