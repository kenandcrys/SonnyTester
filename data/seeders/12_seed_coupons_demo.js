const faker = require("faker");

function generateCouponCode() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let couponCode = "";

  for (let i = 0; i < 8; i++) {
    const randomIndex = faker.datatype.number({ max: characters.length - 1 });
    couponCode += characters.charAt(randomIndex);
  }

  return couponCode;
}

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("coupons")
    .del()
    .then(async function () {
      // Inserts seed entries
      const productIds = await knex.select("id").from("products");

      const seedData = [];

      for (let i = 0; i < 10; i++) {
        const coupon = generateCouponCode();

        const seed = {
          code: coupon,
          discount_amount: faker.datatype.number({
            min: 0,
            max: 999999.99,
            precision: 0.01,
          }),
          expiration_date: faker.date.future(),
          usage_limit: faker.datatype.number({ min: 1, max: 100 }),
          usage_limit_per_user: faker.datatype.number({ min: 1, max: 10 }),
          min_purchase_amount: faker.datatype.number({
            min: 10,
            max: 1000,
            precision: 0.01,
          }),
          applicable_products: JSON.stringify([
            faker.random.arrayElement(productIds),
            faker.random.arrayElement(productIds),
            faker.random.arrayElement(productIds),
          ]),
          applicable_categories: JSON.stringify([
            faker.random.arrayElement(productIds),
            faker.random.arrayElement(productIds),
            faker.random.arrayElement(productIds),
          ]),
          start_date: faker.date.past(),
          usage_count: faker.datatype.number({ min: 0, max: 100 }),
          applicability_conditions: JSON.stringify({
            min_items: faker.datatype.number({ min: 1, max: 5 }),
            category_required: faker.lorem.word(), 
          }),
        };

        seedData.push(seed);
      }

      return knex("coupons").insert(seedData);
    });
};
