const faker = require('faker');

function generateRandomPaymentMethod(userId) {
  const cardTypes = ['Visa', 'MasterCard', 'Amex'];
  const expirationDate = new Date(new Date().getFullYear() + Math.floor(Math.random() * 5), Math.floor(Math.random() * 12), 1); // Random future expiration date within the next 5 years
  const securityCode = Math.floor(Math.random() * (999 - 100 + 1) + 100); // Random 3-digit security code

  return {
    user_id: userId,
    card_type: cardTypes[Math.floor(Math.random() * cardTypes.length)],
    last_four_digits: Math.floor(Math.random() * (9999 - 1000 + 1) + 1000).toString(),
    expiration_date: expirationDate,
    security_code: securityCode.toString(),
    is_expired: expirationDate < new Date(), // Check if expiration date is in the past
    is_disabled: Math.random() < 0.5, // 50% chance of being disabled
    is_default_payment_method: Math.random() < 0.3, // 30% chance of being default
    is_billing_same_as_delivery_address: Math.random() < 0.5, // 50% chance of being the same as delivery address
    is_billing_same_as_user_address: Math.random() < 0.5, // 50% chance of being the same as user address
    billing_address: faker.address.streetAddress(),
    billing_address_line_2: faker.address.secondaryAddress(),
    billing_address_line_3: faker.address.secondaryAddress(),
    billing_city: faker.address.city(),
    billing_postal_code: faker.address.zipCode(),
    created_at: new Date(),
    updated_at: new Date(),
  };
}

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('payment_methods').del();

  // Get all user IDs
  const userIds = await knex.select('id').from('users');

  const seedData = [];
  const numberOfSeeds = 10; // Adjust as needed

  for (let i = 0; i < numberOfSeeds; i++) {
    const userId = userIds[Math.floor(Math.random() * userIds.length)].id;
    const paymentMethod = generateRandomPaymentMethod(userId);
    seedData.push(paymentMethod);
  }

  return knex('payment_methods').insert(seedData);
};
