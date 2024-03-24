/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(() => knex("subcategory").del())
    .then(() => knex("category").del())
    .then(function () {
      // Inserts seed entries
      return knex("category").insert([
        {category_name: "Phones & Accessories", image: { url: "electronics_image_url" } },
        { category_name: "Women", image: { url: "clothing_image_url" } },
        { category_name: "Men", image: { url: "books_image_url" } },
        { category_name: "Computer, Office & Security", image: { url: "books_image_url" } },
        { category_name: "Electronics", image: { url: "books_image_url" } },
        { category_name: "Jewelry", image: { url: "books_image_url" } },
        { category_name: "Kids & Toys", image: { url: "books_image_url" } },
        { category_name: "Tools & Home Improvement", image: { url: "books_image_url" } },
        { category_name: "Automotive", image: { url: "books_image_url" } },
        { category_name: "Digital Media", image: { url: "books_image_url" } },
        { category_name: "Outdoor, Fun & Sports", image: { url: "books_image_url" } },
        { category_name: "Home, Pets & Appliances", image: { url: "books_image_url" } },
      ]);
    })
    .then(function () {
      return knex("subcategory").insert([
        //Phones and Accessories
        { subcategory_name: "Bluetooth Speakers", categoryId: 1 },
        { subcategory_name: "Chargers and Cables", categoryId: 1 },
        { subcategory_name: "Earphones", categoryId: 1 },
        { subcategory_name: "Phone Cases", categoryId: 1 },
        { subcategory_name: "Smart Phones", categoryId: 1 },
        { subcategory_name: "Smart Watches", categoryId: 1 },
        //Men's Fashion
        { subcategory_name: "Men's Clothing", categoryId: 2 },
        { subcategory_name: "Men's Bags", categoryId: 2 },
        { subcategory_name: "Men's Shoes", categoryId: 2 },
        { subcategory_name: "Men's Jackets & Coats", categoryId: 2 },
        { subcategory_name: "Men's Accessories", categoryId: 2 },
        //Women's Fashion
        { subcategory_name: "Women's Tops", categoryId: 3 },
        { subcategory_name: "Women's Bottoms", categoryId: 3 },
        { subcategory_name: "Women's Dresses", categoryId: 3 },
        { subcategory_name: "Women's Jumpsuits", categoryId: 3 },
        { subcategory_name: "Women's Activewear", categoryId: 3 },
        { subcategory_name: "Women's Swimwear", categoryId: 3 },
        { subcategory_name: "Women's Bags", categoryId: 3 },
        { subcategory_name: "Women's Shoes", categoryId: 3 },
        { subcategory_name: "Women's Accessories", categoryId: 3 },
        //Computer, Office and Security
        { subcategory_name: "Laptops", categoryId: 4 },
        { subcategory_name: "Desktops", categoryId: 4 },
        { subcategory_name: "Computer Accessories", categoryId: 4 },
        { subcategory_name: "Printers & Scanners", categoryId: 4 },
        { subcategory_name: "Networking", categoryId: 4 },
        { subcategory_name: "Organization & Storage", categoryId: 4 },
        { subcategory_name: "Office Supplies", categoryId: 4 },
        { subcategory_name: "Office Security", categoryId: 4 },
        { subcategory_name: "Smart Locks and Accessories", categoryId: 4 },
        //Electronics
        { subcategory_name: "Cameras", categoryId: 5 },
        { subcategory_name: "E-book Readers", categoryId: 5 },
        { subcategory_name: "Gaming Accessories", categoryId: 5 },
        { subcategory_name: "Tablets", categoryId: 5 },
        { subcategory_name: "TVs", categoryId: 5 },
        { subcategory_name: "Security Cameras", categoryId: 5 },
        { subcategory_name: "Smart Lighting", categoryId: 5 },
        //Jewelry
        { subcategory_name: "Sets", categoryId: 6 },
        { subcategory_name: "Earrings", categoryId: 6 },
        { subcategory_name: "Necklaces", categoryId: 6 },
        { subcategory_name: "Pocket Watches", categoryId: 6 },
        { subcategory_name: "Bracelets", categoryId: 6 },
        { subcategory_name: "Rings", categoryId: 6 },
        { subcategory_name: "Wrist Watches", categoryId: 6 },
        { subcategory_name: "Trending", categoryId: 6 },
        //Kids and Toys
        { subcategory_name: "Roll & Explore", categoryId: 7 },
        { subcategory_name: "Action Figures", categoryId: 7 },
        { subcategory_name: "Fun Discoveries", categoryId: 7 },
        { subcategory_name: "Create & Play", categoryId: 7 },
        { subcategory_name: "Surprise Haven", categoryId: 7 },
        { subcategory_name: "Doll Corner", categoryId: 7 },
        { subcategory_name: "Fantasy Fashion", categoryId: 7 },
        //Tools and Home Improvement
        { subcategory_name: "Lightbulbs, Fixtures & Fans", categoryId: 8 },
        { subcategory_name: "Hardware", categoryId: 8 },
        { subcategory_name: "Electrical", categoryId: 8 },
        { subcategory_name: "Paint", categoryId: 8 },
        { subcategory_name: "Wallpaper", categoryId: 8 },
        { subcategory_name: "Flooring", categoryId: 8 },
        { subcategory_name: "Plumbing", categoryId: 8 },
        { subcategory_name: "Mailboxes", categoryId: 8 },
        { subcategory_name: "Hand Tools", categoryId: 8 },
        { subcategory_name: "Outdoor Tools", categoryId: 8 },
        //Automotive
        { subcategory_name: "Exterior Accessories", categoryId: 9 },
        { subcategory_name: "Interior Accessories", categoryId: 9 },
        { subcategory_name: "Car Care", categoryId: 9 },
        { subcategory_name: "Wheels & Tires", categoryId: 9 },
        { subcategory_name: "Electronics & Gadgets", categoryId: 9 },
        { subcategory_name: "Fluids & Chemicals", categoryId: 9 },
        { subcategory_name: "Auto Parts", categoryId: 9 },
        { subcategory_name: "Tools & Equipment", categoryId: 9 },
        //Digital Media
        { subcategory_name: "Best Sellers", categoryId: 10 },
        { subcategory_name: "Genre Spotlight", categoryId: 10 },
        { subcategory_name: "Learning & Development", categoryId: 10 },
        { subcategory_name: "Kids & Family Favorites", categoryId: 10 },
        { subcategory_name: "Celebrity Narrations", categoryId: 10 },
        //Outdoor, Fun and Sports
        { subcategory_name: "Cycling", categoryId: 11 },
        { subcategory_name: "Camping Supplies", categoryId: 11 },
        { subcategory_name: "Climbing Gear", categoryId: 11 },
        { subcategory_name: "Outdoor & Recreation", categoryId: 11 },
        { subcategory_name: "Outdoor Sports", categoryId: 11 },
        { subcategory_name: "Survival & Navigation", categoryId: 11 },
        { subcategory_name: "Gym Tools & Equipment", categoryId: 11 },
        //Home, Pets and Appliances
        { subcategory_name: "Bath", categoryId: 12 },
        { subcategory_name: "Bedding", categoryId: 12 },
        { subcategory_name: "Furniture", categoryId: 12 },
        { subcategory_name: "Home Appliance", categoryId: 12 },
        { subcategory_name: "Home Decor", categoryId: 12 },
        { subcategory_name: "Kitchen & Dining", categoryId: 12 },
        { subcategory_name: "Pet Shop", categoryId: 12 },
      ]);
    })
    .then(function () {
      return knex("products").insert([
        // Electronics - Mobile Phones
        {
          product_name: "iPhone",
          product_description: "Latest model",
          product_price: "1000",
          subcategoryId: 1,
        },
        {
          product_name: "Samsung Galaxy",
          product_description: "Flagship smartphone",
          product_price: "900",
          subcategoryId: 1,
        },
        {
          product_name: "Google Pixel",
          product_description: "Premium Android device",
          product_price: "800",
          subcategoryId: 1,
        },
        {
          product_name: "OnePlus",
          product_description: "High-performance phone",
          product_price: "700",
          subcategoryId: 1,
        },
        {
          product_name: "Xiaomi Redmi",
          product_description: "Budget-friendly option",
          product_price: "400",
          subcategoryId: 1,
        },

        // Electronics - Laptops
        {
          product_name: "MacBook Pro",
          product_description: "High performance laptop",
          product_price: "1500",
          subcategoryId: 4,
        },
        {
          product_name: "Dell XPS",
          product_description: "Premium Windows laptop",
          product_price: "1200",
          subcategoryId: 4,
        },
        {
          product_name: "HP Spectre",
          product_description: "Thin and light ultrabook",
          product_price: "1000",
          subcategoryId: 4,
        },
        {
          product_name: "Lenovo ThinkPad",
          product_description: "Business-class laptop",
          product_price: "900",
          subcategoryId: 4,
        },
        {
          product_name: "Asus ZenBook",
          product_description: "Sleek and stylish design",
          product_price: "1100",
          subcategoryId: 4,
        },

        // Clothing - T-shirts
        {
          product_name: "Plain White Tee",
          product_description: "Classic wardrobe staple",
          product_price: "20",
          subcategoryId: 3,
        },
        {
          product_name: "Graphic Print T-shirt",
          product_description: "Expressive design",
          product_price: "25",
          subcategoryId: 3,
        },
        {
          product_name: "Striped Polo",
          product_description: "Casual yet stylish",
          product_price: "30",
          subcategoryId: 3,
        },
        {
          product_name: "V-neck Tee",
          product_description: "Versatile neckline",
          product_price: "22",
          subcategoryId: 3,
        },
        {
          product_name: "Long Sleeve Henley",
          product_description: "Comfortable and trendy",
          product_price: "28",
          subcategoryId: 3,
        },

        // Clothing - Jeans
        {
          product_name: "Slim Fit Jeans",
          product_description: "Stretchable denim jeans",
          product_price: "50",
          subcategoryId: 3,
        },
        {
          product_name: "Skinny Jeans",
          product_description: "Trendy and form-fitting",
          product_price: "45",
          subcategoryId: 3,
        },
        {
          product_name: "Straight Leg Jeans",
          product_description: "Classic style",
          product_price: "55",
          subcategoryId: 3,
        },
        {
          product_name: "Bootcut Jeans",
          product_description: "Flared at the bottom",
          product_price: "48",
          subcategoryId: 3,
        },
        {
          product_name: "Distressed Jeans",
          product_description: "Rugged and worn-in look",
          product_price: "60",
          subcategoryId: 3,
        },

        // Books - Fiction
        {
          product_name: "To Kill a Mockingbird - Digital",
          product_description: "Classic novel",
          product_price: "15",
          subcategoryId: 10,
        },
        {
          product_name: "1984 - Digital",
          product_description: "Dystopian fiction",
          product_price: "12",
          subcategoryId: 10,
        },
        {
          product_name: "The Great Gatsby - Digital",
          product_description: "Jazz Age masterpiece",
          product_price: "14",
          subcategoryId: 10,
        },
        {
          product_name: "Pride and Prejudice - Digital",
          product_description: "Romantic classic",
          product_price: "13",
          subcategoryId: 10,
        },
        {
          product_name: "The Catcher in the Rye - Digital",
          product_description: "Coming-of-age novel",
          product_price: "16",
          subcategoryId: 10,
        },

        // Books - Non-fiction
        {
          product_name: "Sapiens: A Brief History of Humankind - Digital",
          product_description: "Bestselling non-fiction book",
          product_price: "20",
          subcategoryId: 10,
        },
        {
          product_name: "The Subtle Art of Not Giving a F*ck - Digital",
          product_description: "Self-help guide",
          product_price: "18",
          subcategoryId: 10,
        },
        {
          product_name: "Educated - Digital",
          product_description: "Memoir",
          product_price: "17",
          subcategoryId: 10,
        },
        {
          product_name: "Becoming - Digital",
          product_description: "Michelle Obama's autobiography",
          product_price: "25",
          subcategoryId: 10,
        },
        {
          product_name: "The Power of Habit - Digital",
          product_description: "Exploring the science of habit formation",
          product_price: "19",
          subcategoryId: 10,
        },
      ]);
    });
};
