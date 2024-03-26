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
        // Men's Fashion - Men's Clothing
        { product_name: "Slim Fit Cotton Shirt", product_description: "High-quality cotton shirt with a slim fit design, perfect for both casual and formal occasions.", product_price: "45", categoryId: 2, subcategoryId: 7 },
        { product_name: "Classic Denim Jeans", product_description: "Durable and stylish denim jeans, ideal for everyday wear.", product_price: "60", categoryId: 2, subcategoryId: 7 },
        { product_name: "Graphic Tee", product_description: "Soft, comfortable tee with a unique graphic design.", product_price: "25", categoryId: 2, subcategoryId: 7 },
        { product_name: "Chino Pants", product_description: "Versatile chino pants with a modern slim fit, suitable for office or leisure.", product_price: "50", categoryId: 2, subcategoryId: 7 },
        { product_name: "Polo Shirt", product_description: "Classic polo shirt with moisture-wicking fabric, perfect for a smart-casual look.", product_price: "35", categoryId: 2, subcategoryId: 7 },
        { product_name: "Henley Shirt", product_description: "Casual Henley shirt made from soft, breathable fabric.", product_price: "40", categoryId: 2, subcategoryId: 7 },
        { product_name: "Cashmere Sweater", product_description: "Luxurious cashmere sweater that offers warmth and comfort.", product_price: "120", categoryId: 2, subcategoryId: 7 },
        { product_name: "Track Jacket", product_description: "Lightweight track jacket, ideal for workouts or casual outings.", product_price: "55", categoryId: 2, subcategoryId: 7 },
        { product_name: "Cargo Shorts", product_description: "Relaxed cargo shorts with multiple pockets for practicality.", product_price: "35", categoryId: 2, subcategoryId: 7 },
        { product_name: "Leather Belt", product_description: "Genuine leather belt with a classic buckle, an essential accessory for any wardrobe.", product_price: "30", categoryId: 2, subcategoryId: 7 },


        // Men's Fashion - Men's Bags
        { product_name: "Leather Messenger Bag", product_description: "Premium leather messenger bag with multiple compartments, perfect for professionals.", product_price: "150", categoryId: 2, subcategoryId: 8 },
{ product_name: "Travel Backpack", product_description: "Durable backpack with ample space, designed for travelers.", product_price: "70", categoryId: 2, subcategoryId: 8 },
{ product_name: "Slim Laptop Case", product_description: "Sleek and slim laptop case for protection and style.", product_price: "45", categoryId: 2, subcategoryId: 8 },
{ product_name: "Sports Duffel Bag", product_description: "Spacious duffel bag with specialized compartments for gym-goers.", product_price: "60", categoryId: 2, subcategoryId: 8 },
{ product_name: "Canvas Tote", product_description: "Eco-friendly canvas tote, perfect for casual use or grocery shopping.", product_price: "25", categoryId: 2, subcategoryId: 8 },
{ product_name: "Utility Pouch", product_description: "Compact and versatile utility pouch for organizing small items.", product_price: "20", categoryId: 2, subcategoryId: 8 },
{ product_name: "Classic Briefcase", product_description: "Elegant and functional briefcase, ideal for business professionals.", product_price: "130", categoryId: 2, subcategoryId: 8 },
{ product_name: "Outdoor Waist Pack", product_description: "Convenient waist pack for outdoor activities and quick access to essentials.", product_price: "30", categoryId: 2, subcategoryId: 8 },
{ product_name: "Leather Wallet", product_description: "Slim leather wallet with RFID blocking technology.", product_price: "40", categoryId: 2, subcategoryId: 8 },
{ product_name: "Travel Organizer", product_description: "Travel organizer for keeping passports, tickets, and cards secure.", product_price: "35", categoryId: 2, subcategoryId: 8 },


        // Men's Fashion - Men's Shoes
        { product_name: "Running Sneakers", product_description: "Lightweight and breathable sneakers designed for running and everyday wear.", product_price: "80", categoryId: 2, subcategoryId: 9 },
{ product_name: "Leather Dress Shoes", product_description: "Elegant leather dress shoes, perfect for formal occasions.", product_price: "100", categoryId: 2, subcategoryId: 9 },
{ product_name: "Casual Loafers", product_description: "Comfortable loafers with a versatile design for casual outings.", product_price: "65", categoryId: 2, subcategoryId: 9 },
{ product_name: "Hiking Boots", product_description: "Durable hiking boots with superior traction for outdoor adventures.", product_price: "110", categoryId: 2, subcategoryId: 9 },
{ product_name: "Canvas Sneakers", product_description: "Classic canvas sneakers, an essential for any casual wardrobe.", product_price: "50", categoryId: 2, subcategoryId: 9 },
{ product_name: "Flip-Flops", product_description: "Comfortable and durable flip-flops for beach or poolside.", product_price: "20", categoryId: 2, subcategoryId: 9 },
{ product_name: "Work Boots", product_description: "Sturdy work boots with reinforced protection for tough jobs.", product_price: "95", categoryId: 2, subcategoryId: 9 },
{ product_name: "Athletic Shoes", product_description: "Performance-oriented athletic shoes for various sports activities.", product_price: "85", categoryId: 2, subcategoryId: 9 },
{ product_name: "Leather Sandals", product_description: "Premium leather sandals combining comfort and style.", product_price: "55", categoryId: 2, subcategoryId: 9 },
{ product_name: "Formal Oxfords", product_description: "Sophisticated Oxfords with a polished finish for formal attire.", product_price: "90", categoryId: 2, subcategoryId: 9 },


        // Men's Fashion - Men's Jackets
        { product_name: "Leather Jacket", product_description: "Classic leather jacket with a timeless design, perfect for edgy looks.", product_price: "200", categoryId: 2, subcategoryId: 10 },
{ product_name: "Trench Coat", product_description: "Elegant trench coat for a sharp and sophisticated look.", product_price: "180", categoryId: 2, subcategoryId: 10 },
{ product_name: "Denim Jacket", product_description: "Casual denim jacket, a versatile layer for any outfit.", product_price: "70", categoryId: 2, subcategoryId: 10 },
{ product_name: "Bomber Jacket", product_description: "Stylish bomber jacket for a modern and sleek appearance.", product_price: "90", categoryId: 2, subcategoryId: 10 },
{ product_name: "Parka with Fur Hood", product_description: "Warm and cozy parka, equipped with a fur-lined hood for cold weather.", product_price: "160", categoryId: 2, subcategoryId: 10 },
  { product_name: "Windbreaker", product_description: "Lightweight windbreaker, perfect for transitional weather and outdoor activities.", product_price: "75", categoryId: 2, subcategoryId: 10 },
  { product_name: "Puffer Jacket", product_description: "Insulated puffer jacket designed to keep you warm in freezing temperatures.", product_price: "120", categoryId: 2, subcategoryId: 10 },
  { product_name: "Wool Overcoat", product_description: "Classy wool overcoat, an essential piece for winter formalwear.", product_price: "190", categoryId: 2, subcategoryId: 10 },
  { product_name: "Varsity Jacket", product_description: "Sporty varsity jacket with classic ribbed cuffs and collar.", product_price: "85", categoryId: 2, subcategoryId: 10 },
  { product_name: "Peacoat", product_description: "Double-breasted peacoat, offering a blend of style and warmth for the colder months.", product_price: "150", categoryId: 2, subcategoryId: 10 },

        // Men's Fashion - Men's Glasses
        { product_name: "Aviator Sunglasses", product_description: "Classic aviator sunglasses providing style and UV protection.", product_price: "50", categoryId: 2, subcategoryId: 11 },
{ product_name: "Leather Gloves", product_description: "Elegant leather gloves, perfect for keeping your hands warm in style.", product_price: "40", categoryId: 2, subcategoryId: 11 },
{ product_name: "Beanie", product_description: "Comfortable and soft beanie, ideal for keeping warm during winter.", product_price: "25", categoryId: 2, subcategoryId: 11 },
{ product_name: "Silk Tie", product_description: "Premium silk tie, an essential accessory for formal attire.", product_price: "35", categoryId: 2, subcategoryId: 11 },
{ product_name: "Cufflinks", product_description: "Stylish cufflinks to add a touch of elegance to any dress shirt.", product_price: "30", categoryId: 2, subcategoryId: 11 },
{ product_name: "Watch", product_description: "Sophisticated timepiece, combining functionality with style.", product_price: "150", categoryId: 2, subcategoryId: 11 },
{ product_name: "Wool Scarf", product_description: "Warm wool scarf, a must-have accessory for chilly days.", product_price: "45", categoryId: 2, subcategoryId: 11 },
{ product_name: "Baseball Cap", product_description: "Casual baseball cap with adjustable strap for a comfortable fit.", product_price: "20", categoryId: 2, subcategoryId: 11 },
{ product_name: "Leather Bracelet", product_description: "Trendy leather bracelet, adding a modern edge to any look.", product_price: "25", categoryId: 2, subcategoryId: 11 },
{ product_name: "Pocket Square", product_description: "Elegant pocket square to complement your suit and tie.", product_price: "15", categoryId: 2, subcategoryId: 11 },

        // Laptops
{
  product_name: "UltraBook Pro",
  product_description: "Sleek design with a 15-inch 4K display and 16GB RAM for professional use",
  product_price: "1200",
  categoryId: 4,
  subcategoryId: 21
},
{
  product_name: "GamerXtreme Laptop",
  product_description: "High-performance gaming laptop with RTX 3080 and 32GB RAM",
  product_price: "2500",
  categoryId: 4,
  subcategoryId: 21
},
{
  product_name: "PortaLight",
  product_description: "Ultra-portable 13-inch laptop with 10-hour battery life, perfect for on-the-go professionals",
  product_price: "900",
  categoryId: 4,
  subcategoryId: 21
},
{
  product_name: "CreatorZ Canvas",
  product_description: "Laptop designed for creators with a touchscreen, stylus support, and powerful graphics",
  product_price: "1800",
  categoryId: 4,
  subcategoryId: 21
},
{
  product_name: "StudyMate Laptop",
  product_description: "Affordable and durable laptop designed for students, with all essential software pre-installed",
  product_price: "500",
  categoryId: 4,
  subcategoryId: 21
},
{
  product_name: "BusinessElite Pro",
  product_description: "Enterprise-level laptop with secure biometric access and enhanced data protection features",
  product_price: "1500",
  categoryId: 4,
  subcategoryId: 21
},
{
  product_name: "FlexiFold 2-in-1",
  product_description: "Convertible laptop with a flexible hinge, can be used as a tablet, comes with a detachable keyboard",
  product_price: "1100",
  categoryId: 4,
  subcategoryId: 21
},
{
  product_name: "EcoFriendly Notebook",
  product_description: "Environmentally friendly laptop made from recycled materials, energy-efficient with a solar charging option",
  product_price: "800",
  categoryId: 4,
  subcategoryId: 21
},
{
  product_name: "UltraSecure Laptop",
  product_description: "Laptop with advanced security features including hardware encryption and a privacy screen",
  product_price: "1700",
  categoryId: 4,
  subcategoryId: 21
},
{
  product_name: "TechieTab Laptop",
  product_description: "Laptop with dual screens for multitasking, AI-powered performance optimization",
  product_price: "2200",
  categoryId: 4,
  subcategoryId: 21
},

// Desktops
{
  product_name: "PowerStation X",
  product_description: "High-end desktop with liquid cooling and overclocked CPU for extreme performance",
  product_price: "3000",
  categoryId: 4,
  subcategoryId: 22
},
{
  product_name: "CompactHome Office",
  product_description: "Space-saving desktop with integrated speakers and webcam, ideal for home offices",
  product_price: "800",
  categoryId: 4,
  subcategoryId: 22
},
{
  product_name: "GamerCore Tower",
  product_description: "Gaming desktop with customizable RGB lighting and top-tier graphics card",
  product_price: "2100",
  categoryId: 4,
  subcategoryId: 22
},
{
  product_name: "WorkFlex Station",
  product_description: "Modular desktop that can be upgraded easily, with tool-less access to internals",
  product_price: "950",
  categoryId: 4,
  subcategoryId: 22
},
{
  product_name: "EduTech Desktop",
  product_description: "Educational desktop with preloaded learning software and parental controls",
  product_price: "600",
  categoryId: 4,
  subcategoryId: 22
},
{
  product_name: "CreativePro Suite",
  product_description: "Desktop tailored for digital artists and video editors, with a wide-gamut monitor and high-fidelity audio",
  product_price: "2800",
  categoryId: 4,
  subcategoryId: 22
},
{
  product_name: "SilentOperator",
  product_description: "Whisper-quiet desktop with noise-dampening technology, suitable for audio production",
  product_price: "1400",
  categoryId: 4,
  subcategoryId: 22
},
{
  product_name: "NetGiant Server",
  product_description: "Powerful server for small businesses, with robust data management and security features",
  product_price: "4000",
  categoryId: 4,
  subcategoryId: 22
},
{
  product_name: "EcoTech GreenPC",
  product_description: "Energy-efficient desktop with low power consumption components and solar power backup",
  product_price: "1100",
  categoryId: 4,
  subcategoryId: 22
},
{
  product_name: "Visionary VR Desktop",
  product_description: "VR-ready desktop with high refresh rate monitor and VR headset bundle",
  product_price: "2200",
  categoryId: 4,
  subcategoryId: 22
},

// Computer Accessories
{
  product_name: "ErgoComfort Keyboard",
  product_description: "Ergonomic keyboard with customizable keys and wrist rest for comfort",
  product_price: "100",
  categoryId: 4,
  subcategoryId: 23
},
{
  product_name: "PrecisionPro Mouse",
  product_description: "High-precision mouse with adjustable DPI and programmable buttons for gamers",
  product_price: "70",
  categoryId: 4,
  subcategoryId: 23
},
{
  product_name: "UltraView Monitor",
  product_description: "32-inch 4K monitor with HDR support and minimal bezel for an immersive viewing experience",
  product_price: "400",
  categoryId: 4,
  subcategoryId: 23
},
{
  product_name: "HyperSound Speakers",
  product_description: "Bluetooth speakers with 360-degree sound and deep bass, water-resistant for outdoor use",
  product_price: "150",
  categoryId: 4,
  subcategoryId: 23
},
{
  product_name: "SpeedCharge Dock",
  product_description: "Universal docking station with fast-charging USB ports, HDMI, and Ethernet connectivity",
  product_price: "120",
  categoryId: 4,
  subcategoryId: 23
},
{
  product_name: "CrystalClear Webcam",
  product_description: "1080p webcam with autofocus and built-in microphone, perfect for video conferencing",
  product_price: "80",
  categoryId: 4,
  subcategoryId: 23
},
{
  product_name: "GigaBoost Wi-Fi Adapter",
  product_description: "High-speed USB Wi-Fi adapter with dual-band support and beamforming technology",
  product_price: "50",
  categoryId: 4,
  subcategoryId: 23
},{
  product_name: "TerraDrive External HDD",
  product_description: "Portable 2TB external hard drive with shock resistance and hardware encryption",
  product_price: "120",
  categoryId: 4,
  subcategoryId: 23
},
{
  product_name: "MultiPort USB Hub",
  product_description: "Sleek USB-C hub with multiple USB 3.0 ports, SD card reader, and HDMI output for connectivity expansion",
  product_price: "60",
  categoryId: 4,
  subcategoryId: 23
},
{
  product_name: "VirtualKeyboard Lite",
  product_description: "Laser projection keyboard for mobile devices and tablets, with gesture control",
  product_price: "90",
  categoryId: 4,
  subcategoryId: 23
},
{
  product_name: "SoundBarrier Headphones",
  product_description: "Noise-cancelling headphones with high-fidelity audio, comfortable over-ear design, and Bluetooth connectivity",
  product_price: "200",
  categoryId: 4,
  subcategoryId: 23
},

// Printers & Scanners
{
  product_name: "PrintMaster Pro",
  product_description: "All-in-one printer with high-speed printing, scanning, and copying, suitable for office use",
  product_price: "300",
  categoryId: 4,
  subcategoryId: 24
},
{
  product_name: "ScanSmart 360",
  product_description: "Compact document scanner with auto-feed and cloud integration for efficient digital archiving",
  product_price: "250",
  categoryId: 4,
  subcategoryId: 24
},
{
  product_name: "PhotoLab 4K",
  product_description: "Professional-grade photo printer with 4K resolution and wide color gamut for stunning prints",
  product_price: "600",
  categoryId: 4,
  subcategoryId: 24
},
{
  product_name: "EcoPrint Green",
  product_description: "Eco-friendly printer using sustainable ink and recycled paper, with low power consumption",
  product_price: "220",
  categoryId: 4,
  subcategoryId: 24
},
{
  product_name: "LabelCraft Creator",
  product_description: "High-speed label printer with customizable templates for business and personal use",
  product_price: "150",
  categoryId: 4,
  subcategoryId: 24
},
{
  product_name: "ArchiveXpert",
  product_description: "High-resolution scanner for documents and books, with OCR technology for text recognition",
  product_price: "350",
  categoryId: 4,
  subcategoryId: 24
},
{
  product_name: "WirelessPrint Go",
  product_description: "Portable wireless printer for on-the-go printing from smartphones and laptops",
  product_price: "180",
  categoryId: 4,
  subcategoryId: 24
},
{
  product_name: "ColorSplash 3D",
  product_description: "3D printer with multi-color printing capability, user-friendly interface, and high precision",
  product_price: "1200",
  categoryId: 4,
  subcategoryId: 24
},
{
  product_name: "DocuScan Plus",
  product_description: "Advanced scanner with fast duplex scanning, suitable for high-volume office environments",
  product_price: "400",
  categoryId: 4,
  subcategoryId: 24
},
{
  product_name: "CraftMaker Vinyl Cutter",
  product_description: "Vinyl cutter and plotter for DIY crafts and professional design work, with precision cutting",
  product_price: "700",
  categoryId: 4,
  subcategoryId: 24
},

// Networking
{
  product_name: "UltraNet Mesh",
  product_description: "Mesh Wi-Fi system for whole-home coverage, easy setup, and seamless roaming",
  product_price: "350",
  categoryId: 4,
  subcategoryId: 25
},
{
  product_name: "GigaRouter X10",
  product_description: "High-speed wireless router with advanced security features and parental controls",
  product_price: "250",
  categoryId: 4,
  subcategoryId: 25
},
{
  product_name: "LinkMaster Switch",
  product_description: "Gigabit Ethernet switch with 8 ports for high-speed wired network expansion",
  product_price: "100",
  categoryId: 4,
  subcategoryId: 25
},
{
  product_name: "SignalBooster Pro",
  product_description: "Wi-Fi range extender with dual-band support and easy plug-and-play setup",
  product_price: "80",
  categoryId: 4,
  subcategoryId: 25
},
{
  product_name: "NetGuard Firewall",
  product_description: "Hardware firewall device for network security, with VPN support and intrusion detection",
  product_price: "400",
  categoryId: 4,
  subcategoryId: 25
},
{
  product_name: "StreamLine VPN",
  product_description: "VPN router for secure and private internet access, with support for multiple devices",
  product_price: "180",
  categoryId: 4,
  subcategoryId: 25
},
{
  product_name: "CloudConnect Gateway",
  product_description: "Unified gateway device for seamless integration of wired and wireless networks with cloud management",
  product_price: "320",
  categoryId: 4,
  subcategoryId: 25
},
{
  product_name: "QuantumAccess Point",
  product_description: "Wi-Fi access point with quantum encryption for ultra-secure wireless connections",
  product_price: "500",
  categoryId: 4,
  subcategoryId: 25
},
{
  product_name: "DataStream NAS",
  product_description: "Network-attached storage with easy data sharing and backup solutions for small businesses",
  product_price: "600",
  categoryId: 4,
  subcategoryId: 25
},
{
  product_name: "FiberFast Modem",
  product_description: "DOCSIS 3.1 cable modem for ultra-high-speed internet access over fiber optic lines",
  product_price: "150",
  categoryId: 4,
  subcategoryId: 25
},

// Organization & Storage
{
  product_name: "StackNest File Organizer",
  product_description: "Modular file organizer system for efficient document storage and quick access",
  product_price: "45",
  categoryId: 4,
  subcategoryId: 26
},
{
  product_name: "CableWrap Ties",
  product_description: "Reusable cable ties for organizing and managing cords and cables, with adjustable design",
  product_price: "10",
  categoryId: 4,
  subcategoryId: 26
},
{
  product_name: "SafeKeep Storage Box",
  product_description: "Durable storage boxes with stackable design and label slots for office and home organization",
  product_price: "20",
  categoryId: 4,
  subcategoryId: 26
},
{
  product_name: "DeskMate Organizer",
  product_description: "Desktop organizer with compartments for pens, notepads, and small accessories, keeping your workspace tidy",
  product_price: "30",
  categoryId: 4,
  subcategoryId: 26
},
{
  product_name: "ArchiveVault Filing Cabinet",
  product_description: "Secure filing cabinet with lockable drawersfor confidential documents, featuring fire-resistant construction",
  product_price: "250",
  categoryId: 4,
  subcategoryId: 26
  },
  {
  product_name: "ClipStack Board",
  product_description: "Magnetic clipboard system for easy document display and organization, perfect for meeting rooms",
  product_price: "35",
  categoryId: 4,
  subcategoryId: 26
  },
  {
  product_name: "BookBuddy Shelf Divider",
  product_description: "Adjustable shelf dividers for organizing books, binders, and manuals in a customizable layout",
  product_price: "15",
  categoryId: 4,
  subcategoryId: 26
  },
  {
  product_name: "TechTray Drawer Organizer",
  product_description: "Multi-compartment drawer organizer for tech gadgets, cables, and office supplies",
  product_price: "25",
  categoryId: 4,
  subcategoryId: 26
  },
  {
  product_name: "RollAway Mobile Cart",
  product_description: "Versatile mobile cart with adjustable shelves for storage and transport of office equipment and supplies",
  product_price: "120",
  categoryId: 4,
  subcategoryId: 26
  },
  {
  product_name: "LockTight Security Safe",
  product_description: "Compact digital safe for secure storage of valuables and sensitive documents, with tamper alerts",
  product_price: "180",
  categoryId: 4,
  subcategoryId: 26
  },
  
  // Office Supplies
  {
  product_name: "EcoWrite Recycled Pens",
  product_description: "Environmentally friendly ballpoint pens made from recycled materials, with smooth ink flow",
  product_price: "12",
  categoryId: 4,
  subcategoryId: 27
  },
  {
  product_name: "PrintPerfect Paper Reams",
  product_description: "High-quality printer paper, optimized for jam-free printing and vibrant colors",
  product_price: "30",
  categoryId: 4,
  subcategoryId: 27
  },
  {
  product_name: "GripTight Binder Clips",
  product_description: "Strong and durable binder clips for securing large stacks of documents, with easy-release handles",
  product_price: "5",
  categoryId: 4,
  subcategoryId: 27
  },
  {
  product_name: "NoteNest Sticky Notes",
  product_description: "Super sticky notes in a variety of colors for notes and reminders, easily repositionable",
  product_price: "8",
  categoryId: 4,
  subcategoryId: 27
  },
  {
  product_name: "MarkIt Permanent Markers",
  product_description: "Set of permanent markers with fade-resistant ink, suitable for all surfaces",
  product_price: "10",
  categoryId: 4,
  subcategoryId: 27
  },
  {
  product_name: "ClearView Presentation Covers",
  product_description: "Transparent presentation covers for professional-looking reports and proposals, compatible with all binding machines",
  product_price: "20",
  categoryId: 4,
  subcategoryId: 27
  },
  {
  product_name: "SmoothErase Whiteboard Erasers",
  product_description: "Non-abrasive whiteboard erasers for clean and easy erasing, with ergonomic design",
  product_price: "7",
  categoryId: 4,
  subcategoryId: 27
  },
  {
  product_name: "TackIt Push Pins",
  product_description: "Assorted color push pins for bulletin boards and noticeboards, in a convenient storage case",
  product_price: "4",
  categoryId: 4,
  subcategoryId: 27
  },
  {
  product_name: "FlexiRuler Flexible Rulers",
  product_description: "Durable and flexible rulers that can bend without breaking, with clear measurement markings",
  product_price: "6",
  categoryId: 4,
  subcategoryId: 27
  },
  {
  product_name: "ClipEase Paperclips",
  product_description: "Smooth, corrosion-resistant paperclips that glide on and off easily, in assorted sizes",
  product_price: "3",
  categoryId: 4,
  subcategoryId: 27
  },
  
  // Office Security
  {
  product_name: "GuardianEye Surveillance Cam",
  product_description: "High-definition surveillance camera with night vision and motion detection for office security",
  product_price: "150",
  categoryId: 4,
  subcategoryId: 28
  },
  {
  product_name: "SecureEntry Access System",
  product_description: "Advanced access control system with biometric and card entry options for secure office entry",
  product_price: "500",
  categoryId: 4,
  subcategoryId: 28
  },
  {
  product_name: "AlarmShield Wireless Alarm",
  product_description: "Wireless office alarm system with remote monitoring and control via smartphone app",
  product_price: "250",
  categoryId: 4,
  subcategoryId: 28
  },
  {
  product_name: "DataGuard VPN Router",
  product_description: "Secure office network router with built-in VPN and firewall to protect sensitive data",
  product_price: "200",
  categoryId: 4,
  subcategoryId: 28
  },
  {
  product_name: "WatchTower Security Sensors",
  product_description: "Pack of wireless security sensors for doors and windows, with instant alerts to breaches",
  product_price: "100",
  categoryId: 4,
  subcategoryId: 28
  },
  {
  product_name: "SafeDoc Shredder",
  product_description: "Heavy-duty paper shredder for secure disposal of sensitive documents, with cross-cut shredding",
  product_price: "120",
  categoryId: 4,
  subcategoryId: 28
  },
  {
  product_name: "KeyCard Proximity Cards",
  product_description: "Proximity cards for secure access control systems, with customizable security levels",
  product_price: "60",
  categoryId: 4,
  subcategoryId: 28
  },
  {
  product_name: "IntruderAlert Motion Detector",
  product_description: "Motion detector with pet immunity for office spaces, providing accurate intruder detection",
  product_price: "80",
  categoryId: 4,
  subcategoryId: 28
  },
  {
  product_name: "CyberSecure Firewall Appliance",
  product_description: "Enterprise-grade firewall appliance for protecting office networks from cyber threats",
  product_price: "400",
  categoryId: 4,
  subcategoryId: 28
  },
  {
  product_name: "LockMaster Security Safe",
  product_description: "High-security safe with biometric lock for storing valuable items and documents in the office",
  product_price: "300",
  categoryId: 4,
  subcategoryId: 28
  },
  
  // Smart Locks and Accessories
  {
  product_name: "SmartKey Touch Lock",
  product_description: "Smart door lock with fingerprint recognition and smartphone control for convenient access",
  product_price: "250",
  categoryId: 4,
  subcategoryId: 29
  },
  {
  product_name: "DoorSense Wi-Fi Deadbolt",
  product_description: "Wi-Fi enabled smart deadbolt with remote locking/unlocking and activity monitoring",
  product_price: "200",
  categoryId: 4,
  subcategoryId: 29
  },
  {
  product_name: "EntryGuard Smart Handle",
  product_description: "Smart door handle with touch-to-open technology and encrypted security",
  product_price: "180",categoryId: 4,
  subcategoryId: 29
  },
  {
  product_name: "GateKeeper Bluetooth Padlock",
  product_description: "Bluetooth enabled padlock with tamper alerts and history log, ideal for securing office cabinets",
  product_price: "70",
  categoryId: 4,
  subcategoryId: 29
  },
  {
  product_name: "ConnectHub Smart Hub",
  product_description: "Central hub for connecting and managing all your smart locks and security devices in one place",
  product_price: "120",
  categoryId: 4,
  subcategoryId: 29
  },
  {
  product_name: "SecureLink Doorbell Camera",
  product_description: "Video doorbell with 1080p HD camera, two-way audio, and motion detection for enhanced entrance security",
  product_price: "160",
  categoryId: 4,
  subcategoryId: 29
  },
  {
  product_name: "AccessMate Keyless Entry",
  product_description: "Keyless entry system with customizable access codes and temporary guest codes",
  product_price: "190",
  categoryId: 4,
  subcategoryId: 29
  },
  {
  product_name: "SmartShield Window Lock",
  product_description: "Smart window lock with remote control and breach detection for enhanced perimeter security",
  product_price: "150",
  categoryId: 4,
  subcategoryId: 29
  },
  {
  product_name: "LockSync Smart Intercom",
  product_description: "Smart intercom system with video calling, digital keys, and remote access for office buildings",
  product_price: "300",
  categoryId: 4,
  subcategoryId: 29
  },
  {
  product_name: "VisionLock Facial Recognition",
  product_description: "Advanced facial recognition door lock for secure and convenient keyless access",
  product_price: "350",
  categoryId: 4,
  subcategoryId: 29
  }
      ]);
    });
};
