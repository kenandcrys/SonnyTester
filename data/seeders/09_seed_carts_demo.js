exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('carts').del();

  // Get all user IDs
  const userIds = await knex.select('id').from('users');

  const seedData = [];

  for (const userId of userIds) {
    const seed = {
      user_id: userId.id,
      session_id: generateSessionId(),
    };

    seedData.push(seed);
  }

  return knex('carts').insert(seedData);
};

// Helper function to generate a random session ID
function generateSessionId() {
  return Math.floor(Math.random() * (9999999 - 10000) + 10000).toString();
}
