/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('reviews')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('reviews').insert([
          // Reviews for product with id 1 (Elegant Dress)
          { product_id: 1, user_id: "2", description: 'Beautiful dress! Fits perfectly.', rating: 5 },
  
          // Reviews for product with id 2 (Classic Suit)
          { product_id: 2, user_id: "3", description: 'Great suit for formal events.', rating: 4 },
  
          // Reviews for product with id 3 (Latest Smartphone)
          { product_id: 3, user_id: "3", description: 'Impressive features and performance.', rating: 5 },
  
          // Reviews for product with id 4 (Powerful Laptop)
          { product_id: 4, user_id: "2", description: 'Excellent laptop for heavy tasks.', rating: 4 },
  
          // Reviews for product with id 5 (Smart TV)
          { product_id: 5, user_id: "3", description: 'High-definition quality. Great for streaming.', rating: 5 },
  
          // Reviews for product with id 6 (Diamond Necklace)
          { product_id: 6, user_id: "2", description: 'Exquisite design. A perfect gift.', rating: 4 },
  
          // Reviews for product with id 7 (Smart Refrigerator)
          { product_id: 7, user_id: "2", description: 'Smart features make life easier.', rating: 5 },
  
          // Reviews for product with id 8 (Leather Handbag)
          { product_id: 8, user_id: "3", description: 'Stylish and practical. Love it!', rating: 4 },
  
          // Reviews for product with id 9 (Educational Toy Set)
          { product_id: 9, user_id: "3", description: 'Interactive and educational. Kids enjoy it.', rating: 5 },
  
          // Reviews for product with id 10 (Camping Tent)
          { product_id: 10, user_id: "2", description: 'Spacious and durable. Perfect for camping.', rating: 4 },
  
          // Reviews for product with id 11 (Sports Car Model)
          { product_id: 11, user_id: "3", description: 'Collectible model. Great for car enthusiasts.', rating: 5 },
  
          // Reviews for product with id 12 (Power Drill Set)
          { product_id: 12, user_id: "2", description: 'Comprehensive set for home improvement projects.', rating: 4 },
  
          // Reviews for product with id 13 (JavaScript, Getting a BS in JS)
          { product_id: 13, user_id: "1", description: 'A comprehensive guide to JavaScript.', rating: 5 },
        ]);
      });
  };
  