exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('orders').del();

  // Get all user, billing address, delivery address, and payment method IDs
  const userIds = await knex.select('id').from('users');
  const billingAddressIds = await knex.select('id').from('payment_methods');
  const deliveryAddressIds = await knex.select('id').from('delivery_addresses');
  const paymentMethodIds = await knex.select('id').from('payment_methods');

  const seedData = [];
  const numberOfSeeds = 10; // Adjust as needed

  for (let i = 0; i < numberOfSeeds; i++) {
    const seed = {
      user_id: getRandomElement(userIds).id,
      delivery_fee: getRandomNumber(5, 20, 2),
      total_price: getRandomNumber(50, 200, 2),
      billing_address_id: getRandomElement(billingAddressIds).id,
      delivery_address_id: getRandomElement(deliveryAddressIds).id,
      payment_method_id: getRandomElement(paymentMethodIds).id,
      status: getRandomElement(['pending', 'shipped', 'delivered']),
      date_shipped: getRandomRecentDate(),
      created_at: getRandomPastDate(),
      updated_at: getRandomRecentDate(),
    };

    seedData.push(seed);
  }

  return knex('orders').insert(seedData);
};

// Helper function to get a random element from an array
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Helper function to generate a random number within a range
function getRandomNumber(min, max, precision) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
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
