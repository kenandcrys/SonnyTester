/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('products').del()
      .then(function () {
        // Inserts seed entries
        return knex('products').insert([
          {
            id: 1,
            category: "Women's Fashion",
            description: "Beautiful dress for special occasions",
            images: ['https://i.imgur.com/HrLVwF6.png'],
            name: 'Elegant Dress',
            price: 89.99,
            status: 'published',
            stock_quantity: 50,
            user_id: "2"
          },
          {
            id: 2,
            category: "Women's Fasion",
            description: "A comfortable but stylish T-shirt tied off in a knot",
            images: ['https://i.imgur.com/elyMs5B.png'],
            name: 'Tied T-shirt',
            status: 'published',
            stock_quantity: 40,
            user_id: "3"
          },
          {
            id: 3,
            category: "Women's Fasion",
            description: "Fashionable twill skirt with purple smoke-like pattern",
            images: ['https://i.imgur.com/P6UpEGy.png'],
            name: 'Smokey Print Twill Skirt',
            status: 'published',
            stock_quantity: 20,
            user_id: "1"
          },
          {
            id: 4,
            category: "Women's Fasion",
            description: "Ankle-length skirt in Boho style with a rainbow print",
            images: ['https://i.imgur.com/Y5MxdWx.png'],
            name: 'Rainbow Boho Skirt',
            status: 'published',
            stock_quantity: 30,
            user_id: "5"
          },
          {
            id: 5,
            category: "Women's Fasion",
            description: "Shoulderless, white, mini skirt-length sundress with lace fringe",
            images: ['https://i.imgur.com/xAYP9oH.png'],
            name: 'Lace-Fringed Shoulderless Sundress',
            status: 'published',
            stock_quantity: 20,
            user_id: "1"
          },
          {
            id: 6,
            category: "Women's Fasion",
            description: "Orange ankle length midi dress with button cuffs",
            images: ['https://i.imgur.com/NuTtO2k.png'],
            name: 'Orange Midi Dress',
            status: 'published',
            stock_quantity: 10,
            user_id: "6"
          },
          {
            id: 7,
            category: "Women's Fasion",
            description: "Ankle length floral print sundress with full sleeves",
            images: ['https://i.imgur.com/jBKrBXD.png'],
            name: 'Floral Print Sundress',
            status: 'published',
            stock_quantity: 60,
            user_id: "4"
          },
          {
            id: 8,
            category: "Women's Fasion",
            description: "Sleeveless jumpsuit with a starry print",
            images: ['https://i.imgur.com/KbiruMM.png'],
            name: 'Starry Print Jumpsuit',
            status: 'published',
            stock_quantity: 40,
            user_id: "8"
          },
          {
            id: 9,
            category: "Women's Fasion",
            description: "Camo print pantsuit with flared collar",
            images: ['https://i.imgur.com/Oop40sP.png'],
            name: 'Camo Pantsuit',
            status: 'published',
            stock_quantity: 10,
            user_id: "1"
          },
          {
            id: 10,
            category: "Women's Fasion",
            description: "White sports top/workout top for gym",
            images: ['https://i.imgur.com/E4nEf0v.png'],
            name: 'White spandex sports top',
            status: 'published',
            stock_quantity: 20,
            user_id: "1"
          },
          // Add other products accordingly
          // ...
        ]);
      });
  };
  