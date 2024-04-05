exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('returns').del();

  // Get all order and user IDs
  const orderIds = await knex.select('id').from('orders');
  const userIds = await knex.select('id').from('users');

  const seedData = [];
  const numberOfSeeds = 10; // Adjust as needed

  for (let i = 0; i < numberOfSeeds; i++) {
    const seed = {
      order_id: getRandomElement(orderIds).id,
      user_id: getRandomElement(userIds).id,
      reason: generateReason(),
      approved: getRandomBoolean(),
      rejection_reason: getRandomBoolean() ? generateReason() : null,
      created_at: getRandomPastDate(),
      updated_at: getRandomRecentDate(),
    };

    seedData.push(seed);
  }

  return knex('returns').insert(seedData);
};

// Helper function to get a random element from an array
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Helper function to generate a random boolean value
function getRandomBoolean() {
  return Math.random() < 0.5;
}

// Helper function to generate a random reason
function generateReason() {
  const reasons = [
    'Item did not match description',
    'Item was damaged during shipping',
    'Changed mind about the purchase',
    'Received wrong item',
    'Item did not fit as expected',
  ];
  return getRandomElement(reasons);
}

// Helper function to generate a random past date
function getRandomPastDate() {
  const currentDate = new Date();
  const randomOffset = Math.floor(Math.random() * 30); // Random offset up to 30 days
  const randomDate = new Date(currentDate.setDate(currentDate.getDate() - randomOffset));
  return randomDate.toISOString();
}

// Helper function to generate a random recent date
function getRandomRecentDate() {
  const currentDate = new Date();
  const randomOffset = Math.floor(Math.random() * 7); // Random offset up to 7 days
  const randomDate = new Date(currentDate.setDate(currentDate.getDate() - randomOffset));
  return randomDate.toISOString();
}
