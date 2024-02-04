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
            images: ['image_url1.jpg', 'image_url2.jpg'],
            name: 'Elegant Dress',
            price: 89.99,
            status: 'published',
            stock_quantity: 50,
            user_id: "2"
          },
          {
            id: 2,
            category: "Men's Fashion",
            description: "Formal suit for men",
            images: ['image_url3.jpg', 'image_url4.jpg'],
            name: 'Classic Suit',
            price: 129.99,
            status: 'published',
            stock_quantity: 30,
            user_id: "3"
          },
          {
            id: 3,
            category: 'Phones and Accessories',
            description: 'High-performance smartphone with advanced features',
            images: ['image_url5.jpg', 'image_url6.jpg'],
            name: 'Latest Smartphone',
            price: 699.99,
            status: 'published',
            stock_quantity: 20,
            user_id: "4"
          },
          {
            id: 4,
            category: 'Computer',
            description: 'State-of-the-art laptop for heavy computing tasks',
            images: ['image_url7.jpg', 'image_url8.jpg'],
            name: 'Powerful Laptop',
            price: 1499.99,
            status: 'published',
            stock_quantity: 15,
            user_id: "2"
          },
          {
            id: 5,
            category: 'Consumer Electronics',
            description: 'High-definition smart TV with streaming capabilities',
            images: ['image_url9.jpg', 'image_url10.jpg'],
            name: 'Smart TV',
            price: 899.99,
            status: 'published',
            stock_quantity: 25,
            user_id: "3"
          },
          {
            id: 6,
            category: 'Jewelry',
            description: 'Exquisite diamond necklace for special occasions',
            images: ['image_url11.jpg', 'image_url12.jpg'],
            name: 'Diamond Necklace',
            price: 2499.99,
            status: 'published',
            stock_quantity: 10,
            user_id: "4"
          },
          {
            id: 7,
            category: 'Home and Appliances',
            description: 'Refrigerator with smart features and energy efficiency',
            images: ['image_url13.jpg', 'image_url14.jpg'],
            name: 'Smart Refrigerator',
            price: 1299.99,
            status: 'published',
            stock_quantity: 12,
            user_id: "2"
          },
          {
            id: 8,
            category: 'Bags and Shoes',
            description: 'Stylish leather handbag for everyday use',
            images: ['image_url15.jpg', 'image_url16.jpg'],
            name: 'Leather Handbag',
            price: 129.99,
            status: 'published',
            stock_quantity: 40,
            user_id: "3"
          },
          {
            id: 9,
            category: 'Toys',
            description: 'Interactive and educational toy set for children',
            images: ['image_url17.jpg', 'image_url18.jpg'],
            name: 'Educational Toy Set',
            price: 39.99,
            status: 'published',
            stock_quantity: 60,
            user_id: "4"
          },
          {
            id: 10,
            category: 'Outdoor',
            description: 'Spacious and durable camping tent for outdoor adventures',
            images: ['image_url19.jpg', 'image_url20.jpg'],
            name: 'Camping Tent',
            price: 199.99,
            status: 'published',
            stock_quantity: 20,
            user_id: "2"
          },
          {
            id: 11,
            category: 'Automotive',
            description: 'Collectible sports car model for enthusiasts',
            images: ['image_url21.jpg', 'image_url22.jpg'],
            name: 'Sports Car Model',
            price: 49.99,
            status: 'published',
            stock_quantity: 5,
            user_id: "3"
          },
          {
            id: 12,
            category: 'Home Improvement',
            description: 'Comprehensive power drill set for home improvement projects',
            images: ['image_url23.jpg', 'image_url24.jpg'],
            name: 'Power Drill Set',
            price: 129.99,
            status: 'published',
            stock_quantity: 15,
            user_id: "4"
          },
          {
            id: 13,
            category: 'Books',
            description: 'A comprehensive guide to mastering JavaScript',
            images: ['book_cover_image.jpg'],
            name: 'JavaScript, Getting a BS in JS',
            price: 19.99,
            status: 'published',
            stock_quantity: 100,
            user_id: "2"
          },
          // Add other products accordingly
          // ...
        ]);
      });
  };
  