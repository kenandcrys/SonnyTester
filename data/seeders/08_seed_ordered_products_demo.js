exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('ordered_products').del();

  // Get all order and product IDs
  const orderIds = await knex.select('id').from('orders');
  const productIds = await knex.select('id').from('products');

  const seedData = [];
  const numberOfSeeds = 20; // Adjust as needed

  for (let i = 0; i < numberOfSeeds; i++) {
    const seed = {
      order_id: getRandomElement(orderIds).id,
      product_id: getRandomElement(productIds).id,
      quantity: getRandomNumber(1, 10),
      price: getRandomNumber(10, 100, 2),
      created_at: getRandomDate(),
      updated_at: getRandomDate(),
    };

    seedData.push(seed);
  }

  return knex('ordered_products').insert(seedData);
};

// Helper function to get a random element from an array
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Helper function to generate a random number between min and max (inclusive) with a specified precision
function getRandomNumber(min, max, precision = 0) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
}

// Helper function to generate a random date between now and 7 days ago
function getRandomDate() {
  const currentDate = new Date();
  const randomOffset = Math.floor(Math.random() * 7);
  const randomDate = new Date(currentDate.setDate(currentDate.getDate() - randomOffset));
  return randomDate.toISOString();
}
