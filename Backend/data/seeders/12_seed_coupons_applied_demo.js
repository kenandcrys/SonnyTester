const faker = require('faker');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('coupons_applied').del()
    .then(async function () {
      // Insert seed entries
      const orders = await knex.select('id').from('orders');
      const coupons = await knex.select('id').from('coupons');
      const users = await knex.select('id').from('users');

      const couponsApplied = [];

      for (let i = 0; i < 10; i++) { // Adjust the loop count based on how many entries you want
        const order = faker.random.arrayElement(orders);
        const coupon = faker.random.arrayElement(coupons);
        const user = faker.random.arrayElement(users);

        const couponApplied = {
          order_id: order.id,
          coupon_id: coupon.id,
          user_id: user.id,
          discount_amount: faker.datatype.number({ min: 5, max: 50 }),
          date_applied: faker.date.past(),
        };

        couponsApplied.push(couponApplied);
      }

      return knex('coupons_applied').insert(couponsApplied);
    });
};
