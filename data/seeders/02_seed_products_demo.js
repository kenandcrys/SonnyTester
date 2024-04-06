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
                {
                    category_name: "Phones & Accessories",
                    image: { url: "electronics_image_url" },
                },
                {
                    category_name: "Women",
                    image: { url: "clothing_image_url" },
                },
                { category_name: "Men", image: { url: "books_image_url" } },
                {
                    category_name: "Computer, Office & Security",
                    image: { url: "books_image_url" },
                },
                {
                    category_name: "Electronics",
                    image: { url: "books_image_url" },
                },
                { category_name: "Jewelry", image: { url: "books_image_url" } },
                {
                    category_name: "Kids & Toys",
                    image: { url: "books_image_url" },
                },
                {
                    category_name: "Tools & Home Improvement",
                    image: { url: "books_image_url" },
                },
                {
                    category_name: "Automotive",
                    image: { url: "books_image_url" },
                },
                {
                    category_name: "Digital Media",
                    image: { url: "books_image_url" },
                },
                {
                    category_name: "Outdoor, Fun & Sports",
                    image: { url: "books_image_url" },
                },
                {
                    category_name: "Home, Pets & Appliances",
                    image: { url: "books_image_url" },
                },
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
                {
                    subcategory_name: "Smart Locks and Accessories",
                    categoryId: 4,
                },
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
                {
                    subcategory_name: "Lightbulbs, Fixtures & Fans",
                    categoryId: 8,
                },
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
            const chunkSize = 7; // Adjust as needed
            // Create chunks of data to insert
            const chunkedData = [];
            for (let i = 0; i < data.length; i += chunkSize) {
                chunkedData.push(
                    knex("products").insert(data.slice(i, i + chunkSize))
                );
            }
            return Promise.all(chunkedData)
                .then(() => {
                    console.log("Batch insert completed successfully.");
                })
                .catch((error) => {
                    console.error("Error performing batch insert:", error);
                });
        });
};

let data = [
    // Bluetooth Speakers
  {
    product_name: "SoundWave Mini",
    product_description: "Compact Bluetooth speaker offering vibrant sound and deep bass.",
    product_price: "45",
    subcategoryId: 1
  },
  {
    product_name: "AquaTunes Waterproof Speaker",
    product_description: "Waterproof Bluetooth speaker for all your adventures, rain or shine.",
    product_price: "60",
    subcategoryId: 1
  },
  {
    product_name: "BoomBox Retro",
    product_description: "Retro-style Bluetooth speaker with modern sound quality.",
    product_price: "75",
    subcategoryId: 1
  },
  {
    product_name: "PocketBlast Ultra",
    product_description: "Ultra-portable speaker with powerful sound and a durable exterior.",
    product_price: "50",
    subcategoryId: 1
  },
  {
    product_name: "BassKing LX",
    product_description: "Bluetooth speaker with exceptional bass and 24-hour battery life.",
    product_price: "85",
    subcategoryId: 1
  },
  {
    product_name: "EchoSphere 360",
    product_description: "360-degree sound experience in a sleek, sophisticated design.",
    product_price: "120",
    subcategoryId: 1
  },
  {
    product_name: "NightBeat LED",
    product_description: "Bluetooth speaker with LED lights that sync to your music.",
    product_price: "65",
    subcategoryId: 1
  },
  {
    product_name: "HarmonyHub Mini",
    product_description: "Compact speaker with smart hub capabilities and premium sound.",
    product_price: "80",
    subcategoryId: 1
  },
  {
    product_name: "SonicPulse Gen2",
    product_description: "Next-gen Bluetooth speaker with touch controls and immersive sound.",
    product_price: "70",
    subcategoryId: 1
  },

  // Wireless Earphones
  {
    product_name: "AirTunes Pro",
    product_description: "High-fidelity wireless earphones with noise cancellation.",
    product_price: "150",
    subcategoryId: 1
  },
  {
    roduct_name: "BeatSync Sport",
    product_description: "Sweatproof wireless earphones designed for athletes.",
    product_price: "130",
    subcategoryId: 1
  },
  {
    product_name: "ClearSound Air",
    product_description: "Wireless earphones with crystal-clear sound and comfortable fit.",
    product_price: "110",
    subcategoryId: 1
  },
  {
    product_name: "EchoBuds Lite",
    product_description: "Lightweight earphones with dynamic sound and voice assistant support.",
    product_price: "99",
    subcategoryId: 1
  },
  {
    product_name: "SonicSeal Active",
    product_description: "Wireless earphones with secure fit and waterproof design.",
    product_price: "140",
    subcategoryId: 1
  },
  {
    product_name: "VibeTones Studio",
    product_description: "Studio-quality sound in wireless earphones with long battery life.",
    product_price: "165",
    subcategoryId: 1
  },
  {
    product_name: "RhythmX Plus",
    product_description: "Enhanced bass and clarity with these premium wireless earphones.",
    product_price: "175",
    subcategoryId: 1
  },
  {
    product_name: "MelodyMate TrueWireless",
    product_description: "True wireless earphones offering seamless connectivity and rich audio.",
    product_price: "200",
    subcategoryId: 1
  },
  {
    product_name: "HarmonyAir X2",
    product_description: "Ergonomic wireless earphones with adaptive sound technology.",
    product_price: "160",
    subcategoryId: 1
  },

  // Phone Case
  {
    product_name: "UltraArmor Case",
    product_description: "Heavy-duty protection in a slim profile for your smartphone.",
    product_price: "40",
    subcategoryId: 1
  },
  {
    product_name: "CrystalClear Shell",
    product_description: "Show off your phone's design with this transparent, protective case.",
    product_price: "25",
    subcategoryId: 1
  },
  {
    product_name: "EcoGuard Bamboo Case",
    product_description: "Eco-friendly phone case made from sustainable bamboo.",
    product_price: "50",
    subcategoryId: 1
  },
  {
    product_name: "PocketShield Pro",
    product_description: "Premium phone case with built-in wallet features for convenience.",
    product_price: "55",
    subcategoryId: 1
  },
  {
    product_name: "FlexFit Gel Case",
    product_description: "Soft, flexible case for shock absorption and easy grip.",
    product_price: "20",
    subcategoryId: 1
  },
  {
    product_name: "ArtSeries Decor Case",
    product_description: "Turn your phone into a masterpiece with these artistically designed cases.",
    product_price: "30",
    subcategoryId: 1
  },
  {
    product_name: "StealthCover Privacy Case",
    product_description: "Phone case with a built-in privacy screen protector.",
    product_price: "45",
    subcategoryId: 1
  },
  {
    product_name: "CoolTech Thermal Case",
    product_description: "Regulate your phone's temperature with this innovative case design.",
    product_price: "60",
    subcategoryId: 1
  },
  {
    product_name: "GlamShell Sparkle Case",
    product_description: "Add some sparkle and protection to your phone with this glamorous case.",
    product_price: "35",
    subcategoryId: 1
  },

  //Laptops
  {
    product_name: "UltraBook Pro",
    product_description: "Sleek design with a 15-inch 4K display and 16GB RAM for professional use",
    product_price: "1200",
    subcategoryId: 21
  },
  {
    product_name: "GamerXtreme Laptop",
    product_description: "High-performance gaming laptop with RTX 3080 and 32GB RAM",
    product_price: "2500",
    subcategoryId: 21
  },
  {
    product_name: "PortaLight",
    product_description: "Ultra-portable 13-inch laptop with 10-hour battery life, perfect for on-the-go professionals",
    product_price: "900",
    subcategoryId: 21
  },
  {
    product_name: "CreatorZ Canvas",
    product_description: "Laptop designed for creators with a touchscreen, stylus support, and powerful graphics",
    product_price: "1800",
    subcategoryId: 21
  },
  {
    product_name: "StudyMate Laptop",
    product_description: "Affordable and durable laptop designed for students, with all essential software pre-installed",
    product_price: "500",
    subcategoryId: 21
  },
  {
    product_name: "BusinessElite Pro",
    product_description: "Enterprise-level laptop with secure biometric access and enhanced data protection features",
    product_price: "1500",
    subcategoryId: 21
  },
  {
    product_name: "FlexiFold 2-in-1",
    product_description: "Convertible laptop with a flexible hinge, can be used as a tablet, comes with a detachable keyboard",
    product_price: "1100",
    subcategoryId: 21
  },
  {
    product_name: "EcoFriendly Notebook",
    product_description: "Environmentally friendly laptop made from recycled materials, energy-efficient with a solar charging option",
    product_price: "800",
    subcategoryId: 21
  },
  {
    product_name: "UltraSecure Laptop",
    product_description: "Laptop with advanced security features including hardware encryption and a privacy screen",
    product_price: "1700",
    subcategoryId: 21
  },
  {
    product_name: "TechieTab Laptop",
    product_description: "Laptop with dual screens for multitasking, AI-powered performance optimization",
    product_price: "2200",
    subcategoryId: 21
  },

  // Desktops
  {
    product_name: "PowerStation X",
    product_description: "High-end desktop with liquid cooling and overclocked CPU for extreme performance",
    product_price: "3000",
    subcategoryId: 22
  },
  {
    product_name: "CompactHome Office",
    product_description: "Space-saving desktop with integrated speakers and webcam, ideal for home offices",
    product_price: "800",
    subcategoryId: 22
  },
  {
    product_name: "GamerCore Tower",
    product_description: "Gaming desktop with customizable RGB lighting and top-tier graphics card",
    product_price: "2100",
    subcategoryId: 22
  },
  {
    product_name: "WorkFlex Station",
    product_description: "Modular desktop that can be upgraded easily, with tool-less access to internals",
    product_price: "950",
    subcategoryId: 22
  },
  {
    product_name: "EduTech Desktop",
    product_description: "Educational desktop with preloaded learning software and parental controls",
    product_price: "600",
    subcategoryId: 22
  },
  {
    product_name: "CreativePro Suite",
    product_description: "Desktop tailored for digital artists and video editors, with a wide-gamut monitor and high-fidelity audio",
    product_price: "2800",
    subcategoryId: 22
  },
  {
    product_name: "SilentOperator",
    product_description: "Whisper-quiet desktop with noise-dampening technology, suitable for audio production",
    product_price: "1400",
    subcategoryId: 22
  },
  {
    product_name: "NetGiant Server",
    product_description: "Powerful server for small businesses, with robust data management and security features",
    product_price: "4000",
    subcategoryId: 22
  },
  {
    product_name: "EcoTech GreenPC",
    product_description: "Energy-efficient desktop with low power consumption components and solar power backup",
    product_price: "1100",
    subcategoryId: 22
  },
  {
    product_name: "Visionary VR Desktop",
    product_description: "VR-ready desktop with high refresh rate monitor and VR headset bundle",
    product_price: "2200",
    subcategoryId: 22
  },

  // Computer Accessories
  {
    product_name: "ErgoComfort Keyboard",
    product_description: "Ergonomic keyboard with customizable keys and wrist rest for comfort",
    product_price: "100",
    subcategoryId: 23
  },
  {
    product_name: "PrecisionPro Mouse",
    product_description: "High-precision mouse with adjustable DPI and programmable buttons for gamers",
    product_price: "70",
    subcategoryId: 23
  },
  {
    product_name: "UltraView Monitor",
    product_description: "32-inch 4K monitor with HDR support and minimal bezel for an immersive viewing experience",
    product_price: "400",
    subcategoryId: 23
  },
  {
    product_name: "HyperSound Speakers",
    product_description: "Bluetooth speakers with 360-degree sound and deep bass, water-resistant for outdoor use",
    product_price: "150",
    subcategoryId: 23
  },
  {
    product_name: "SpeedCharge Dock",
    product_description: "Universal docking station with fast-charging USB ports, HDMI, and Ethernet connectivity",
    product_price: "120",
    subcategoryId: 23
  },
  {
    product_name: "CrystalClear Webcam",
    product_description: "1080p webcam with autofocus and built-in microphone, perfect for video conferencing",
    product_price: "80",
    subcategoryId: 23
  },
  {
    product_name: "GigaBoost Wi-Fi Adapter",
    product_description: "High-speed USB Wi-Fi adapter with dual-band support and beamforming technology",
    product_price: "50",
    subcategoryId: 23
  }, {
    product_name: "TerraDrive External HDD",
    product_description: "Portable 2TB external hard drive with shock resistance and hardware encryption",
    product_price: "120",
    subcategoryId: 23
  },
  {
    product_name: "MultiPort USB Hub",
    product_description: "Sleek USB-C hub with multiple USB 3.0 ports, SD card reader, and HDMI output for connectivity expansion",
    product_price: "60",
    subcategoryId: 23
  },
  {
    product_name: "VirtualKeyboard Lite",
    product_description: "Laser projection keyboard for mobile devices and tablets, with gesture control",
    product_price: "90",
    subcategoryId: 23
  },
  {
    product_name: "SoundBarrier Headphones",
    product_description: "Noise-cancelling headphones with high-fidelity audio, comfortable over-ear design, and Bluetooth connectivity",
    product_price: "200",
    subcategoryId: 23
  },

  // Printers & Scanners
  {
    product_name: "PrintMaster Pro",
    product_description: "All-in-one printer with high-speed printing, scanning, and copying, suitable for office use",
    product_price: "300",
    subcategoryId: 24
  },
  {
    product_name: "ScanSmart 360",
    product_description: "Compact document scanner with auto-feed and cloud integration for efficient digital archiving",
    product_price: "250",
    subcategoryId: 24
  },
  {
    product_name: "PhotoLab 4K",
    product_description: "Professional-grade photo printer with 4K resolution and wide color gamut for stunning prints",
    product_price: "600",
    subcategoryId: 24
  },
  {
    product_name: "EcoPrint Green",
    product_description: "Eco-friendly printer using sustainable ink and recycled paper, with low power consumption",
    product_price: "220",
    subcategoryId: 24
  },
  {
    product_name: "LabelCraft Creator",
    product_description: "High-speed label printer with customizable templates for business and personal use",
    product_price: "150",
    subcategoryId: 24
  },
  {
    product_name: "ArchiveXpert",
    product_description: "High-resolution scanner for documents and books, with OCR technology for text recognition",
    product_price: "350",
    subcategoryId: 24
  },
  {
    product_name: "WirelessPrint Go",
    product_description: "Portable wireless printer for on-the-go printing from smartphones and laptops",
    product_price: "180",
    subcategoryId: 24
  },
  {
    product_name: "ColorSplash 3D",
    product_description: "3D printer with multi-color printing capability, user-friendly interface, and high precision",
    product_price: "1200",
    subcategoryId: 24
  },
  {
    product_name: "DocuScan Plus",
    product_description: "Advanced scanner with fast duplex scanning, suitable for high-volume office environments",
    product_price: "400",
    subcategoryId: 24
  },
  {
    product_name: "CraftMaker Vinyl Cutter",
    product_description: "Vinyl cutter and plotter for DIY crafts and professional design work, with precision cutting",
    product_price: "700",
    subcategoryId: 24
  },

  // Networking
  {
    product_name: "UltraNet Mesh",
    product_description: "Mesh Wi-Fi system for whole-home coverage, easy setup, and seamless roaming",
    product_price: "350",
    subcategoryId: 25
  },
  {
    product_name: "GigaRouter X10",
    product_description: "High-speed wireless router with advanced security features and parental controls",
    product_price: "250",
    subcategoryId: 25
  },
  {
    product_name: "LinkMaster Switch",
    product_description: "Gigabit Ethernet switch with 8 ports for high-speed wired network expansion",
    product_price: "100",
    subcategoryId: 25
  },
  {
    product_name: "SignalBooster Pro",
    product_description: "Wi-Fi range extender with dual-band support and easy plug-and-play setup",
    product_price: "80",
    subcategoryId: 25
  },
  {
    product_name: "NetGuard Firewall",
    product_description: "Hardware firewall device for network security, with VPN support and intrusion detection",
    product_price: "400",
    subcategoryId: 25
  },
  {
    product_name: "StreamLine VPN",
    product_description: "VPN router for secure and private internet access, with support for multiple devices",
    product_price: "180",
    subcategoryId: 25
  },
  {
    product_name: "CloudConnect Gateway",
    product_description: "Unified gateway device for seamless integration of wired and wireless networks with cloud management",
    product_price: "320",
    subcategoryId: 25
  },
  {
    product_name: "QuantumAccess Point",
    product_description: "Wi-Fi access point with quantum encryption for ultra-secure wireless connections",
    product_price: "500",
    subcategoryId: 25
  },
  {
    product_name: "DataStream NAS",
    product_description: "Network-attached storage with easy data sharing and backup solutions for small businesses",
    product_price: "600",
    subcategoryId: 25
  },
  {
    product_name: "FiberFast Modem",
    product_description: "DOCSIS 3.1 cable modem for ultra-high-speed internet access over fiber optic lines",
    product_price: "150",
    subcategoryId: 25
  },

  // Organization & Storage
  {
    product_name: "StackNest File Organizer",
    product_description: "Modular file organizer system for efficient document storage and quick access",
    product_price: "45",
    subcategoryId: 26
  },
  {
    product_name: "CableWrap Ties",
    product_description: "Reusable cable ties for organizing and managing cords and cables, with adjustable design",
    product_price: "10",
    subcategoryId: 26
  },
  {
    product_name: "SafeKeep Storage Box",
    product_description: "Durable storage boxes with stackable design and label slots for office and home organization",
    product_price: "20",
    subcategoryId: 26
  },
  {
    product_name: "DeskMate Organizer",
    product_description: "Desktop organizer with compartments for pens, notepads, and small accessories, keeping your workspace tidy",
    product_price: "30",
    subcategoryId: 26
  },
  {
    product_name: "ArchiveVault Filing Cabinet",
    product_description: "Secure filing cabinet with lockable drawersfor confidential documents, featuring fire-resistant construction",
    product_price: "250",
    subcategoryId: 26
  },
  {
    product_name: "ClipStack Board",
    product_description: "Magnetic clipboard system for easy document display and organization, perfect for meeting rooms",
    product_price: "35",
    subcategoryId: 26
  },
  {
    product_name: "BookBuddy Shelf Divider",
    product_description: "Adjustable shelf dividers for organizing books, binders, and manuals in a customizable layout",
    product_price: "15",
    subcategoryId: 26
  },
  {
    product_name: "TechTray Drawer Organizer",
    product_description: "Multi-compartment drawer organizer for tech gadgets, cables, and office supplies",
    product_price: "25",
    subcategoryId: 26
  },
  {
    product_name: "RollAway Mobile Cart",
    product_description: "Versatile mobile cart with adjustable shelves for storage and transport of office equipment and supplies",
    product_price: "120",
    subcategoryId: 26
  },
  {
    product_name: "LockTight Security Safe",
    product_description: "Compact digital safe for secure storage of valuables and sensitive documents, with tamper alerts",
    product_price: "180",
    subcategoryId: 26
  },

  // Office Supplies
  {
    product_name: "EcoWrite Recycled Pens",
    product_description: "Environmentally friendly ballpoint pens made from recycled materials, with smooth ink flow",
    product_price: "12",
    subcategoryId: 27
  },
  {
    product_name: "PrintPerfect Paper Reams",
    product_description: "High-quality printer paper, optimized for jam-free printing and vibrant colors",
    product_price: "30",
    subcategoryId: 27
  },
  {
    product_name: "GripTight Binder Clips",
    product_description: "Strong and durable binder clips for securing large stacks of documents, with easy-release handles",
    product_price: "5",
    subcategoryId: 27
  },
  {
    product_name: "NoteNest Sticky Notes",
    product_description: "Super sticky notes in a variety of colors for notes and reminders, easily repositionable",
    product_price: "8",
    subcategoryId: 27
  },
  {
    product_name: "MarkIt Permanent Markers",
    product_description: "Set of permanent markers with fade-resistant ink, suitable for all surfaces",
    product_price: "10",
    subcategoryId: 27
  },
  {
    product_name: "ClearView Presentation Covers",
    product_description: "Transparent presentation covers for professional-looking reports and proposals, compatible with all binding machines",
    product_price: "20",
    subcategoryId: 27
  },
  {
    product_name: "SmoothErase Whiteboard Erasers",
    product_description: "Non-abrasive whiteboard erasers for clean and easy erasing, with ergonomic design",
    product_price: "7",
    subcategoryId: 27
  },
  {
    product_name: "TackIt Push Pins",
    product_description: "Assorted color push pins for bulletin boards and noticeboards, in a convenient storage case",
    product_price: "4",
    subcategoryId: 27
  },
  {
    product_name: "FlexiRuler Flexible Rulers",
    product_description: "Durable and flexible rulers that can bend without breaking, with clear measurement markings",
    product_price: "6",
    subcategoryId: 27
  },
  {
    product_name: "ClipEase Paperclips",
    product_description: "Smooth, corrosion-resistant paperclips that glide on and off easily, in assorted sizes",
    product_price: "3",
    subcategoryId: 27
  },

  // Office Security
  {
    product_name: "GuardianEye Surveillance Cam",
    product_description: "High-definition surveillance camera with night vision and motion detection for office security",
    product_price: "150",
    subcategoryId: 28
  },
  {
    product_name: "SecureEntry Access System",
    product_description: "Advanced access control system with biometric and card entry options for secure office entry",
    product_price: "500",
    subcategoryId: 28
  },
  {
    product_name: "AlarmShield Wireless Alarm",
    product_description: "Wireless office alarm system with remote monitoring and control via smartphone app",
    product_price: "250",
    subcategoryId: 28
  },
  {
    product_name: "DataGuard VPN Router",
    product_description: "Secure office network router with built-in VPN and firewall to protect sensitive data",
    product_price: "200",
    subcategoryId: 28
  },
  {
    product_name: "WatchTower Security Sensors",
    product_description: "Pack of wireless security sensors for doors and windows, with instant alerts to breaches",
    product_price: "100",
    subcategoryId: 28
  },
  {
    product_name: "SafeDoc Shredder",
    product_description: "Heavy-duty paper shredder for secure disposal of sensitive documents, with cross-cut shredding",
    product_price: "120",
    subcategoryId: 28
  },
  {
    product_name: "KeyCard Proximity Cards",
    product_description: "Proximity cards for secure access control systems, with customizable security levels",
    product_price: "60",
    subcategoryId: 28
  },
  {
    product_name: "IntruderAlert Motion Detector",
    product_description: "Motion detector with pet immunity for office spaces, providing accurate intruder detection",
    product_price: "80",
    subcategoryId: 28
  },
  {
    product_name: "CyberSecure Firewall Appliance",
    product_description: "Enterprise-grade firewall appliance for protecting office networks from cyber threats",
    product_price: "400",
    subcategoryId: 28
  },
  {
    product_name: "LockMaster Security Safe",
    product_description: "High-security safe with biometric lock for storing valuable items and documents in the office",
    product_price: "300",
    subcategoryId: 28
  },

  // Smart Locks and Accessories
  {
    product_name: "SmartKey Touch Lock",
    product_description: "Smart door lock with fingerprint recognition and smartphone control for convenient access",
    product_price: "250",
    subcategoryId: 29
  },
  {
    product_name: "DoorSense Wi-Fi Deadbolt",
    product_description: "Wi-Fi enabled smart deadbolt with remote locking/unlocking and activity monitoring",
    product_price: "200",
    subcategoryId: 29
  },
  {
    product_name: "EntryGuard Smart Handle",
    product_description: "Smart door handle with touch-to-open technology and encrypted security",
    product_price: "180",
    subcategoryId: 29
  },
  {
    product_name: "GateKeeper Bluetooth Padlock",
    product_description: "Bluetooth enabled padlock with tamper alerts and history log, ideal for securing office cabinets",
    product_price: "70",
    subcategoryId: 29
  },
  {
    product_name: "ConnectHub Smart Hub",
    product_description: "Central hub for connecting and managing all your smart locks and security devices in one place",
    product_price: "120",
    subcategoryId: 29
  },
  {
    product_name: "SecureLink Doorbell Camera",
    product_description: "Video doorbell with 1080p HD camera, two-way audio, and motion detection for enhanced entrance security",
    product_price: "160",
    subcategoryId: 29
  },
  {
    product_name: "AccessMate Keyless Entry",
    product_description: "Keyless entry system with customizable access codes and temporary guest codes",
    product_price: "190",
    subcategoryId: 29
  },
  {
    product_name: "SmartShield Window Lock",
    product_description: "Smart window lock with remote control and breach detection for enhanced perimeter security",
    product_price: "150",
    subcategoryId: 29
  },
  {
    product_name: "LockSync Smart Intercom",
    product_description: "Smart intercom system with video calling, digital keys, and remote access for office buildings",
    product_price: "300",
    subcategoryId: 29
  },
  {
    product_name: "VisionLock Facial Recognition",
    product_description: "Advanced facial recognition door lock for secure and convenient keyless access",
    product_price: "350",
    subcategoryId: 29
  },

  // Phones and Accessories SubcategoryId: 1, Name: Bluetooth Speakers
  {
    product_name: "TuneWave",
    product_description: "Portable Bluetooth speaker with deep bass and 360-degree sound",
    product_price: "120",
    subcategoryId: 1
  },
  {
    product_name: "AquaBeat",
    product_description: "Waterproof Bluetooth speaker for outdoor adventures",
    product_price: "150",
    subcategoryId: 1
  },
  {
    product_name: "PocketBoom",
    product_description: "Compact and lightweight Bluetooth speaker with powerful sound",
    product_price: "80",
    subcategoryId: 1
  },
  {
    product_name: "BassPulse",
    product_description: "High-fidelity Bluetooth speaker with dynamic bass technology",
    product_price: "200",
    subcategoryId: 1
  },
  {
    product_name: "SoundSphere",
    product_description: "Elegant Bluetooth speaker with surround sound and multi-room capabilities",
    product_price: "250",
    subcategoryId: 1
  },
  {
    product_name: "HarmonyLink",
    product_description: "Bluetooth speaker with voice assistant integration and smart home control",
    product_price: "220",
    subcategoryId: 1
  },
  {
    product_name: "RhythmX",
    product_description: "Stylish Bluetooth speaker with customizable LED lighting and touch controls",
    product_price: "180",
    subcategoryId: 1
  },
  {
    product_name: "VibeTrek",
    product_description: "Rugged Bluetooth speaker designed for extreme outdoor use",
    product_price: "160",
    subcategoryId: 1
  },
  {
    product_name: "EchoStream",
    product_description: "Smart Bluetooth speaker with integrated streaming services",
    product_price: "210",
    subcategoryId: 1
  },
  {
    product_name: "SonicCloud",
    product_description: "Bluetooth speaker with cloud-based music storage and playback",
    product_price: "190",
    subcategoryId: 1
  },
  // S, Name: Chargers and Cables
  {
    product_name: "PowerPort",
    product_description: "Fast-charging portable charger with dual USB ports",
    product_price: "30",
    subcategoryId: 2
  },
  {
    product_name: "CableFlex",
    product_description: "Durable, tangle-free charging cable with lifetime warranty",
    product_price: "15",
    subcategoryId: 2
  },
  {
    product_name: "ChargeMate",
    product_description: "Compact wireless charging pad with quick-charge capabilities",
    product_price: "40",
    subcategoryId: 2
  },
  {
    product_name: "VoltStream",
    product_description: "Universal charger kit with multiple adapters for all your devices",
    product_price: "50",
    subcategoryId: 2
  },
  {
    product_name: "CablePro",
    product_description: "High-speed USB-C cable for fast data transfer and charging",
    product_price: "20",
    subcategoryId: 2
  },
  {
    product_name: "EnergyHub",
    product_description: "6-port USB charging station for simultaneous device charging",
    product_price: "60",
    subcategoryId: 2
  },
  {
    product_name: "TravelCharge",
    product_description: "Travel-friendly charger with built-in adapters for international use",
    product_price: "35",
    subcategoryId: 2
  },
  {
    product_name: "MagneticWire",
    product_description: "Magnetic charging cable with interchangeable connectors",
    product_price: "25",
    subcategoryId: 2
  },
  {
    product_name: "SolarJuice",
    product_description: "Eco-friendly solar-powered charger for outdoor enthusiasts",
    product_price: "45",
    subcategoryId: 2
  },
  {
    product_name: "FlexiCharge",
    product_description: "Flexible charging cable with 360-degree rotation for easy use",
    product_price: "18",
    subcategoryId: 2
  },
  // SubcategoryId: 3, Name: Earphones
  {
    product_name: "SoundBuds",
    product_description: "Wireless earphones with crystal clear sound and noise cancellation",
    product_price: "70",
    subcategoryId: 3
  },
  {
    product_name: "AudioFit",
    product_description: "Sports earphones with secure fit and water resistance for active users",
    product_price: "80",
    subcategoryId: 3
  },
  {
    product_name: "MelodyPro",
    product_description: "Professional-grade in-ear monitors for musicians and audiophiles",
    product_price: "250",
    subcategoryId: 3
  },
  {
    product_name: "BassTunes",
    product_description: "Earphones with enhanced bass for an immersive listening experience",
    product_price: "90",
    subcategoryId: 3
  },
  {
    product_name: "EcoSounds",
    product_description: "Eco-friendly earphones made from sustainable materials",
    product_price: "60",
    subcategoryId: 3
  },
  {
    product_name: "ClearVoice",
    product_description: "Earphones with built-in microphone for crystal clear phone calls",
    product_price: "50",
    subcategoryId: 3
  },
  {
    product_name: "AudioLink",
    product_description: "Bluetooth earphones with seamless device switching",
    product_price: "85",
    subcategoryId: 3
  },
  {
    product_name: "TunePods",
    product_description: "True wireless earphones with intuitive touch controls",
    product_price: "100",
    subcategoryId: 3
  },
  {
    product_name: "BeatX",
    product_description: "Stylish earphones with customizable sound profiles",
    product_price: "95",
    subcategoryId: 3
  },
  {
    product_name: "VoiceClarity",
    product_description: "Earphones with advanced noise reduction for calls in noisy environments",
    product_price: "110",
    subcategoryId: 3
  },
  // SubcategoryId: 4, Name: Phone Cases
  {
    product_name: "FlexiCase",
    product_description: "Durable and flexible phone case with shock absorption",
    product_price: "25",
    subcategoryId: 4
  },
  {
    product_name: "ArmorShell",
    product_description: "Heavy-duty phone case for maximum protection against drops and scratches",
    product_price: "35",
    subcategoryId: 4
  },
  {
    product_name: "ClearView",
    product_description: "Transparent phone case with scratch-resistant coating for minimalistic style",
    product_price: "20",
    subcategoryId: 4
  },
  {
    product_name: "EcoGuard",
    product_description: "Eco-friendly phone case made from biodegradable materials",
    product_price: "30",
    subcategoryId: 4
  },
  {
    product_name: "SlimFit",
    product_description: "Ultra-thin phone case for a sleek profile without sacrificing protection",
    product_price: "22",
    subcategoryId: 4
  },
  {
    product_name: "GripCase",
    product_description: "Ergonomic phone case with enhanced grip for comfortable handling",
    product_price: "28",
    subcategoryId: 4
  },
  {
    product_name: "ArtCover",
    product_description: "Designer phone cases with unique artwork from various artists",
    product_price: "40",
    subcategoryId: 4
  },
  {
    product_name: "WalletCase",
    product_description: "Convenient phone case with built-in wallet for cards and cash",
    product_price: "32",
    subcategoryId: 4
  },
  {
    product_name: "MirrorCase",
    product_description: "Phone case with a built-in mirror for quick touch-ups on the go",
    product_price: "27",
    subcategoryId: 4
  },
  {
    product_name: "CoolTech",
    product_description: "Phone case with built-in cooling technology for gaming phones",
    product_price: "45",
    subcategoryId: 4
  },
  {
    product_name: "AquaShield",
    product_description: "Waterproof phone case for underwater photography and protection",
    product_price: "50",
    subcategoryId: 4
  },
  // SubcategoryId: 5, Name: Smart Phones
  {
    product_name: "GalaxyS21",
    product_description: "Flagship smartphone with advanced camera system and immersive display",
    product_price: "999",
    subcategoryId: 5
  },
  {
    product_name: "Pixel 6",
    product_description: "Innovative smartphone with AI-powered photography and clean software",
    product_price: "899",
    subcategoryId: 5
  },
  {
    product_name: "iPhone 13",
    product_description: "The latest iPhone with A15 Bionic chip for lightning-fast performance",
    product_price: "1099",
    subcategoryId: 5
  },
  {
    product_name: "OnePlus 9",
    product_description: "High-performance smartphone with fast charging and smooth display",
    product_price: "729",
    subcategoryId: 5
  },
  {
    product_name: "Xiaomi Mi 11",
    product_description: "High-spec smartphone offering exceptional value with top-tier hardware",
    product_price: "749",
    subcategoryId: 5
  },
  {
    product_name: "Oppo Find X3",
    product_description: "Innovative smartphone with billion-color display and powerful processing",
    product_price: "999",
    subcategoryId: 5
  },
  {
    product_name: "Moto G100",
    product_description: "Budget-friendly smartphone with desktop mode for productivity",
    product_price: "599",
    subcategoryId: 5
  },
  {
    product_name: "Sony Xperia 1 III",
    product_description: "Smartphone with professional-grade photography and 4K HDR OLED display",
    product_price: "1299",
    subcategoryId: 5
  },
  {
    product_name: "Nokia 8.3",
    product_description: "Solid mid-range smartphone with Zeiss optics and 5G capability",
    product_price: "699",
    subcategoryId: 5
  },
  {
    product_name: "LG Velvet",
    product_description: "Stylish smartphone with Dual Screen accessory for multitasking",
    product_price: "649",
    subcategoryId: 5
  },
  // Sub Name: Smart Watches
  {
    product_name: "Apple Watch Series 7",
    product_description: "The latest smartwatch with larger display and enhanced durability",
    product_price: "399",
    subcategoryId: 6
  },
  {
    product_name: "Samsung Galaxy Watch 4",
    product_description: "Next-generation smartwatch with comprehensive health tracking",
    product_price: "249",
    subcategoryId: 6
  },
  {
    product_name: "Fitbit Versa 3",
    product_description: "Health & fitness smartwatch with GPS and heart rate monitoring",
    product_price: "229",
    subcategoryId: 6
  },
  {
    product_name: "Garmin Fenix 6",
    product_description: "Rugged smartwatch for outdoor adventures with multisport tracking",
    product_price: "599",
    subcategoryId: 6
  },
  {
    product_name: "TicWatch Pro 3",
    product_description: "Smartwatch with dual-layer display technology for extended battery life",
    product_price: "299",
    subcategoryId: 6
  },
  {
    product_name: "Fossil Gen 5",
    product_description: "Fashion-forward smartwatch with Wear OS and customizable dials",
    product_price: "295",
    subcategoryId: 6
  },
  {
    product_name: "Amazfit GTR 3",
    product_description: "Stylish smartwatch with comprehensive health and fitness features",
    product_price: "179",
    subcategoryId: 6
  },
  {
    product_name: "Huawei Watch GT 2",
    product_description: "Long-lasting smartwatch with professional workout modes",
    product_price: "210",
    subcategoryId: 6
  },
  {
    product_name: "Suunto 7",
    product_description: "Sports-centric smartwatch with Google Wear OS and offline maps",
    product_price: "499",
    subcategoryId: 6
  },
  {
    product_name: "Mobvoi TicWatch E3",
    product_description: "Cost-effective smartwatch with powerful performance and health tracking",
    product_price: "199",
    subcategoryId: 6
  },

  // Men's Fashion
  // Subcategory 7 - Men's Shirts
  {
    product_name: "Urban Edge Tee",
    product_description: "A soft, cotton blend T-shirt designed for everyday comfort and style, featuring a minimalist urban design.",
    product_price: "25",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 7
  },
  {
    product_name: "Classic Denim Jeans",
    product_description: "Premium quality denim tailored for a comfortable fit, perfect for casual outings and versatile styling.",
    product_price: "60",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 7
  },
  {
    product_name: "Sleek Chinos",
    product_description: "Slim-fit chinos crafted from lightweight, breathable fabric, ideal for both office and leisure.",
    product_price: "45",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 7
  },
  {
    product_name: "Vintage Henley Shirt",
    product_description: "Soft, pre-washed Henley shirt with a vintage feel, bringing classic style to your wardrobe.",
    product_price: "35",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 7
  },
  {
    product_name: "Active Flex Shorts",
    product_description: "Athletic shorts with flexible fabric for maximum movement, equipped with moisture-wicking technology.",
    product_price: "30",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 7
  },
  {
    product_name: "Signature Polo",
    product_description: "Elegant and versatile polo shirt made from premium, breathable pique cotton, suitable for various occasions.",
    product_price: "40",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 7
  },
  {
    product_name: "Graphic Sweatshirt",
    product_description: "Comfortable, cotton-blend sweatshirt with a bold graphic design, perfect for a relaxed, stylish look.",
    product_price: "50",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 7
  },
  {
    product_name: "Linen Button-Up Shirt",
    product_description: "Lightweight, airy linen shirt with a relaxed fit, ideal for warm weather and beachside outings.",
    product_price: "55",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 7
  },
  {
    product_name: "Cargo Tactical Pants",
    product_description: "Durable, multi-pocket cargo pants designed for functionality and rugged use, with a modern tactical look.",
    product_price: "70",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 7
  },
  {
    product_name: "Performance Joggers",
    product_description: "Soft, stretchy joggers with a tailored fit, designed for both athletic activities and casual wear.",
    product_price: "40",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 7
  },

  //Subcategory 8 - Men's Bags

  {
    product_name: "Urban Commuter Backpack",
    product_description: "Durable, water-resistant backpack with multiple compartments, designed for the urban commuter.",
    product_price: "80",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 8
  },
  {
    product_name: "Classic Leather Briefcase",
    product_description: "Elegant, full-grain leather briefcase with spacious compartments, perfect for the professional on the move.",
    product_price: "150",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 8
  },
  {
    product_name: "Travel Duffel Bag",
    product_description: "High-capacity, sturdy duffel bag made for travelers, with dedicated pockets for organized packing.",
    product_price: "90",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 8
  },
  {
    product_name: "Minimalist Cardholder",
    product_description: "Slim, efficient cardholder crafted from premium leather, designed to hold essentials in a minimal space.",
    product_price: "25",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 8
  },
  {
    product_name: "Adventure Hiking Pack",
    product_description: "Robust backpack with ergonomic design, built to withstand the rigors of hiking and outdoor adventures.",
    product_price: "120",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 8
  },
  {
    product_name: "Tactical Messenger Bag",
    product_description: "Versatile messenger bag with modular compartments, tailored for tactical use and everyday carry.",
    product_price: "75",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 8
  },
  {
    product_name: "Vintage Canvas Satchel",
    product_description: "Retro-inspired canvas satchel with leather accents, offering a timeless look and ample storage.",
    product_price: "65",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 8
  },
  {
    product_name: "Compact Travel Kit",
    product_description: "Essential travel kit bag with smart organization features, designed to keep your toiletries in check.",
    product_price: "35",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 8
  },
  {
    product_name: "Executive Laptop Sleeve",
    product_description: "Sleek, protective laptop sleeve with a luxurious feel, ensuring your tech is safe in style.",
    product_price: "50",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 8
  },
  {
    product_name: "Crossbody Utility Pouch",
    product_description: "Convenient, lightweight pouch for essentials, with an adjustable strap for crossbody wear.",
    product_price: "30",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 8
  },
  
  //Subcategory 9 - Men's Shoes
  {
    product_name: "Classic Leather Oxfords",
    product_description: "Timelessly styled leather Oxfords, handcrafted for elegance and durability.",
    product_price: "120",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 9
  },
  {
    product_name: "Performance Running Sneakers",
    product_description: "High-tech running shoes with advanced cushioning and support, designed for peak athletic performance.",
    product_price: "100",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 9
  },
  {
    product_name: "Casual Canvas Slip-Ons",
    product_description: "Lightweight, breathable canvas slip-ons, perfect for relaxed weekend wear.",
    product_price: "50",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 9
  },
  {
    product_name: "Rugged Hiking Boots",
    product_description: "Durable, waterproof hiking boots built to tackle any terrain and keep your feet protected.",
    product_price: "140",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 9
  },
  {
    product_name: "Suede Desert Boots",
    product_description: "Stylish, versatile desert boots in soft suede, ideal for casual outings and smart-casual looks.",
    product_price: "90",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 9
  },
  {
    product_name: "Urban Sneakers",
    product_description: "Trendy sneakers with a sleek design and comfortable fit, suitable for everyday urban adventures.",
    product_price: "80",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 9
  },
  {
    product_name: "Leather Loafers",
    product_description: "Elegant loafers crafted from premium leather, offering a blend of comfort and sophistication.",
    product_price: "110",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 9
  },
  {
    product_name: "Athletic Training Shoes",
    product_description: "Versatile training shoes engineered for a variety of workouts, providing stability and support.",
    product_price: "85",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 9
  },
  {
    product_name: "Beach Flip-Flops",
    product_description: "Comfortable, durable flip-flops designed for beachwear and relaxed summer days.",
    product_price: "20",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 9
  },
  {
    product_name: "Formal Dress Shoes",
    product_description: "Sophisticated dress shoes with a glossy finish, perfect for formal events and business settings.",
    product_price: "130",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 9
  },

  //Subcategory 10 - Men's Jackets and Coats
  {
    product_name: "Classic Trench Coat",
    product_description: "Iconic, weather-resistant trench coat with a timeless design, providing both style and function.",
    product_price: "200",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 10
  },
  {
    product_name: "Leather Biker Jacket",
    product_description: "Edgy, genuine leather biker jacket, featuring durable construction and classic styling.",
    product_price: "250",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 10
  },
  {
    product_name: "Utility Field Jacket",
    product_description: "Versatile field jacket with multiple pockets, ideal for outdoor activities and casual wear.",
    product_price: "150",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 10
  },
  {
    product_name: "Down Puffer Jacket",
    product_description: "Warm, lightweight puffer jacket filled with quality down, designed for cold weather comfort.",
    product_price: "180",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 10
  },
  {
    product_name: "Wool Peacoat",
    product_description: "Classic double-breasted peacoat in fine wool, offering warmth and sophistication for the winter season.",
    product_price: "220",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 10
  },
  {
    product_name: "Denim Trucker Jacket",
    product_description: "Casual, rugged denim jacket with a vintage wash, a staple piece for any wardrobe.",
    product_price: "90",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 10
  },
  {
    product_name: "Windbreaker Jacket",
    product_description: "Lightweight, water-repellent windbreaker, perfect for transitional weather and outdoor activities.",
    product_price: "70",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 10
  },
  {
    product_name: "Softshell Tactical Jacket",
    product_description: "High-performance softshell jacket designed for tactical use, offering durability and flexibility.",
    product_price: "160",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 10
  },
  {
    product_name: "Varsity Bomber Jacket",
    product_description: "Stylish bomber jacket with a varsity design, combining comfort with a sporty aesthetic.",
    product_price: "110",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 10
  },
  {
    product_name: "Quilted Vest",
    product_description: "Sleek, insulated vest with a quilted design, perfect for layering in cooler weather.",
    product_price: "60",
    product_images: ["put url here", "put url here", "put url here"],
    subcategoryId: 10
  },

  //Subcategory 11 - Men's Accessories
  {
    product_name: "Classic Aviator Sunglasses",
    product_description: "Timeless aviator sunglasses with UV protection, combining style with functionality.",
    product_price: "90",
    product_images: ["https://images.unsplash.com/photo-1567101293231-51d2bd439398?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1567473810954-507d59716c25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D", 
    "https://images.unsplash.com/photo-1566388448476-0c4249e47be5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"],
    subcategoryId: 11
  },
  {
    product_name: "Leather Belt",
    product_description: "Durable, genuine leather belt with a sleek, modern buckle, essential for any outfit.",
    product_price: "35",
    product_images: ["https://images.unsplash.com/photo-1664286021284-e921c76ac1a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D", 
    "https://images.unsplash.com/photo-1664286022075-8e997e95bd17?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1664285612706-b32633c95820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"],
    subcategoryId: 11
  },
  {
    product_name: "Minimalist Watch",
    product_description: "Elegant watch with a minimalist design, featuring a stainless steel case and leather strap.",
    product_price: "120",
    product_images: ["https://images.unsplash.com/photo-1607298786129-cea6ce0d5788?q=80&w=2562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1607299008952-7179a3f826f7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1579174786776-a488cbc8ec5c?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    subcategoryId: 11
  },
  {
    product_name: "Beanie Hat",
    product_description: "Soft, knit beanie hat for warmth and style during the colder months.",
    product_price: "20",
    product_images: ["https://images.unsplash.com/photo-1618354691792-d1d42acfd860?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1612887726773-e64e20cf08fe?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    subcategoryId: 11
  },
  {
    product_name: "Silk Necktie",
    product_description: "Premium silk necktie available in various colors, perfect for formal occasions and office wear.",
    product_price: "50",
    product_images: ["https://images.unsplash.com/photo-1598032895468-e81825029202?q=80&w=2191&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?q=80&w=2381&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1593030089683-a9841767a610?q=80&w=2380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    subcategoryId: 11
  },
  {
    product_name: "Cufflinks Set",
    product_description: "Elegant cufflinks set, adding a touch of sophistication to any formal shirt.",
    product_price: "40",
    product_images: ["https://images.unsplash.com/photo-1647574633530-05ecfb3fdb4f?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1647574633297-ff7f1a3f733d?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1647574633357-75c67e723689?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    subcategoryId: 11
  },
  {
    product_name: "Leather Wallet",
    product_description: "Compact, high-quality leather wallet with multiple card slots and a secure coin pocket.",
    product_price: "55",
    product_images: ["https://plus.unsplash.com/premium_photo-1681589453747-53fd893fa420?q=80&w=2369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1637168943285-a8f9ea0dc3f5?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1620109176813-e91290f6c795?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    subcategoryId: 11
  },
  {
    product_name: "Sports Cap",
    product_description: "Adjustable sports cap made from breathable fabric, ideal for outdoor activities and casual wear.",
    product_price: "25",
    product_images: ["https://images.unsplash.com/photo-1622445275576-721325763afe?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1702604585541-2246510e8f07?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1702604865155-716b8d0a81b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"],
    subcategoryId: 11
  },
  {
    product_name: "Tactical Gloves",
    product_description: "Durable gloves designed for tactical use, offering protection and enhanced grip.",
    product_price: "45",
    product_images: ["https://images.unsplash.com/photo-1642075211546-7de99d235d21?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1645445490773-3ef25c148450?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1643701188137-b1e3f3135aa2?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    subcategoryId: 11
  },
  {
    product_name: "Scarf",
    product_description: "Luxurious, soft scarf made from fine materials, providing warmth and elegance.",
    product_price: "35",
    product_images: ["https://images.unsplash.com/photo-1484688493527-670f98f9b195?q=80&w=2647&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1457545195570-67f207084966?q=80&w=2392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1641642231157-0849081598a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"],
    subcategoryId: 11
  },
  

  // Women's Fashion Women's Tops - Subcategory ID: 12
  {
    product_name: "Silk Blouse",
    product_description: "Elegant silk blouse with button-up front and cuffed sleeves",
    product_price: "85",
    subcategoryId: 12
  },
  {
    product_name: "Casual Tee",
    product_description: "Soft cotton t-shirt in various colors, perfect for everyday wear",
    product_price: "25",
    subcategoryId: 12
  },
  {
    product_name: "Knit Sweater",
    product_description: "Cozy knit sweater with a relaxed fit, available in multiple colors",
    product_price: "60",
    subcategoryId: 12
  },
  {
    product_name: "Chiffon Top",
    product_description: "Light and airy chiffon top with a delicate floral print",
    product_price: "45",
    subcategoryId: 12
  },
  {
    product_name: "Wrap Blouse",
    product_description: "Versatile wrap blouse with a flattering v-neckline",
    product_price: "55",
    subcategoryId: 12
  },
  {
    product_name: "Crop Top",
    product_description: "Trendy crop top with a bold print and elastic hem",
    product_price: "30",
    subcategoryId: 12
  },
  {
    product_name: "Tunic Top",
    product_description: "Comfortable tunic top with a flowing silhouette, ideal for layering",
    product_price: "40",
    subcategoryId: 12
  },
  {
    product_name: "Lace Camisole",
    product_description: "Delicate lace camisole, perfect for layering or as a standalone piece",
    product_price: "35",
    subcategoryId: 12
  },
  {
    product_name: "Peplum Top",
    product_description: "Flattering peplum top with a cinched waist and ruffled hem",
    product_price: "50",
    subcategoryId: 12
  },
  {
    product_name: "Denim Shirt",
    product_description: "Classic denim shirt with snap buttons and chest pockets",
    product_price: "70",
    subcategoryId: 12
  },

  // Women's Bottoms - Subcategory ID: 13
  {
    product_name: "Skinny Jeans",
    product_description: "Stretchy skinny jeans with a flattering high waist",
    product_price: "65",
    subcategoryId: 13
  },
  {
    product_name: "Pleated Skirt",
    product_description: "Flowy pleated skirt with a comfortable elastic waistband",
    product_price: "45",
    subcategoryId: 13
  },
  {
    product_name: "Cropped Trousers",
    product_description: "Chic cropped trousers with a tapered fit, available in several colors",
    product_price: "55",
    subcategoryId: 13
  },
  {
    product_name: "Maxi Skirt",
    product_description: "Elegant maxi skirt with a side slit for added movement",
    product_price: "50",
    subcategoryId: 13
  },
  {
    product_name: "Leather Leggings",
    product_description: "Edgy leather leggings with a comfortable stretch fit",
    product_price: "80",
    subcategoryId: 13
  },
  {
    product_name: "Wide-Leg Pants",
    product_description: "Fashionable wide-leg pants with a high-rise waist",
    product_price: "70",
    subcategoryId: 13
  },
  {
    product_name: "Mini Skirt",
    product_description: "Playful mini skirt with a flared silhouette, perfect for summer days",
    product_price: "35",
    subcategoryId: 13
  },
  {
    product_name: "Cargo Pants",
    product_description: "Utility-inspired cargo pants with multiple pockets for functionality",
    product_price: "75",
    subcategoryId: 13
  },
  {
    product_name: "Biker Shorts",
    product_description: "Trendy biker shorts with a high waist and stretchy fabric",
    product_price: "25",
    subcategoryId: 13
  },
  {
    product_name: "Palazzo Pants",
    product_description: "Comfortable palazzo pants with a bold print and wide leg design",
    product_price: "60",
    subcategoryId: 13
  },

  // Women's Dresses - Subcategory ID: 14
  {
    product_name: "Cocktail Dress",
    product_description: "Sophisticated cocktail dress with lace detailing and a fitted silhouette",
    product_price: "120",
    subcategoryId: 14
  },
  {
    product_name: "Summer Sundress",
    product_description: "Lightweight sundress with a floral print, perfect for warm weather",
    product_price: "85",
    subcategoryId: 14
  },
  {
    product_name: "Bodycon Dress",
    product_description: "Figure-hugging bodycon dress with a sleek design for evening wear",
    product_price: "90",
    subcategoryId: 14
  },
  {
    product_name: "Maxi Dress",
    product_description: "Flowing maxi dress with a bohemian print and relaxed fit",
    product_price: "95",
    subcategoryId: 14
  },
  {
    product_name: "Shift Dress",
    product_description: "Classic shift dress with minimalist design, suitable for the office",
    product_price: "110",
    subcategoryId: 14
  },
  {
    product_name: "Wrap Dress",
    product_description: "Versatile wrap dress with a flattering v-neckline and tie waist",
    product_price: "100",
    subcategoryId: 14
  },
  {
    product_name: "Slip Dress",
    product_description: "Elegant slip dress with a satin finish, perfect for evening events",
    product_price: "130",
    subcategoryId: 14
  },
  {
    product_name: "Tea-Length Dress",
    product_description: "Retro-inspired tea-length dress with a full skirt and fitted bodice",
    product_price: "115",
    subcategoryId: 14
  },
  {
    product_name: "A-Line Dress",
    product_description: "Flattering A-line dress with a cinched waist and flared skirt",
    product_price: "105",
    subcategoryId: 14
  },
  {
    product_name: "Evening Gown",
    product_description: "Luxurious evening gown with sequin embellishments and elegant draping",
    product_price: "250",
    subcategoryId: 14
  },

  // Women's Jumpsuits - Subcategory ID: 15
  {
    product_name: "Culotte Jumpsuit",
    product_description: "Fashion-forward culotte jumpsuit with a tie waist and wide legs",
    product_price: "110",
    subcategoryId: 15
  },
  {
    product_name: "Denim Overalls",
    product_description: "Casual denim overalls with adjustable straps and a relaxed fit",
    product_price: "90",
    subcategoryId: 15
  },
  {
    product_name: "Sleeveless Romper",
    product_description: "Chic sleeveless romper with a cinched waist and button front", product_price: "75",
    subcategoryId: 15
  },
  {
    product_name: "Utility Jumpsuit",
    product_description: "Stylish utility jumpsuit with functional pockets and a belt",
    product_price: "130",
    subcategoryId: 15
  },
  {
    product_name: "Strapless Jumpsuit",
    product_description: "Elegant strapless jumpsuit with a fitted bodice and flowing pants",
    product_price: "140",
    subcategoryId: 15
  },
  {
    product_name: "Floral Playsuit",
    product_description: "Summery floral playsuit with ruffle details and a v-neckline",
    product_price: "80",
    subcategoryId: 15
  },
  {
    product_name: "Wide-Leg Jumpsuit",
    product_description: "Sophisticated wide-leg jumpsuit with a halter neck and open back",
    product_price: "125",
    subcategoryId: 15
  },
  {
    product_name: "Boiler Suit",
    product_description: "Trendy boiler suit with a zip front and elasticated waist",
    product_price: "115",
    subcategoryId: 15
  },
  {
    product_name: "Lace Romper",
    product_description: "Delicate lace romper with a lined bodice and sheer sleeves",
    product_price: "100",
    subcategoryId: 15
  },
  {
    product_name: "Belted Jumpsuit",
    product_description: "Classy belted jumpsuit with a tailored fit and cap sleeves",
    product_price: "120",
    subcategoryId: 15
  },

  // Women's Activewear - Subcategory ID: 16
  {
    product_name: "Yoga Pants",
    product_description: "High-waisted yoga pants with moisture-wicking fabric",
    product_price: "60",
    subcategoryId: 16
  },
  {
    product_name: "Sports Bra",
    product_description: "Supportive sports bra with a breathable mesh back",
    product_price: "45",
    subcategoryId: 16
  },
  {
    product_name: "Running Tank",
    product_description: "Lightweight running tank top with reflective details for safety",
    product_price: "35",
    subcategoryId: 16
  },
  {
    product_name: "Compression Leggings",
    product_description: "Performance compression leggings for enhanced muscle support",
    product_price: "70",
    subcategoryId: 16
  },
  {
    product_name: "Workout Shorts",
    product_description: "Comfortable workout shorts with a stretch waistband and inner lining",
    product_price: "30",
    subcategoryId: 16
  },
  {
    product_name: "Athletic Jacket",
    product_description: "Wind-resistant athletic jacket with a zip front and secure pockets",
    product_price: "85",
    subcategoryId: 16
  },
  {
    product_name: "Training Tights",
    product_description: "Versatile training tights with a high-rise fit and side pockets",
    product_price: "55",
    subcategoryId: 16
  },
  {
    product_name: "Performance Tee",
    product_description: "Quick-dry performance tee with ergonomic seams for comfort",
    product_price: "40",
    subcategoryId: 16
  },
  {
    product_name: "Cycling Shorts",
    product_description: "Padded cycling shorts for long-distance comfort and support",
    product_price: "50",
    subcategoryId: 16
  },
  {
    product_name: "Gym Hoodie",
    product_description: "Soft gym hoodie with a moisture-absorbing fabric and front pocket",
    product_price: "65",
    subcategoryId: 16
  },

  // Women's Swimwear - Subcategory ID: 17
  {
    product_name: "Bikini Set",
    product_description: "Trendy bikini set with a high-waisted bottom and bandeau top",
    product_price: "55",
    subcategoryId: 17
  },
  {
    product_name: "One-Piece Swimsuit",
    product_description: "Flattering one-piece swimsuit with a scoop back and vibrant print",
    product_price: "70",
    subcategoryId: 17
  },
  {
    product_name: "Tankini",
    product_description: "Comfortable tankini set with adjustable straps and matching bottoms",
    product_price: "60",
    subcategoryId: 17
  },
  {
    product_name: "Surf Suit",
    product_description: "Protective surf suit with UPF 50+ and long sleeves for sun protection",
    product_price: "90",
    subcategoryId: 17
  },
  {
    product_name: "High-Neck Swimsuit",
    product_description: "Elegant high-neck swimsuit with a mesh insert and keyhole back",
    product_price: "75",
    subcategoryId: 17
  },
  {
    product_name: "Swim Cover-Up",
    product_description: "Breezy swim cover-up with a lace design, perfect for the beach",
    product_price: "50",
    subcategoryId: 17
  },
  {
    product_name: "Rash Guard",
    product_description: "Stylish rash guard with long sleeves and a tropical print",
    product_price: "65",
    subcategoryId: 17
  },
  {
    product_name: "Swim Shorts",
    product_description: "Versatile swim shorts with a comfortable fit and quick-dry fabric",
    product_price: "40",
    subcategoryId: 17
  },
  {
    product_name: "Beach Sarong",
    product_description: "Lightweight beach sarong, ideal for versatile styling options",
    product_price: "35",
    subcategoryId: 17
  },
  {
    product_name: "Cutout Monokini",
    product_description: "Bold cutout monokini with side ties and a plunging neckline",
    product_price: "80",
    subcategoryId: 17
  },

  // Women's Bags - Subcategory ID: 18
  {
    product_name: "Tote Bag",
    product_description: "Spacious tote bag perfect for daily use with multiple compartments",
    product_price: "75",
    subcategoryId: 18
  },
  {
    product_name: "Crossbody Bag",
    product_description: "Chic crossbody bag with an adjustable strap and secure closure",
    product_price: "60",
    subcategoryId: 18
  },
  {
    product_name: "Clutch Purse",
    product_description: "Elegant clutch purse with a sleek design, ideal for evening wear",
    product_price: "45",
    subcategoryId: 18
  },
  {
    product_name: "Backpack",
    product_description: "Functional backpack with stylish details and ample storage",
    product_price: "80",
    subcategoryId: 18
  },
  {
    product_name: "Shoulder Bag",
    product_description: "Versatile shoulder bag with a comfortable strap and durable material",
    product_price: "70",
    subcategoryId: 18
  },
  {
    product_name: "Satchel",
    product_description: "Classic satchel with a structured design and top handle",
    product_price: "85",
    subcategoryId: 18
  },
  {
    product_name: "Bucket Bag",
    product_description: "Trendy bucket bag with a drawstring closure and minimalist design",
    product_price: 65,
    subcategoryId: 18
  },
  {
    product_name: "Wristlet",
    product_description: "Convenient wristlet for carrying essentials, with a secure zip",
    product_price: "30",
    subcategoryId: 18
  },
  {
    product_name: "Hobo Bag",
    product_description: "Slouchy hobo bag with a spacious interior and comfortable strap",
    product_price: "75",
    subcategoryId: 18
  },
  {
    product_name: "Evening Bag",
    product_description: "Sophisticated evening bag with embellishments and a delicate chain",
    product_price: "90",
    subcategoryId: 18
  },

  // Women's Shoes - Subcategory ID: 19
  {
    product_name: "Sneakers",
    product_description: "Comfortable and stylish sneakers suitable for daily wear",
    product_price: "100",
    subcategoryId: 19
  },
  {
    product_name: "Heels",
    product_description: "Elegant high heels with a classic design, perfect for formal occasions",
    product_price: "120",
    subcategoryId: 19
  },
  {
    product_name: "Boots",
    product_description: "Versatile boots that combine comfort with style for the colder months",
    product_price: "150",
    subcategoryId: 19
  },
  {
    product_name: "Sandals",
    product_description: "Summer-ready sandals with a comfortable fit and chic design",
    product_price: "70",
    subcategoryId: 19
  },
  {
    product_name: "Flats",
    product_description: "Classic flats that offer both comfort and style for everyday wear",
    product_price: "85",
    subcategoryId: 19
  },
  {
    product_name: "Loafers",
    product_description: "Sophisticated loafers with a timeless design, ideal for the office",
    product_price: "95",
    subcategoryId: 19
  },
  {
    product_name: "Espadrilles",
    product_description: "Light and airy espadrilles, perfect for a casual summer look",
    product_price: "60",
    subcategoryId: 19
  },
  {
    product_name: "Ankle Strap Heels",
    product_description: "Fashion-forward ankle strap heels with a sleek silhouette",
    product_price: "110",
    subcategoryId: 19
  },
  {
    product_name: "Mules",
    product_description: "Easy-to-wear mules with a comfortable design, suitable for all occasions",
    product_price: "80",
    subcategoryId: 19
  },
  {
    product_name: "Wedge Sandals",
    product_description: "Stylish wedge sandals with a comfortable lift, ideal for long days",
    product_price: "90",
    subcategoryId: 19
  },

  // Women's Accessories - Subcategory ID: 20
  {
    product_name: "Statement Necklace",
    product_description: "Eye-catching statement necklace that adds elegance to any outfit",
    product_price: "55",
    subcategoryId: 20
  },
  {
    product_name: "Earrings",
    product_description: "Delicate earrings available in various designs to complement your style",
    product_price: "30",
    subcategoryId: 20
  },
  {
    product_name: "Bracelet",
    product_description: "Chic bracelet that adds a touch of sophistication to any wrist",
    product_price: "40",
    subcategoryId: 20
  },
  {
    product_name: "Watch",
    product_description: "Elegant watch that combines functionality with fashion",
    product_price: "120",
    subcategoryId: 20
  },
  {
    product_name: "Sunglasses",
    product_description: "Trendy sunglasses that offer both style and sun protection",
    product_price: "70",
    subcategoryId: 20
  },
  {
    product_name: "Scarf",
    product_description: "Versatile scarf that can be styled in multiple ways to enhance your outfit",
    product_price: "45",
    subcategoryId: 20
  },
  {
    product_name: "Belt",
    product_description: "Stylish belt that adds a finishing touch to both casual and formal looks",
    product_price: "35",
    subcategoryId: 20
  },
  {
    product_name: "Hat",
    product_description: "Fashionable hat that adds flair and protection from the sun",
    product_price: "50",
    subcategoryId: 20
  },
  {
    product_name: "Hair Accessories",
    product_description: "Assortment of hair accessories to add a playful touch to your hairstyle",
    product_price: "25",
    subcategoryId: 20
  },
  {
    product_name: "Handbag Charm",
    product_description: "Decorative charm to personalize and add flair to your handbag",
    product_price: "20",
    subcategoryId: 20
  },

  // Electronics Cameras - Subcategory ID: 30
  {
    product_name: "Mirrorless Alpha",
    product_description: "Compact mirrorless camera with interchangeable lenses and 4K video capability",
    product_price: "1200",
    subcategoryId: 30
  },
  {
    product_name: "ProShot DSLR",
    product_description: "High-resolution DSLR camera with advanced features for professional photography",
    product_price: "2000",
    subcategoryId: 30
  },
  {
    product_name: "ActionCam Xtreme",
    product_description: "Rugged action camera designed for extreme sports and underwater adventures",
    product_price: "300",
    subcategoryId: 30
  },
  {
    product_name: "ZoomFrame Digital",
    product_description: "Digital camera with powerful optical zoom and image stabilization",
    product_price: "500",
    subcategoryId: 30
  },
  {
    product_name: "Snapshot Mini",
    product_description: "Compact and lightweight digital camera, perfect for travel and casual photography",
    product_price: "150",
    subcategoryId: 30
  },
  {
    product_name: "RetroView Film",
    product_description: "Vintage-style film camera with manual controls for photography enthusiasts",
    product_price: "250",
    subcategoryId: 30
  },
  {
    product_name: "NightSight Astro",
    product_description: "Astrophotography camera with enhanced low-light performance and star tracking",
    product_price: "800",
    subcategoryId: 30
  },
  {
    product_name: "Panorama Drone",
    product_description: "Drone equipped with a high-quality camera for aerial photography and panoramic shots",
    product_price: "1000",
    subcategoryId: 30
  },
  {
    product_name: "FocusFrame Studio",
    product_description: "Professional studio camera with large sensor for exceptional image quality",
    product_price: "3000",
    subcategoryId: 30
  },
  {
    product_name: "InstaPrint Pocket",
    product_description: "Instant camera with pocket-size prints, perfect for capturing and sharing moments",
    product_price: "120",
    subcategoryId: 30
  },

  // E-book Readers - Subcategory ID: 31
  {
    product_name: "E-Reader Plus",
    product_description: "Lightweight e-book reader with a high-resolution, glare-free display and extended battery life",
    product_price: "150",
    subcategoryId: 31
  },
  {
    product_name: "BookGlow Pro",
    product_description: "E-book reader with adjustable warm light for comfortable nighttime reading",
    product_price: "180",
    subcategoryId: 31
  },
  {
    product_name: "PaperLeaf Slim",
    product_description: "Ultra-slim e-book reader with touchscreen display and access to extensive digital libraries",
    product_price: "200",
    subcategoryId: 31
  },
  {
    product_name: "InkRead Voyage",
    product_description: "Premium e-book reader with waterproof design and adaptive front light",
    product_price: "250",
    subcategoryId: 31
  },
  {
    product_name: "Libro Mini",
    product_description: "Compact e-book reader perfect for reading on the go, with built-in Wi-Fi connectivity",
    product_price: "130",
    subcategoryId: 31
  },

  // Gaming Accessories - Subcategory ID: 32
  {
    product_name: "GameMaster Controller",
    product_description: "Ergonomic gaming controller with customizable buttons and haptic feedback for immersive gameplay",
    product_price: "70",
    subcategoryId: 32
  },
  {
    product_name: "VirtualRig Headset",
    product_description: "High-definition VR headset for realistic gaming experiences, compatible with multiple platforms",
    product_price: "400",
    subcategoryId: 32
  },
  {
    product_name: "BattleStation Keyboard",
    product_description: "Mechanical gaming keyboard with RGB lighting and programmable macros",
    product_price: "100",
    subcategoryId: 32
  },
  {
    product_name: "SpeedMouse Pro",
    product_description: "High-precision gaming mouse with adjustable DPI and customizable buttons",
    product_price: "50",
    subcategoryId: 32
  },
  {
    product_name: "SurroundSound Gaming Headset",
    product_description: "Gaming headset with surround sound, noise-cancellation mic, and comfortable ear cups",
    product_price: "90",
    subcategoryId: 32
  },

  // Tablets - Subcategory ID: 33
  {
    product_name: "UltraTab S10",
    product_description: "Sleek tablet with a 10-inch display, powerful processor, and long battery life",
    product_price: "350",
    subcategoryId: 33
  },
  {
    product_name: "Canvas Pro12",
    product_description: "High-performance tablet with a 12-inch screen and stylus for creatives",
    product_price: "600",
    subcategoryId: 33
  },
  {
    product_name: "LitePad Mini 8",
    product_description: "Compact tablet with an 8-inch screen, perfect for entertainment on the go",
    product_price: "200",
    subcategoryId: 33
  },
  {
    product_name: "Galaxy View 18",
    product_description: "Large tablet with an 18-inch display for an immersive media experience",
    product_price: "700",
    subcategoryId: 33
  },
  {
    product_name: "StreamBook Duo",
    product_description: "Dual-screen tablet with detachable keyboard for versatility and productivity",
    product_price: "800",
    subcategoryId: 33
  },

  // TVs - Subcategory ID: 34
  {
    product_name: "CrystalClear 4K TV",
    product_description: "Ultra HD 4K TV with vibrant colors and smart technology for streaming",
    product_price: "1000",
    subcategoryId: 34
  },
  {
    product_name: "BigScreen 85\"",
    product_description: "Massive 85-inch TV for a cinematic experience in your living room",
    product_price: "2500",
    subcategoryId: 34
  },
  {
    product_name: "SmartView LED TV",
    product_description: "Energy-efficient LED TV with smart features for easy streaming and browsing",
    product_price: "600",
    subcategoryId: 34
  },
  {
    product_name: "OLED Curve",
    product_description: "Curved OLED TV with stunning contrast and immersive viewing angles",
    product_price: "1500",
    subcategoryId: 34
  },
  {
    product_name: "Portable Projector TV",
    product_description: "Compact and portable projector TV, perfect for outdoor movie nights",
    product_price: "300",
    subcategoryId: 34
  },

  // Security Cameras - Subcategory ID: 35
  {
    product_name: "WatchTower 360",
    product_description: "360-degree security camera with night vision and motion detection",
    product_price: "200",
    subcategoryId: 35
  },
  {
    product_name: "GuardianEye Pro",
    product_description: "Professional-grade security camera with HD recording and remote access",
    product_price: "250",
    subcategoryId: 35
  },
  {
    product_name: "HomeSafe View",
    product_description: "Indoor security camera with two-way audio and cloud storage",
    product_price: "100",
    subcategoryId: 35
  },
  {
    product_name: "Outdoor Sentinel",
    product_description: "Weatherproof outdoor security camera with live streaming and alerts",
    product_price: "150",
    subcategoryId: 35
  },
  {
    product_name: "DoorGuard Cam",
    product_description: "Smart doorbell camera with facial recognition and night vision",
    product_price: "180",
    subcategoryId: 35
  },

  // Smart Lighting - Subcategory ID: 36
  {
    product_name: "BrightHive Smart Bulb",
    product_description: "Smart light bulb with adjustable colors and voice control compatibility",
    product_price: "30",
    subcategoryId: 36
  },
  {
    product_name: "Luminous Hub",
    product_description: "Central hub for smart lighting systems, supporting multiple bulb connections",
    product_price: "80",
    subcategoryId: 36
  },
  {
    product_name: "GlowStrip LED",
    product_description: "Adhesive smart LED strip lights with customizable patterns and colors",
    product_price: "40",
    subcategoryId: 36
  },
  {
    product_name: "Daylight Panel",
    product_description: "Smart lighting panel that simulates natural daylight patterns",
    product_price: "120",
    subcategoryId: 36
  },
  {
    product_name: "Aurora Smart Lamp",
    product_description: "Decorative smart lamp with mood lighting and touch controls",
    product_price: "70",
    subcategoryId: 36
  },

  //Sets - subcategory 37
{
  product_name: "Elegant Pearl Set",
  product_description: "A sophisticated set featuring a pearl necklace, bracelet, and earrings, perfect for formal occasions.",
  product_price: 250,
  
  subcategoryId: 37
},
{
  product_name: "Vintage Silver Set",
  product_description: "A classic vintage-inspired set with a silver necklace, drop earrings, and a delicate bracelet.",
  product_price: 175,
  
  subcategoryId: 37
},
{
  product_name: "Bohemian Chic Set",
  product_description: "A vibrant boho set with a multi-strand necklace, tassel earrings, and a beaded bracelet.",
  product_price: 130,
  
  subcategoryId: 37
},
{
  product_name: "Bridal Elegance Set",
  product_description: "An exquisite bridal set with a crystal necklace, matching earrings, and a bracelet for the special day.",
  product_price: 300,
  
  subcategoryId: 37
},
{
  product_name: "Minimalist Gold Set",
  product_description: "A sleek and modern set with a thin gold chain, stud earrings, and a simple bangle.",
  product_price: 200,
  
  subcategoryId: 37
},
{
  product_name: "Art Deco Inspired Set",
  product_description: "A glamorous set with geometric patterns, featuring a statement necklace, dangle earrings, and a cuff bracelet.",
  product_price: 220,
  
  subcategoryId: 37
},
{
  product_name: "Nature Inspired Set",
  product_description: "An earthy set inspired by nature, with a leaf-patterned necklace, earrings, and a wrap bracelet.",
  product_price: 150,
  
  subcategoryId: 37
},
{
  product_name: "Contemporary Set",
  product_description: "A modern set with abstract designs, including a pendant necklace, hoop earrings, and a link bracelet.",
  product_price: 190,
  
  subcategoryId: 37
},
{
  product_name: "Royal Gemstone Set",
  product_description: "A regal set adorned with gemstones, featuring a bold necklace, chandelier earrings, and a statement bracelet.",
  product_price: 350,
  
  subcategoryId: 37
},
{
  product_name: "Classic Diamond Set",
  product_description: "A timeless set with a diamond necklace, solitaire earrings, and a tennis bracelet for a touch of elegance.",
  product_price: 500,
  
  subcategoryId: 37
},
//Earrings - Subcategory 38
{
  product_name: "Crystal Drop Earrings",
  product_description: "Elegant drop earrings with sparkling crystals, perfect for evening wear.",
  product_price: 60,
  
  subcategoryId: 38
},
{
  product_name: "Stud Earrings Set",
  product_description: "A versatile set of stud earrings in gold, silver, and rose gold finishes.",
  product_price: 40,
  
  subcategoryId: 38
},
{
  product_name: "Hoop Earrings Collection",
  product_description: "A fashionable collection of hoop earrings in various sizes and finishes.",
  product_price: 50,
  
  subcategoryId: 38
},
{
  product_name: "Tassel Earrings",
  product_description: "Bohemian-inspired tassel earrings in a vibrant range of colors.",
  product_price: 30,
  
  subcategoryId: 38
},
{
  product_name: "Pearl Earrings",
  product_description: "Classic pearl earrings, a must-have accessory for every wardrobe.",
  product_price: 70,
  
  subcategoryId: 38
},
{
  product_name: "Geometric Earrings",
  product_description: "Contemporary earrings featuring bold geometric shapes.",
  product_price: 45,
  
  subcategoryId: 38
},
{
  product_name: "Feather Earrings",
  product_description: "Lightweight feather earrings for a unique, free-spirited look.",
  product_price: 35,
  
  subcategoryId: 38
},
{
  product_name: "Diamond Solitaire Earrings",
  product_description: "Elegant solitaire diamond earrings set in 14k gold.",
  product_price: 300,
  
  subcategoryId: 38
},
{
  product_name: "Enamel Flower Earrings",
  product_description: "Delicate enamel flower earrings in a variety of pastel shades.",
  product_price: 25,
  
  subcategoryId: 38
},
{
  product_name: "Angular Dangle Earrings",
  product_description: "Modern dangle earrings with an angular, abstract design.",
  product_price: 55,
  
  subcategoryId: 38
},
//Necklaces - Subcategory 39
{
  product_name: "Silver Pendant Necklace",
  product_description: "A sleek silver pendant necklace, perfect for layering.",
  product_price: 90,
  
  subcategoryId: 39
},
{
  product_name: "Gold Chain Necklace",
  product_description: "A classic gold chain necklace, an essential accessory.",
  product_price: 120,
  
  subcategoryId: 39
},
{
  product_name: "Layered Boho Necklace",
  product_description: "A trendy layered necklace with boho charms and beads.",
  product_price: 80,
  
  subcategoryId: 39
},
{
  product_name: "Choker Necklace Set",
  product_description: "A versatile set of choker necklaces in various styles and materials.",
  product_price: 65,
  
  subcategoryId: 39
},
{
  product_name: "Gemstone Bead Necklace",
  product_description: "A colorful necklace made of natural gemstone beads.",
  product_price: 110,
  
  subcategoryId: 39
},
{
  product_name: "Statement Bib Necklace",
  product_description: "A bold statement bib necklace with intricate designs.",
  product_price: 130,
  
  subcategoryId: 39
},
{
  product_name: "Locket Necklace",
  product_description: "A sentimental locket necklace, perfect for keeping cherished photos close.",
  product_price: 100,
  
  subcategoryId: 39
},
{
  product_name: "Infinity Necklace",
  product_description: "A symbolic infinity necklace in sterling silver.",
  product_price: 75,
  
  subcategoryId: 39
},
{
  product_name: "Pearl Strand Necklace",
  product_description: "An elegant strand of pearls, a timeless piece for any collection.",
  product_price: 200,
  
  subcategoryId: 39
},
{
  product_name: "Baroque Pearl Necklace",
  product_description: "A unique necklace featuring irregularly shaped baroque pearls for a modern twist.",
  product_price: 180,
  
  subcategoryId: 39
},
//Pocket Watches - Subcategory 40
{
  product_name: "Classic Pocket Watch",
  product_description: "A timeless pocket watch with intricate engravings and a vintage finish.",
  product_price: 150,
  
  subcategoryId: 40
},
{
  product_name: "Skeleton Pocket Watch",
  product_description: "An exquisite skeleton pocket watch revealing the intricate workings within.",
  product_price: 200,
  
  subcategoryId: 40
},
{
  product_name: "Railroad Pocket Watch",
  product_description: "A durable and precise pocket watch, reminiscent of the railroad era.",
  product_price: 175,
  
  subcategoryId: 40
},
{
  product_name: "Gold-Plated Pocket Watch",
  product_description: "A luxurious gold-plated pocket watch, a symbol of elegance and sophistication.",
  product_price: 250,
  
  subcategoryId: 40
},
{
  product_name: "Silver Pocket Watch",
  product_description: "A sleek silver pocket watch, combining classic design with modern style.",
  product_price: 140,
  
  subcategoryId: 40
},
{
  product_name: "Engraved Pocket Watch",
  product_description: "A personalized engraved pocket watch, making it the perfect gift.",
  product_price: 160,
  
  subcategoryId: 40
},
{
  product_name: "Hunter-Case Pocket Watch",
  product_description: "A traditional hunter-case pocket watch with a protective outer case.",
  product_price: 180,
  
  subcategoryId: 40
},
{
  product_name: "Open Face Pocket Watch",
  product_description: "An open face pocket watch with a clear view of the dial, for ease of reading.",
  product_price: 130,
  
  subcategoryId: 40
},
{
  product_name: "Antique Style Pocket Watch",
  product_description: "A pocket watch designed with antique styling, perfect for collectors.",
  product_price: 190,
  
  subcategoryId: 40
},
{
  product_name: "Mechanical Pocket Watch",
  product_description: "A mechanical pocket watch that showcases the artistry of traditional watchmaking.",
  product_price: 210,
  
  subcategoryId: 40
},
//Bracelets - Subcategory 41
{
  product_name: "Charm Bracelet",
  product_description: "A customizable charm bracelet to hold your most cherished memories.",
  product_price: 100,
  
  subcategoryId: 41
},
{
  product_name: "Bangle Set",
  product_description: "A set of sleek bangles, perfect for stacking or wearing individually.",
  product_price: 80,
  
  subcategoryId: 41
},
{
  product_name: "Leather Wrap Bracelet",
  product_description: "A stylish leather wrap bracelet, offering a blend of rustic and modern looks.",
  product_price: 60,
  
  subcategoryId: 41
},
{
  product_name: "Beaded Bracelet",
  product_description: "A colorful beaded bracelet, adding a pop of color to any outfit.",
  product_price: 40,
  
  subcategoryId: 41
},
{
  product_name: "Cuff Bracelet",
  product_description: "A statement cuff bracelet, designed to make an impact.",
  product_price: 120,
  
  subcategoryId: 41
},
{
  product_name: "Tennis Bracelet",
  product_description: "An elegant tennis bracelet, lined with sparkling diamonds.",
  product_price: 250,
  
  subcategoryId: 41
},
{
  product_name: "Infinity Bracelet",
  product_description: "A delicate infinity bracelet, symbolizing eternity and everlasting love.",
  product_price: 70,
  
  subcategoryId: 41
},
{
  product_name: "Friendship Bracelet",
  product_description: "A handwoven friendship bracelet, representing the bonds between close friends.",
  product_price: 30,
  
  subcategoryId: 41
},
{
  product_name: "Pearl Bracelet",
  product_description: "A classic pearl bracelet, adding a touch of elegance to any wrist.",
  product_price: 90,
  
  subcategoryId: 41
},
{
  product_name: "Gold Chain Bracelet",
  product_description: "A simple yet sophisticated gold chain bracelet, perfect for daily wear.",
  product_price: 110,
  
  subcategoryId: 41
},
//Rings - Subcategory 42
{
  product_name: "Solitaire Ring",
  product_description: "A stunning solitaire ring featuring a single, brilliant diamond.",
  product_price: 300,
  
  subcategoryId: 42
},
{
  product_name: "Eternity Band",
  product_description: "An eternity band, fully encircled with diamonds, symbolizing unending love.",
  product_price: 400,
  
  subcategoryId: 42
},
{
  product_name: "Signet Ring",
  product_description: "A classic signet ring, often personalized with initials or a family crest.",
  product_price: 220,
  
  subcategoryId: 42
},
{
  product_name: "Stackable Rings",
  product_description: "A set of delicate stackable rings, perfect for mixing and matching.",
  product_price: 150,
  
  subcategoryId: 42
},
{
  product_name: "Cocktail Ring",
  product_description: "A bold cocktail ring, designed to be a conversation starter at any party.",
  product_price: 250,
  
  subcategoryId: 42
},
{
  product_name: "Claddagh Ring",
  product_description: "A traditional Irish Claddagh ring, representing love, loyalty, and friendship.",
  product_price: 120,
  
  subcategoryId: 42
},
{
  product_name: "Turquoise Ring",
  product_description: "A vibrant turquoise ring, set in sterling silver for a southwestern flair.",
  product_price: 100,
  
  subcategoryId: 42
},
{
  product_name: "Mood Ring",
  product_description: "A fun and retro mood ring, changing colors with your body temperature.",
  product_price: 50,
  
  subcategoryId: 42
},
{
  product_name: "Birthstone Ring",
  product_description: "A personalized ring featuring the birthstone of your choice.",
  product_price: 80,
  
  subcategoryId: 42
},
{
  product_name: "Wedding Band Set",
  product_description: "A matching set of wedding bands for the perfect union.",
  product_price: 500,
  
  subcategoryId: 42
},
//Wrist Watches - Subcategory 43
{
  product_name: "Minimalist Watch",
  product_description: "A sleek wrist watch with a minimalist design, perfect for everyday wear.",
  product_price: 150,
  
  subcategoryId: 43
},
{
  product_name: "Smart Watch",
  product_description: "A high-tech smart watch, keeping you connected and on track with your fitness goals.",
  product_price: 250,
  
  subcategoryId: 43
},
{
  product_name: "Diver's Watch",
  product_description: "A rugged diver's watch, water-resistant and built for underwater adventures.",
  product_price: 300,
  
  subcategoryId: 43
},
{
  product_name: "Chronograph Watch",
  product_description: "A sophisticated chronograph watch, featuring multiple dials for precise timekeeping.",
  product_price: 350,
  
  subcategoryId: 43
},
{
  product_name: "Pilot's Watch",
  product_description: "A durable pilot's watch, designed with features useful for navigation and timing.",
  product_price: 400,
  
  subcategoryId: 43
},
{
  product_name: "Fashion Watch",
  product_description: "A stylish fashion watch, available in a variety of trendy designs and colors.",
  product_price: 120,
  
  subcategoryId: 43
},
{
  product_name: "Vintage Watch",
  product_description: "A classic vintage watch, bringing timeless elegance to your wrist.",
  product_price: 200,
  
  subcategoryId: 43
},
{
  product_name: "Luxury Watch",
  product_description: "An opulent luxury watch, crafted with precision and showcasing exquisite craftsmanship.",
  product_price: 1000,
  
  subcategoryId: 43
},
{
  product_name: "Field Watch",
  product_description: "A reliable field watch, designed for durability and readability in outdoor conditions.",
  product_price: 180,
  
  subcategoryId: 43
},
{
  product_name: "Dress Watch",
  product_description: "An elegant dress watch, perfect for formal events and occasions.",
  product_price: 220,
  
  subcategoryId: 43
},
//Trending - Subcategory 44
{
  product_name: "Geometric Jewelry Set",
  product_description: "A trendy set featuring geometric shapes, including a necklace, earrings, and a bracelet.",
  product_price: 140,
  
  subcategoryId: 44
},
{
  product_name: "Layered Chain Necklace",
  product_description: "A fashionable layered chain necklace, making a bold statement.",
  product_price: 100,
  
  subcategoryId: 44
},
{
  product_name: "Mismatched Earrings",
  product_description: "A pair of chic mismatched earrings, perfect for a modern, eclectic look.",
  product_price: 70,
  
  subcategoryId: 44
},
{
  product_name: "Adjustable Ring Set",
  product_description: "A versatile set of adjustable rings in various designs.",
  product_price: 90,
  
  subcategoryId: 44
},
{
  product_name: "Beaded Choker",
  product_description: "A colorful beaded choker, adding a playful touch to your outfit.",
  product_price: 50,
  
  subcategoryId: 44
},
{
  product_name: "Wide Cuff Bracelet",
  product_description: "A statement wide cuff bracelet, designed to stand out.",
  product_price: 110,
  
  subcategoryId: 44
},
{
  product_name: "Anklet Set",
  product_description: "A set of delicate anklets, perfect for adding a subtle charm to your look.",
  product_price: 60,
  
  subcategoryId: 44
},
{
  product_name: "Body Chain",
  product_description: "A seductive body chain, perfect for layering over swimwear or a sleek dress.",
  product_price: 80,
  
  subcategoryId: 44
},
{
  product_name: "Statement Ear Cuff",
  product_description: "A bold ear cuff, requiring no piercings, for an edgy look.",
  product_price: 65,
  
  subcategoryId: 44
},
{
  product_name: "Textured Metal Bangles",
  product_description: "A set of textured metal bangles, adding a rustic touch to any ensemble.",
  product_price: 75,
  
  subcategoryId: 44
}, 
  // Kids and Toys: Roll & Explore - Subcategory ID: 45
  {
    product_name: "Adventure Crawler",
    product_description: "Multi-terrain remote-controlled vehicle designed for thrilling backyard adventures",
    product_price: "60",
    subcategoryId: 45
  },
  {
    product_name: "Tumble Racer",
    product_description: "Self-righting race car that flips, spins, and races over obstacles",
    product_price: "40",
    subcategoryId: 45
  },
  {
    product_name: "Moon Explorer",
    product_description: "Lunar rover toy with realistic lights and sounds for space exploration play",
    product_price: "50",
    subcategoryId: 45
  },
  {
    product_name: "Jungle Safari Jeep",
    product_description: "Detailed safari jeep toy complete with animal figures for imaginative play",
    product_price: "55",
    subcategoryId: 45
  },
  {
    product_name: "Ocean Diver Submarine",
    product_description: "Submarine toy with working periscope and underwater exploration accessories",
    product_price: "45",
    subcategoryId: 45
  },
  {
    product_name: "Desert Adventure Bike",
    product_description: "All-terrain motorbike toy designed for high-speed desert escapades",
    product_price: "35",
    subcategoryId: 45
  },
  {
    product_name: "Sky Glider",
    product_description: "Hand-launched glider plane with adjustable wings for extended flight time",
    product_price: "20",
    subcategoryId: 45
  },
  {
    product_name: "Mountain Trekker",
    product_description: "Robust climber vehicle toy with gripping action for vertical ascents",
    product_price: "70",
    subcategoryId: 45
  },
  {
    product_name: "Rapid River Raft",
    product_description: "Inflatable raft toy set with mini figures for exciting waterway adventures",
    product_price: "30",
    subcategoryId: 45
  },
  {
    product_name: "Trailblazer Quad",
    product_description: "Four-wheeler ATV toy with rugged design for off-road exploration",
    product_price: "50",
    subcategoryId: 45
  },

  // Action Figures - Subcategory ID: 46
  {
    product_name: "Galactic Defender",
    product_description: "Poseable action figure with intergalactic armor and weapons for defending the universe",
    product_price: "25",
    subcategoryId: 46
  },
  {
    product_name: "Knight of the Realm",
    product_description: "Medieval knight action figure with detailed armor and weaponry for historical battles",
    product_price: "20",
    subcategoryId: 46
  },
  {
    product_name: "Cyber Ninja",
    product_description: "Futuristic ninja action figure with stealth armor and accessories for covert missions",
    product_price: "22",
    subcategoryId: 46
  },
  {
    product_name: "Dinosaur Hunter",
    product_description: "Adventurous explorer action figure equipped for prehistoric dinosaur tracking",
    product_price: "30",
    subcategoryId: 46
  },
  {
    product_name: "Superhero Alliance",
    product_description: "Collection of superhero action figures, each with unique abilities and backstory",
    product_price: "100",
    subcategoryId: 46
  },
  {
    product_name: "Mutant Creatures",
    product_description: "Series of mutant creature action figures with changeable parts for customization",
    product_price: "75",
    subcategoryId: 46
  },
  {
    product_name: "Deep Sea Diver",
    product_description: "Action figure with realistic diving gear and underwater creatures for oceanic exploration",
    product_price: "28",
    subcategoryId: 46
  },
  {
    product_name: "Robot Invader",
    product_description: "Robotic action figure with light-up features and movable limbs for futuristic play",
    product_price: "35",
    subcategoryId: 46
  },
  {
    product_name: "Wild West Sheriff",
    product_description: "Classic Wild West sheriff action figure with horse and accessories for frontier justice",
    product_price: "40",
    subcategoryId: 46
  },
  {
    product_name: "Space Explorer",
    product_description: "Astronaut action figure with space gear and alien figures for interstellar adventures",
    product_price: "32",
    subcategoryId: 46
  },

  // Fun Discoveries - Subcategory ID: 47
  {
    product_name: "Crystal Growing Kit",
    product_description: "Educational science kit for growing your own colorful crystal formations",
    product_price: "25",
    subcategoryId: 47
  },
  {
    product_name: "Mini Telescope",
    product_description: "Child-friendly telescope for exploring the night sky and learning about astronomy",
    product_price: "45",
    subcategoryId: 47
  },
  {
    product_name: "Junior Detective Set",
    product_description: "Complete detective kit with magnifying glass and clues for solving mysteries",
    product_price: "30",
    subcategoryId: 47
  },
  {
    product_name: "Insect Observation Hive",
    product_description: "See-through habitat for observing the life cycle of insects, such as butterflies",
    product_price: "35",
    subcategoryId: 47
  },
  {
    product_name: "Young Inventor's Lab",
    product_description: "STEM kit with simple machines and gadgets to build and learn basic engineering principles",
    product_price: "60",
    subcategoryId: 47
  },
  {
    product_name: "Eco-Friendly Gardening Kit",
    product_description: "Starter gardening set for kids, including seeds, tools, and biodegradable pots",
    product_price: "20",
    subcategoryId: 47
  },
  {
    product_name: "Mini Planetarium",
    product_description: "Projector that displays constellations and celestial bodies on bedroom walls",
    product_price: "50",
    subcategoryId: 47
  },
  {
    product_name: "Volcano Eruption Kit",
    product_description: "Create and erupt your own volcano with this educational science kit",
    product_price: "28",
    subcategoryId: 47
  },
  {
    product_name: "Dino Dig Excavation Kit",
    product_description: "Simulated archaeological dig kit for uncovering and assembling dinosaur fossils",
    product_price: "40",
    subcategoryId: 47
  },
  {
    product_name: "Magic Science for Wizards",
    product_description: "Science kit with experiments and activities themed around magic and wizardry",
    product_price: "30",
    subcategoryId: 47
  },

  // Create & Play - Subcategory ID: 48
  {
    product_name: "Build-a-Robot Workshop",
    product_description: "DIY robot building kit with customizable parts and programmable features for creative play",
    product_price: "55",
    subcategoryId: 48
  },
  {
    product_name: "Clay Creations Studio",
    product_description: "Complete clay modeling kit with tools and paints for sculpting custom figures",
    product_price: "40",
    subcategoryId: 48
  },
  {
    product_name: "Easel Art Set",
    product_description: "Adjustable easel with a variety of paints, brushes, and canvases for young artists",
    product_price: "70",
    subcategoryId: 48
  },
  {
    product_name: "Lego Master Builder",
    product_description: "Advanced Lego set with thousands of pieces for constructing detailed structures",
    product_price: "120",
    subcategoryId: 48
  },
  {
    product_name: "Puzzle World",
    product_description: "Assorted jigsaw puzzles with varying levels of difficulty and themes",
    product_price: "30",
    subcategoryId: 48
  },
  {
    product_name: "Junior Woodshop",
    product_description: "Safe woodworking kit for kids to build and customize their own creations",
    product_price: "60",
    subcategoryId: 48
  },
  {
    product_name: "Fashion Design Studio",
    product_description: "Kit for designing and creating doll clothes, including fabrics and sewing tools",
    product_price: "50",
    subcategoryId: 48
  },
  {
    product_name: "Circuit Maker 2000",
    product_description: "Electronic circuit building kit for teaching the basics of electricity and circuits",
    product_price: "80", subcategoryId: 48
  },
  {
    product_name: "Miniature Town Architect",
    product_description: "Set for building and customizing a miniature town, complete with buildings and vehicles",
    product_price: "90",
    subcategoryId: 48
  },
  {
    product_name: "Crafty Beads Boutique",
    product_description: "Bead crafting kit with thousands of beads for making jewelry and decorations",
    product_price: "35",
    subcategoryId: 48
  },

  // Surprise Haven - Subcategory ID: 49
  {
    product_name: "Mystery Capsule",
    product_description: "Collectible surprise capsule with a random toy or figure inside, part of a larger series",
    product_price: "10",
    subcategoryId: 49
  },
  {
    product_name: "Treasure Chest of Wonders",
    product_description: "Locked chest with a variety of hidden toys and puzzles to solve to unlock",
    product_price: "50",
    subcategoryId: 49
  },
  {
    product_name: "Blind Bag Collectibles",
    product_description: "Series of themed blind bags containing mystery collectible figures",
    product_price: "5",
    subcategoryId: 49
  },
  {
    product_name: "Surprise Dollhouse",
    product_description: "Mini dollhouse with hidden rooms and surprise furniture pieces to discover",
    product_price: "80",
    subcategoryId: 49
  },
  {
    product_name: "Adventure Eggs",
    product_description: "Egg-shaped containers with a surprise adventure-themed toy inside each",
    product_price: "8",
    subcategoryId: 49
  },
  {
    product_name: "Magic Potion Bottles",
    product_description: "Collection of potion bottles with surprise interactive features or toys inside",
    product_price: "15",
    subcategoryId: 49
  },
  {
    product_name: "Hidden Gem Dig Kit",
    product_description: "Kit for excavating and discovering hidden gemstones within a block of material",
    product_price: "20",
    subcategoryId: 49
  },
  {
    product_name: "Enchanted Forest Pods",
    product_description: "Mystery pods that open to reveal fantastical creatures and forest habitats",
    product_price: "12",
    subcategoryId: 49
  },
  {
    product_name: "Secret Decoder Rings",
    product_description: "Set of rings with secret decoders and messages to uncover hidden surprises",
    product_price: "18",
    subcategoryId: 49
  },
  {
    product_name: "Galaxy Explorer Capsules",
    product_description: "Space-themed capsules containing surprise astronaut figures and space gear",
    product_price: "10",
    subcategoryId: 49
  },

  // Doll Corner - Subcategory ID: 50
  {
    product_name: "Dreamy Dollhouse",
    product_description: "Large, detailed dollhouse with fully furnished rooms and interactive features",
    product_price: "150",
    subcategoryId: 50
  },
  {
    product_name: "Fashionista Dolls",
    product_description: "Collection of dolls with stylish outfits and accessories for mix-and-match fashion play",
    product_price: "25",
    subcategoryId: 50
  },
  {
    product_name: "Hero Action Dolls",
    product_description: "Action-themed dolls with superhero costumes and poseable limbs for dynamic play",
    product_price: "30",
    subcategoryId: 50
  },
  {
    product_name: "Tiny Tots Nursery",
    product_description: "Set of miniature baby dolls with a nursery playset and caregiving accessories",
    product_price: "60",
    subcategoryId: 50
  },
  {
    product_name: "Enchanted Tea Party Set",
    product_description: "Doll tea party set with magical tea set and themed accessories for imaginative play",
    product_price: "40",
    subcategoryId: 50
  },
  {
    product_name: "Puppet Theater",
    product_description: "Doll-sized puppet theater with a variety of puppets for storytelling and performance",
    product_price: "70",
    subcategoryId: 50
  },
  {
    product_name: "Royal Castle Dolls",
    product_description: "Set of royal family dolls with a detailed castle playset for regal adventures",
    product_price: "120",
    subcategoryId: 50
  },
  {
    product_name: "Mermaid Lagoon Friends",
    product_description: "Collection of mermaid dolls with colorful tails and underwater friends",
    product_price: "35",
    subcategoryId: 50
  },
  {
    product_name: "Adventure Camp Doll Set",
    product_description: "Outdoor-themed doll set with camping gear and wilderness accessories",
    product_price: "55",
    subcategoryId: 50
  },
  {
    product_name: "Princess Palace Playset",
    product_description: "Elaborate princess doll playset with a palace, furnishings, and royal characters",
    product_price: "130",
    subcategoryId: 50
  },

  // Fantasy Fashion - Subcategory ID: 51
  {
    product_name: "Star Performer Stage",
    product_description: "Performance stage playset with dolls, musical instruments, and stage lighting",
    product_price: "90",
    subcategoryId: 51
  },
  {
    product_name: "Glamour Closet",
    product_description: "Fashionable doll closet filled with glamorous dresses, shoes, and accessories",
    product_price: "50",
    subcategoryId: 51
  },
  {
    product_name: "Magic Wand Makeover",
    product_description: "Interactive doll set with a magic wand that changes the dolls' outfits and hair color",
    product_price: "45",
    subcategoryId: 51
  },
  {
    product_name: "Fairy Wings Boutique",
    product_description: "Doll accessory set featuring a variety of fairy wings, wands, and tiaras for enchanting playtime",
    product_price: "35",
    subcategoryId: 51
  },
  {
    product_name: "Princess Carriage Convertible",
    product_description: "Convertible doll carriage that transforms into a royal vehicle for princess dolls",
    product_price: "75",
    subcategoryId: 51
  },
  {
    product_name: "Unicorn Dress-Up Chest",
    product_description: "Collection of unicorn-themed dress-up clothes and accessories for dolls",
    product_price: "60",
    subcategoryId: 51
  },
  {
    product_name: "Rainbow Hairstyles Salon",
    product_description: "Doll hair salon playset with vibrant hair colors and styling tools for creative hairstyles",
    product_price: "65",
    subcategoryId: 51
  },
  {
    product_name: "Enchanted Ballroom Set",
    product_description: "Elegant ballroom playset with dance floor, music, and opulent decorations for dolls",
    product_price: "80",
    subcategoryId: 51
  },
  {
    product_name: "Royal Jewelry Box",
    product_description: "Assortment of doll-sized royal jewelry, including crowns, necklaces, and bracelets",
    product_price: "30",
    subcategoryId: 51
  },
  {
    product_name: "Mythic Mermaid Tails",
    product_description: "Set of interchangeable mermaid tails for dolls, featuring shimmering fabrics and unique designs",
    product_price: "40",
    subcategoryId: 51
  },
  {
    product_name: "Butterfly Adventure Wings",
    product_description: "Doll accessory set with butterfly wings and matching adventure gear for fantasy exploration",
    product_price: "25",
    subcategoryId: 51
  },
  // Subcategory ID: 52
  {
    product_name: "EcoBright LED Bulb",
    product_description: "Energy-efficient LED bulb with a lifespan of 25,000 hours, offering a bright, natural light.",
    product_price: "5.99",
    
    subcategoryId: 52
  },
  {
    product_name: "Orbital Ceiling Fan",
    product_description: "Modern ceiling fan with remote control, featuring energy-efficient operation and silent motor technology.",
    product_price: "150.00",
    
    subcategoryId: 52
  },
  {
    product_name: "Vintage Edison Bulb",
    product_description: "Classic Edison style filament bulb, creating a warm and cozy atmosphere with its soft amber glow.",
    product_price: "10.99",
    
    subcategoryId: 52
  },
  {
    product_name: "Solar Pathway Light",
    product_description: "Outdoor solar-powered light, designed for pathways and gardens, waterproof and durable for all weather conditions.",
    product_price: "20.00",
    
    subcategoryId: 52
  },
  {
    product_name: "Industrial Pendant Light",
    product_description: "Stylish pendant light with an industrial design, perfect for adding a modern touch to any room.",
    product_price: "45.00",
    
    subcategoryId: 52
  },
  {
    product_name: "Retractable Ceiling Fan",
    product_description: "Innovative ceiling fan with retractable blades, includes LED light kit and remote control for easy operation.",
    product_price: "180.00",
    
    subcategoryId: 52
  },
  {
    product_name: "Smart LED Strip",
    product_description: "RGB LED strip lights with smart control, compatible with voice assistants and smartphones for custom lighting scenes.",
    product_price: "25.99",
    
    subcategoryId: 52
  },
  {
    product_name: "Crystal Chandelier",
    product_description: "Elegant crystal chandelier, perfect for adding a touch of luxury to dining rooms or entryways.",
    product_price: "250.00",
    
    subcategoryId: 52
  },
  {
    product_name: "Adjustable Desk Lamp",
    product_description: "Sleek desk lamp with adjustable arm and head, ideal for focused task lighting in offices or study areas.",
    product_price: "35.00",
    
    subcategoryId: 52
  },
  {
    product_name: "Outdoor Wall Lantern",
    product_description: "Traditional wall lantern for outdoor use, constructed from durable materials to withstand the elements.",
    product_price: "60.00",
    
    subcategoryId: 52
  },
  // Subcategory ID: 53
  {
    product_name: "Stainless Steel Nails",
    product_description: "High-quality stainless steel nails, ideal for both indoor and outdoor construction projects.",
    product_price: "5.00",
    
    subcategoryId: 53
  },
  {
    product_name: "Brass Door Hinges",
    product_description: "Durable brass door hinges, designed for heavy-duty use with a smooth operation and classic finish.",
    product_price: "12.00",
    
    subcategoryId: 53
  },
  {
    product_name: "Magnetic Cabinet Latch",
    product_description: "Strong magnetic latch for cabinet doors, ensuring secure closure with a simple and clean design.",
    product_price: "3.50",
    
    subcategoryId: 53
  },
  {
    product_name: "Heavy-Duty Anchor Bolts",
    product_description: "Anchor bolts for securing structures to concrete, featuring heavy-duty construction for high load capacity.",
    product_price: "15.00",
    
    subcategoryId: 53
  },
  {
    product_name: "Steel Corner Braces",
    product_description: "Reinforced steel corner braces, designed to provide additional support and stability to furniture and frames.",
    product_price: "8.00",
    
    subcategoryId: 53
  },
  {
    product_name: "Decorative Cabinet Knobs",
    product_description: "Stylish cabinet knobs, available in various designs to complement your home decor.",
    product_price: "4.00",
    
    subcategoryId: 53
  },
  {
    product_name: "Silicone Sealant",
    product_description: "Multipurpose silicone sealant, suitable for waterproof sealing in bathrooms, kitchens, and windows.",
    product_price: "7.00",
    
    subcategoryId: 53
  },
  {
    product_name: "Padlock",
    product_description: "Solid and durable padlock, ideal for securing sheds, gates, and storage units.",
    product_price: "10.00",
    
    subcategoryId: 53
  },
  {
    product_name: "Furniture Sliders",
    product_description: "Easy-to-use furniture sliders, designed to protect floors and make moving heavy furniture effortless.",
    product_price: "6.00",
    
    subcategoryId: 53
  },
  {
    product_name: "Wall Anchors",
    product_description: "Plastic wall anchors for hanging shelves, frames, and decor items securely on drywall.",
    product_price: "2.50",
    
    subcategoryId: 53
  },
  // Subcategory ID: 54
  {
    product_name: "Copper Wiring",
    product_description: "High-quality copper wiring for electrical installations, offering excellent conductivity and flexibility.",
    product_price: "50.00",
    
    subcategoryId: 54
  },
  {
    product_name: "Circuit Breaker",
    product_description: "Reliable circuit breaker, designed to protect electrical circuits from overload and short circuits.",
    product_price: "30.00",
    
    subcategoryId: 54
  },
  {
    product_name: "Outlet Surge Protector",
    product_description: "Surge protector with multiple outlets, providing safety and protection for your electronic devices.",
    product_price: "20.00",
    
    subcategoryId: 54
  },
  {
    product_name: "Dimmer Switch",
    product_description: "Adjustable dimmer switch for controlling light levels, compatible with various types of light bulbs.",
    product_price: "15.00",
    
    subcategoryId: 54
  },
  {
    product_name: "Junction Box",
    product_description: "Durable junction box for electrical connections, designed to protect wiring from moisture and dust.",
    product_price: "10.00",
    
    subcategoryId: 54
  },
  {
    product_name: "Electrical Tape",
    product_description: "Insulating electrical tape, essential for safely wrapping and protecting electrical wires.",
    product_price: "3.00",
    
    subcategoryId: 54
  },
  {
    product_name: "Voltage Tester",
    product_description: "Handheld voltage tester, an essential tool for safely checking electrical circuits and outlets.",
    product_price: "12.00",
    
    subcategoryId: 54
  },
  {
    product_name: "Wire Connectors",
    product_description: "Assorted wire connectors for joining and insulating electrical wires in various installations.",
    product_price: "5.00",
    
    subcategoryId: 54
  },
  {
    product_name: "USB Wall Outlet",
    product_description: "Modern wall outlet with built-in USB ports, providing convenient charging for devices without adapters.",
    product_price: "25.00",
    
    subcategoryId: 54
  },
  {
    product_name: "Electric Meter",
    product_description: "Digital electric meter for monitoring energy consumption, featuring an easy-to-read display.",
    product_price: "60.00",
    
    subcategoryId: 54
  },
  // Subcategory ID: 55
  {
    product_name: "Acrylic Latex Paint",
    product_description: "Water-based acrylic latex paint, offering excellent coverage and durability for interior walls.",
    product_price: "28.00",
    
    subcategoryId: 55
  },
  {
    product_name: "Oil-Based Primer",
    product_description: "High-quality oil-based primer, ideal for preparing surfaces for painting, enhancing paint adhesion and longevity.",
    product_price: "22.00",
    
    subcategoryId: 55
  },
  {
    product_name: "Spray Paint",
    product_description: "Versatile spray paint, suitable for a wide range of surfaces including metal, wood, and plastic.",
    product_price: "7.99",
    
    subcategoryId: 55
  },
  {
    product_name: "Chalkboard Paint",
    product_description: "Black chalkboard paint, transforming surfaces into writable and erasable chalkboards for creative projects.",
    product_price: "15.00",
    
    subcategoryId: 55
  },
  {
    product_name: "Exterior Paint",
    product_description: "Durable exterior paint, formulated to withstand harsh weather conditions and protect outdoor surfaces.",
    product_price: "35.00",
    
    subcategoryId: 55
  },
  {
    product_name: "Wood Stain",
    product_description: "Premium wood stain, enhancing the natural beauty of wood while providing protection against moisture and wear.",
    product_price: "18.00",
    
    subcategoryId: 55
  },
  {
    product_name: "Ceiling Paint",
    product_description: "Specially formulated ceiling paint, designed to reduce drips and splatters for a smooth, flawless finish.",
    product_price: "25.00",
    
    subcategoryId: 55
  },
  {
    product_name: "Mold Resistant Paint",
    product_description: "Mold resistant paint, ideal for bathrooms, kitchens, and other high-moisture areas to prevent mold growth.",
    product_price: "30.00",
    
    subcategoryId: 55
  },
  {
    product_name: "Glow-in-the-Dark Paint",
    product_description: "Fun glow-in-the-dark paint, perfect for kids' rooms, crafts, and safety markings.",
    product_price: "10.00",
    
    subcategoryId: 55
  },
  {
    product_name: "High-Gloss Enamel",
    product_description: "High-gloss enamel paint, providing a durable and shiny finish for trim, doors, and cabinets.",
    product_price: "20.00",
    
    subcategoryId: 55
  },
  // Subcategory ID: 56
  {
    product_name: "Vinyl Wallpaper",
    product_description: "Durable vinyl wallpaper, easy to clean and ideal for high-traffic areas, available in various patterns.",
    product_price: "40.00",
    
    subcategoryId: 56
  },
  {
    product_name: "Non-Woven Wallpaper",
    product_description: "Breathable non-woven wallpaper, easy to install and remove, perfect for creating stylish and modern interiors.",
    product_price: "35.00",
    
    subcategoryId: 56
  },
  {
    product_name: "Textured Wallpaper",
    product_description: "Textured wallpaper, adding depth and dimension to walls with its unique patterns and tactile surface.",
    product_price: "50.00",
    
    subcategoryId: 56
  },
  {
    product_name: "Foil Wallpaper",
    product_description: "Shiny foil wallpaper, creating a luxurious and reflective surface, ideal for feature walls.",
    product_price: "60.00",
    
    subcategoryId: 56
  },
  {
    product_name: "Grasscloth Wallpaper",
    product_description: "Natural grasscloth wallpaper, providing a warm and organic texture, made from renewable resources.",
    product_price: "70.00",
    
    subcategoryId: 56
  },
  {
    product_name: "Geometric Pattern Wallpaper",
    product_description: "Contemporary geometric pattern wallpaper, offering a bold and modern aesthetic for any space.",
    product_price: "45.00",
    
    subcategoryId: 56
  },
  {
    product_name: "Floral Print Wallpaper",
    product_description: "Elegant floral print wallpaper, bringing a touch of nature indoors with its detailed and colorful designs.",
    product_price: "55.00",
    
    subcategoryId: 56
  },
  {
    product_name: "Mural Wallpaper",
    product_description: "Large-scale mural wallpaper, transforming rooms with breathtaking landscapes or artistic designs.",
    product_price: "120.00",
    
    subcategoryId: 56
  },
  {
    product_name: "Children's Wallpaper",
    product_description: "Fun and playful wallpaper for children's rooms, featuring vibrant colors and whimsical patterns.",
    product_price: "30.00",
    
    subcategoryId: 56
  },
  {
    product_name: "Removable Wallpaper",
    product_description: "Easy-to-use removable wallpaper, perfect for renters and temporary decor changes, leaves no residue.",
    product_price: "25.00",
    
    subcategoryId: 56
  },
  {
    product_name: "Laminate Flooring",
    product_description: "Durable laminate flooring, offering the look of hardwood without the maintenance, easy to install.",
    product_price: "2.50",
    
    subcategoryId: 57
  },
  {
    product_name: "Ceramic Floor Tiles",
    product_description: "High-quality ceramic floor tiles, water-resistant and perfect for bathrooms and kitchens.",
    product_price: "1.50",
    
    subcategoryId: 57
  },
  {
    product_name: "Vinyl Plank Flooring",
    product_description: "Waterproof vinyl plank flooring, mimicking the appearance of wood, ideal for high-moisture areas.",
    product_price: "3.00",
    
    subcategoryId: 57
  },
  {
    product_name: "Bamboo Flooring",
    product_description: "Eco-friendly bamboo flooring, known for its durability and unique aesthetic.",
    product_price: "4.00",
    
    subcategoryId: 57
  },
  {
    product_name: "Porcelain Floor Tiles",
    product_description: "Premium porcelain floor tiles, extremely durable and suitable for both indoor and outdoor use.",
    product_price: "4.50",
    
    subcategoryId: 57
  },
  {
    product_name: "Carpet Tiles",
    product_description: "Easy-to-install carpet tiles, offering flexibility in design and comfort underfoot.",
    product_price: "1.00",
    
    subcategoryId: 57
  },
  {
    product_name: "Engineered Hardwood Flooring",
    product_description: "Engineered hardwood flooring, providing the beauty of hardwood with added stability and resistance to moisture.",
    product_price: "5.00",
    
    subcategoryId: 57
  },
  {
    product_name: "Stone Floor Tiles",
    product_description: "Natural stone floor tiles, adding elegance and character to any space with their unique textures.",
    product_price: "6.00",
    
    subcategoryId: 57
  },
  {
    product_name: "Cork Flooring",
    product_description: "Sustainable cork flooring, offering a soft, warm surface that's comfortable to walk on and sound-absorbing.",
    product_price: "3.50",
    
    subcategoryId: 57
  },
  {
    product_name: "Rubber Flooring",
    product_description: "Durable rubber flooring, ideal for gyms, playrooms, and other high-impact areas, easy to clean and maintain.",
    product_price: "2.00",
    
    subcategoryId: 57
  },
  {
    product_name: "Chrome Faucet",
    product_description: "Sleek chrome faucet with a modern design, featuring water-saving technology.",
    product_price: "75.00",
    
    subcategoryId: 58
  },
  {
    product_name: "PVC Piping",
    product_description: "Durable PVC piping, suitable for various plumbing applications, resistant to corrosion and chemicals.",
    product_price: "2.00",
    
    subcategoryId: 58
  },
  {
    product_name: "Dual-Flush Toilet",
    product_description: "High-efficiency dual-flush toilet, saving water with two flush options for liquid or solid waste.",
    product_price: "200.00",
    
    subcategoryId: 58
  },
  {
    product_name: "Shower Head with Filter",
    product_description: "Shower head with built-in filter, reducing chlorine and other impurities for healthier skin and hair.",
    product_price: "50.00",
    
    subcategoryId: 58
  },
  {
    product_name: "Copper Fittings",
    product_description: "High-quality copper fittings for plumbing, ensuring durable and leak-free connections.",
    product_price: "3.00",
    
    subcategoryId: 58
  },
  {
    product_name: "Sump Pump",
    product_description: "Reliable sump pump, designed to prevent basement flooding by removing excess water.",
    product_price: "150.00",
    
    subcategoryId: 58
  },
  {
    product_name: "Tankless Water Heater",
    product_description: "Energy-efficient tankless water heater, providing hot water on demand and reducing energy costs.",
    product_price: "500.00",
    
    subcategoryId: 58
  },
  {
    product_name: "Silicone Caulk",
    product_description: "Flexible silicone caulk, perfect for sealing gaps in bathrooms and kitchens, waterproof and mold-resistant.",
    product_price: "8.00",
    
    subcategoryId: 58
  },
  {
    product_name: "Plumbing Snake",
    product_description: "Handheld plumbing snake, essential for quickly clearing clogs in drains and pipes.",
    product_price: "20.00",
    
    subcategoryId: 58
  },
  {
    product_name: "Water Softener System",
    product_description: "Whole house water softener system, reducing hard water minerals to extend the life of plumbing and appliances.",
    product_price: "600.00",
    
    subcategoryId: 58
  },
  {
    product_name: "Stainless Steel Mailbox",
    product_description: "Durable stainless steel mailbox, weather-resistant with a sleek and modern design.",
    product_price: "45.00",
    
    subcategoryId: 59
  },
  {
    product_name: "Post-Mount Mailbox",
    product_description: "Classic post-mount mailbox, easy to install and comes with a durable, powder-coated finish.",
    product_price: "30.00",
    
    subcategoryId: 59
  },
  {
    product_name: "Wall-Mounted Mailbox",
    product_description: "Space-saving wall-mounted mailbox, perfect for homes with limited outdoor space, includes secure lock.",
    product_price: "35.00",
    
    subcategoryId: 59
  },
  {
    product_name: "Parcel Drop Box",
    product_description: "Secure parcel drop box, ensuring safe delivery of packages, features tamper-proof design.",
    product_price: "120.00",
    
    subcategoryId: 59
  },
  {
    product_name: "Mailbox with Newspaper Holder",
    product_description: "Convenient mailbox with an integrated newspaper holder, keeping your mail and newspapers organized.",
    product_price: "55.00",
    
    subcategoryId: 59
  },
  {
    product_name: "Vintage Mailbox",
    product_description: "Decorative vintage mailbox, adding a charming touch to your home's exterior.",
    product_price: "70.00",
    
    subcategoryId: 59
  },
  {
    product_name: "Locking Mailbox",
    product_description: "Secure locking mailbox, protecting your mail from theft, made from heavy-duty materials.",
    product_price: "65.00",
    
    subcategoryId: 59
  },
  {
    product_name: "Custom Mailbox",
    product_description: "Personalized custom mailbox, designed to match your home's style and colors.",
    product_price: "90.00",
    
    subcategoryId: 59
  },
  {
    product_name: "Mailbox Post",
    product_description: "Durable mailbox post, compatible with most mailboxes, includes mounting hardware for easy installation.",
    product_price: "25.00",
    
    subcategoryId: 59
  },
  {
    product_name: "Reflective Mailbox Numbers",
    product_description: "Easy-to-apply reflective mailbox numbers, ensuring your address is visible even at night.",
    product_price: "10.00",
    
    subcategoryId: 59
  },
  {
    product_name: "Screwdriver Set",
    product_description: "Comprehensive screwdriver set, including various sizes and types for all your DIY needs.",
    product_price: "15.00",
    
    subcategoryId: 60
  },
  {
    product_name: "Hammer",
    product_description: "Durable claw hammer, designed for driving nails and pulling them out with ease.",
    product_price: "10.00",
    
    subcategoryId: 60
  },
  {
    product_name: "Adjustable Wrench",
    product_description: "Versatile adjustable wrench, suitable for a wide range of nuts and bolts.",
    product_price: "12.00",
    
    subcategoryId: 60
  },
  {
    product_name: "Pliers Set",
    product_description: "Assorted pliers set, including needle-nose, slip-joint, and cutting pliers for various tasks.",
    product_price: "20.00",
    
    subcategoryId: 60
  },
  {
    product_name: "Utility Knife",
    product_description: "Sharp and reliable utility knife, essential for cutting through materials with precision.",
    product_price: "7.00",
    
    subcategoryId: 60
  },
  {
    product_name: "Tape Measure",
    product_description: "Compact tape measure, featuring a durable and easy-to-read blade for accurate measurements.",
    product_price: "5.00",
    
    subcategoryId: 60
  },
  {
    product_name: "Level",
    product_description: "High-precision level, ensuring your projects are perfectly aligned and balanced.",
    product_price: "15.00",
    
    subcategoryId: 60
  },
  {
    product_name: "Chisel Set",
    product_description: "Quality chisel set, ideal for woodworking and carving tasks, made from high-carbon steel.",
    product_price: "25.00",
    
    subcategoryId: 60
  },
  {
    product_name: "Allen Wrench Set",
    product_description: "Complete Allen wrench set, covering a range of sizes for assembling furniture and bicycles.",
    product_price: "8.00",
    
    subcategoryId: 60
  },
  {
    product_name: "Soldering Iron",
    product_description: "Precision soldering iron, perfect for electronics repair and crafting, with adjustable temperature control.",
    product_price: "20.00",
    
    subcategoryId: 60
  },
  {
    product_name: "Cordless Drill",
    product_description: "Powerful cordless drill, featuring variable speed control and a long-lasting battery, ideal for a variety of outdoor projects.",
    product_price: "100.00",
    
    subcategoryId: 61
  },
  {
    product_name: "Leaf Blower",
    product_description: "High-efficiency leaf blower, making yard cleanup quick and easy, with multiple speed settings.",
    product_price: "70.00",
    
    subcategoryId: 61
  },
  {
    product_name: "Pressure Washer",
    product_description: "Versatile pressure washer, perfect for cleaning decks, patios, and siding, with adjustable pressure settings.",
    product_price: "150.00",
    
    subcategoryId: 61
  },
  {
    product_name: "Chainsaw",
    product_description: "Robust chainsaw, ideal for cutting through thick branches and trees, features a safety brake.",
    product_price: "120.00",
    
    subcategoryId: 61
  },
  {
    product_name: "Hedge Trimmer",
    product_description: "Cordless hedge trimmer, designed for shaping and maintaining hedges, with long battery life.",
    product_price: "80.00",
    
    subcategoryId: 61
  },
  {
    product_name: "Lawn Mower",
    product_description: "Efficient lawn mower, suitable for various grass types, featuring adjustable cutting heights.",
    product_price: "200.00",
    
    subcategoryId: 61
  },
  {
    product_name: "Garden Tiller",
    product_description: "Compact garden tiller, perfect for preparing soil for planting, easy to maneuver in tight spaces.",
    product_price: "250.00",
    
    subcategoryId: 61
  },
  {
    product_name: "Post Hole Digger",
    product_description: "Manual post hole digger, simplifying the process of digging holes for fencing and planting.",
    product_price: "40.00",
    
    subcategoryId: 61
  },
  {
    product_name: "Wheelbarrow",
    product_description: "Durable wheelbarrow, essential for transporting soil, mulch, and garden waste, with a sturdy construction.",
    product_price: "60.00",
    
    subcategoryId: 61
  },
  {
    product_name: "Outdoor Fire Pit",
    product_description: "Stylish outdoor fire pit, enhancing your backyard ambiance, perfect for gatherings and roasting marshmallows.",
    product_price: "150.00",
    
    subcategoryId: 61
  },          
  // Automotive Subcategory 52: Exterior Accessories
  {
    product_name: "Aero Fin Spoiler",
    product_description: "Enhances vehicle aerodynamics and style with a sleek, custom-fit design.",
    product_price: "200",
    subcategoryId: 62,
  },
  {
    product_name: "LED Light Bar",
    product_description: "High-intensity LED light bar for improved visibility and off-road aesthetics.",
    product_price: "150",
    subcategoryId: 62,
  },
  {
    product_name: "Chrome Grill Overlay",
    product_description: "Durable, chrome-plated overlay for a premium front grille look.",
    product_price: "120",
    subcategoryId: 62,
  },
  {
    product_name: "Magnetic Car Cover",
    product_description: "Weatherproof magnetic cover for quick protection against elements.",
    product_price: "80",
    subcategoryId: 62,
  },
  {
    product_name: "Carbon Fiber Mirror Caps",
    product_description: "Lightweight, durable carbon fiber caps for side mirrors, enhancing style and aerodynamics.",
    product_price: "90",
    subcategoryId: 62,
  },
  {
    product_name: "Hitch Mounted Bike Rack",
    product_description: "Sturdy, easy-to-install bike rack for hitch mounting, holds up to 4 bikes securely.",
    product_price: "200",
    subcategoryId: 62,
  },
  {
    product_name: "Universal Roof Rack",
    product_description: "Adjustable roof rack for extra cargo space, fits most vehicle types.",
    product_price: "150",
    subcategoryId: 62,
  },
  {
    product_name: "Retractable Bed Cover",
    product_description: "Secure, retractable cover for pickup truck beds, offering protection and easy access.",
    product_price: "400",
    subcategoryId: 62,
  },
  {
    product_name: "Fender Flares",
    product_description: "Robust fender flares for enhanced wheel well coverage and rugged appearance.",
    product_price: "250",
    subcategoryId: 62,
  },
  {
    product_name: "Door Handle Protectors",
    product_description: "Scratch-resistant protectors for vehicle door handles, preserving paint and finish.",
    product_price: "30",
    subcategoryId: 62,
  },

  // Subcategory 53: Interior Accessories
  {
    product_name: "Custom Seat Covers",
    product_description: "Tailor-made seat covers for vehicle-specific fit, available in various materials and colors.",
    product_price: "150",
    subcategoryId: 63,
  },
  {
    product_name: "Dashboard Mat",
    product_description: "Non-slip, UV-resistant mat to protect and reduce glare on the dashboard.",
    product_price: "40",
    subcategoryId: 63,
  },
  {
    product_name: "Wireless Charging Pad",
    product_description: "Seamlessly integrates with your car's interior for convenient wireless charging.",
    product_price: "60",
    subcategoryId: 63,
  },
  {
    product_name: "Steering Wheel Cover",
    product_description: "Comfortable, durable cover for a better grip and personalized steering wheel look.",
    product_price: "25",
    subcategoryId: 63,
  },
  {
    product_name: "All-Weather Floor Mats",
    product_description: "Heavy-duty floor mats to protect vehicle's interior from dirt, water, and wear.",
    product_price: "100",
    subcategoryId: 63,
  },
  {
    product_name: "Rear View Mirror Dash Cam",
    product_description: "Dual-lens dash cam that attaches to the rearview mirror for front and rear recording.",
    product_price: "120",
    subcategoryId: 63,
  },
  {
    product_name: "Car Fragrance Diffuser",
    product_description: "Elegant diffuser with a variety of scents to enhance the vehicle's interior ambiance.",
    product_price: "20",
    subcategoryId: 63,
  },
  {
    product_name: "Sunshade Organizer",
    product_description: "Multi-pocket organizer that attaches to the sun visor, keeping essentials at hand.",
    product_price: "15",
    subcategoryId: 63,
  },
  {
    product_name: "Retractable Trunk Divider",
    product_description: "Adjustable divider to organize and secure items in the trunk space.",
    product_price: "70",
    subcategoryId: 63,
  },
  {
    product_name: "Heated Seat Cushion",
    product_description: "Portable seat cushion with adjustable heating, for added comfort during cold days.",
    product_price: "50",
    subcategoryId: 63,
  },

  // Subcategory 54: Car Care
  {
    product_name: "Hydrophobic Wax Polish",
    product_description: "Long-lasting wax polish that provides a hydrophobic layer, repelling water and dirt.",
    product_price: "25",
    subcategoryId: 64,
  },
  {
    product_name: "Microfiber Detailing Towels",
    product_description: "Ultra-soft microfiber towels for scratch-free cleaning and polishing.",
    product_price: "15",
    subcategoryId: 64,
  },
  {
    product_name: "Tire Shine Spray",
    product_description: "Easy-to-apply spray for a long-lasting, wet-look shine on tires.",
    product_price: "10",
    subcategoryId: 64,
  },
  {
    product_name: "Alloy Wheel Cleaner",
    product_description: "Powerful cleaner that removes brake dust and grime from alloy wheels without damage.",
    product_price: "12",
    subcategoryId: 64,
  },
  {
    product_name: "Leather Conditioner",
    product_description: "Restores and protects leather interiors, preventing cracks and fading.",
    product_price: "20",
    subcategoryId: 64,
  },
  {
    product_name: "Scratch Remover",
    product_description: "Effectively minimizes the appearance of superficial scratches and scuffs on the paint.",
    product_price: "18",
    subcategoryId: 64,
  },
  {
    product_name: "Engine Degreaser",
    product_description: "Powerful degreaser for removing oil, grease, and grime from engine components.",
    product_price: "15",
    subcategoryId: 64,
  },
  {
    product_name: "Headlight Restoration Kit",
    product_description: "Complete kit for restoring clarity and shine to dulled or yellowed headlights.",
    product_price: "30",
    subcategoryId: 64,
  },
  {
    product_name: "Convertible Top Cleaner",
    product_description: "Specially formulated cleaner for fabric and vinyl convertible tops, protecting against elements.",
    product_price: "20",
    subcategoryId: 64,
  },
  {
    product_name: "Interior Detailing Kit",
    product_description: "Comprehensive kit for deep cleaning and protecting vehicle interiors, including upholstery and surfaces.",
    product_price: "50",
    subcategoryId: 64,
  },

  // Subcategory 55: Wheels & Tires
  {
    product_name: "Performance Alloy Wheels",
    product_description: "Lightweight alloy wheels designed for improved vehicle handling and aesthetics.",
    product_price: "800",
    subcategoryId: 65,
  },
  {
    product_name: "All-Terrain Tires",
    product_description: "Durable tires designed for optimal performance on and off the road.",
    product_price: "150",
    subcategoryId: 65,
  },
  {
    product_name: "Run-Flat Tires",
    product_description: "Specially designed tires that allow you to continue driving at reduced speeds even after a puncture.",
    product_price: "200",
    subcategoryId: 65,
  },
  {
    product_name: "Wheel Lock Set",
    product_description: "A set of tamper-resistant locks to protect your wheels from theft.",
    product_price: "40",
    subcategoryId: 65,
  },
  {
    product_name: "Tire Pressure Monitoring System",
    product_description: "Advanced system that monitors tire pressure in real-time, alerting you to any issues.",
    product_price: "100",
    subcategoryId: 65,
  },
  {
    product_name: "Custom Wheel Covers",
    product_description: "Stylish covers available in various designs to enhance your vehicle's appearance.",
    product_price: "60",
    subcategoryId: 65,
  },
  {
    product_name: "High-Performance Brake Kit",
    product_description: "Upgrade kit for enhanced braking performance and reliability.",
    product_price: "500",
    subcategoryId: 65,
  },
  {
    product_name: "Off-Road Wheel Kit",
    product_description: "Rugged wheel and tire kit designed for optimal off-road performance.",
    product_price: "1200",
    subcategoryId: 65,
  },
  {
    product_name: "Snow Chains",
    product_description: "Durable chains to enhance tire traction in snowy or icy conditions.",
    product_price: "80",
    subcategoryId: 65,
  },
  {
    product_name: "Tire Inflation and Repair Kit",
    product_description: "Portable kit for quick tire inflation and puncture repairs on the go.",
    product_price: "30",
    subcategoryId: 65,
  },

  // Subcategory 56: Electronics & Gadgets
  {
    product_name: "Dashcam with Night Vision",
    product_description: "High-definition dashcam with night vision capabilities for round-the-clock recording.",
    product_price: "120",
    subcategoryId: 66,
  },
  {
    product_name: "Bluetooth Car Kit",
    product_description: "Hands-free Bluetooth kit for calls and music, compatible with most vehicles.",
    product_price: "50",
    subcategoryId: 66,
  },
  {
    product_name: "Vehicle GPS Tracker",
    product_description: "Compact GPS tracker for real-time vehicle tracking and security.",
    product_price: "75",
    subcategoryId: 66,
  },
  {
    product_name: "Head-Up Display",
    product_description: "Futuristic display that projects important information onto the windshield.",
    product_price: "150",
    subcategoryId: 66,
  },
  {
    product_name: "Rearview Camera System",
    product_description: "Backup camera with display for improved visibility and safety while reversing.",
    product_price: "100",
    subcategoryId: 66,
  },
  {
    product_name: "Car Diagnostic Scanner",
    product_description: "Easy-to-use scanner for DIY vehicle diagnostics and error code reading.",
    product_price: "90",
    subcategoryId: 66,
  },
  {
    product_name: "Portable Car Heater",
    product_description: "Compact heater that plugs into your vehicle's 12V outlet, ideal for cold mornings.",
    product_price: "40",
    subcategoryId: 66,
  },
  {
    product_name: "Wireless Car Charger",
    product_description: "Convenient wireless charging pad for smartphones, fitting in the cup holder or dashboard.",
    product_price: "60",
    subcategoryId: 66,
  },
  {
    product_name: "Digital Tire Inflator",
    product_description: "Portable digital tire inflator with automatic shutoff feature for precise inflation.",
    product_price: "50",
    subcategoryId: 66,
  },
  {
    product_name: "Vehicle Health Monitor",
    product_description: "Plug-in device that monitors vehicle health and sends alerts to your smartphone.",
    product_price: "100",
    subcategoryId: 66,
  },

  // Subcategory 57: Fluids & Chemicals
  {
    product_name: "Synthetic Engine Oil",
    product_description: "High-performance synthetic oil for enhanced engine protection and efficiency.",
    product_price: "30",
    subcategoryId: 67,
  },
  {
    product_name: "Radiator Coolant",
    product_description: "Premium coolant offering superior engine cooling and anti-freeze protection.",
    product_price: "25",
    subcategoryId: 67,
  },
  {
    product_name: "Brake Fluid",
    product_description: "High-quality brake fluid for reliable braking performance under all conditions.",
    product_price: "15",
    subcategoryId: 67,
  },
  {
    product_name: "Transmission Fluid",
    product_description: "Specially formulated transmission fluid for smooth shifting and extended transmission life.",
    product_price: "20",
    subcategoryId: 67,
  },
  {
    product_name: "Fuel Injector Cleaner",
    product_description: "Powerful cleaner that removes deposits and improves fuel injector performance.",
    product_price: "12",
    subcategoryId: 67,
  },
  {
    product_name: "Car Wash Soap",
    product_description: "Concentrated soap formula for a streak-free shine and paint protection.",
    product_price: "10",
    subcategoryId: 67,
  },
  {
    product_name: "Windshield Washer Fluid",
    product_description: "Effective washer fluid for clear visibility in all weather conditions.",
    product_price: "8",
    subcategoryId: 67,
  },
  {
    product_name: "Power Steering Fluid",
    product_description: "Premium fluid designed to ensure smooth and responsive steering.",
    product_price: "18",
    subcategoryId: 67,
  },
  {
    product_name: "Air Conditioning Refrigerant",
    product_description: "Refrigerant for recharging your vehicle's air conditioning system for optimal cooling.",
    product_price: "35",
    subcategoryId: 67,
  },
  {
    product_name: "Gasket Maker",
    product_description: "High-temperature gasket maker for sealing engine parts against leaks.",
    product_price: "10",
    subcategoryId: 67,
  },

  // Subcategory 58: Auto Parts
  {
    product_name: "Performance Air Filter",
    product_description: "High-flow air filter for improved horsepower and acceleration.",
    product_price: "50",
    subcategoryId: 68,
  },
  {
    product_name: "LED Headlight Conversion Kit",
    product_description: "Kit for upgrading to bright, energy-efficient LED headlights.",
    product_price: "100",
    subcategoryId: 68,
  },
  {
    product_name: "Ceramic Brake Pads",
    product_description: "Low-dust ceramic brake pads for superior stopping power and quiet operation.",
    product_price: "70",
    subcategoryId: 68,
  },
  {
    product_name: "Adjustable Suspension Coilovers",
    product_description: "Coilover suspension kit for adjustable ride height and improved handling.",
    product_price: "500",
    subcategoryId: 68,
  },
  {
    product_name: "Stainless Steel Exhaust",
    product_description: "High-performance exhaust system for enhanced sound and exhaust flow.",
    product_price: "300",
    subcategoryId: 68,
  },
  {
    product_name: "Turbocharger Kit",
    product_description: "Complete turbocharger kit for significant boosts in engine power and torque.",
    product_price: "1500",
    subcategoryId: 68,
  },
  {
    product_name: "Alternator",
    product_description: "Reliable alternator for optimal electrical system performance and battery charging.",
    product_price: "150",
    subcategoryId: 68,
  },
  {
    product_name: "Radiator",
    product_description: "High-efficiency radiator designed to prevent overheating in all driving conditions.",
    product_price: "120",
    subcategoryId: 68,
  },
  {
    product_name: "Fuel Pump",
    product_description: "Durable fuel pump for consistent fuel delivery and engine performance.",
    product_price: "100",
    subcategoryId: 68,
  },
  {
    product_name: "Clutch Kit",
    product_description: "Complete clutch kit for smooth gear transitions and enhanced drivetrain response.",
    product_price: "250", subcategoryId: 68,
  },

  // Subcategory 59: Tools & Equipment
  {
    product_name: "Mechanic's Tool Set",
    product_description: "Comprehensive tool set with wrenches, sockets, and ratchets for various automotive repairs.",
    product_price: "200",
    subcategoryId: 69,
  },
  {
    product_name: "Floor Jack",
    product_description: "Heavy-duty floor jack with a high lifting capacity for easy vehicle maintenance.",
    product_price: "150",
    subcategoryId: 69,
  },
  {
    product_name: "Torque Wrench",
    product_description: "Precision torque wrench for accurate tightening of bolts to specified torque values.",
    product_price: "100",
    subcategoryId: 69,
  },
  {
    product_name: "OBD II Scanner",
    product_description: "Advanced OBD II scanner for reading, diagnosing, and clearing engine codes.",
    product_price: "120",
    subcategoryId: 69,
  },
  {
    product_name: "Battery Charger",
    product_description: "Versatile battery charger with multiple charging modes for automotive batteries.",
    product_price: "80",
    subcategoryId: 69,
  },
  {
    product_name: "Work Light",
    product_description: "Bright, durable work light for illuminating work areas during night-time repairs.",
    product_price: "40",
    subcategoryId: 69,
  },
  {
    product_name: "Air Compressor",
    product_description: "Portable air compressor for inflating tires and powering pneumatic tools.",
    product_price: "130",
    subcategoryId: 69,
  },
  {
    product_name: "Creeper Seat",
    product_description: "Comfortable creeper seat with tool trays, making under-vehicle work easier and more efficient.",
    product_price: "60",
    subcategoryId: 69,
  },
  {
    product_name: "Impact Wrench",
    product_description: "Powerful impact wrench for loosening tough bolts and speeding up tire changes.",
    product_price: "200",
    subcategoryId: 69,
  },
  {
    product_name: "Diagnostic Testing Kit",
    product_description: "Comprehensive automotive testing kit for engine, transmission, and electrical system diagnostics.",
    product_price: "300",
    subcategoryId: 69,
  },
  {
    product_name: "Echoes of Tomorrow",
    product_description: "A thrilling sci-fi novel that takes you on a journey through time.",
    product_price: "15",
    
    subcategoryId: 70
  },
  {
    product_name: "The Last Symphony",
    product_description: "A gripping mystery novel set against the backdrop of classical music.",
    product_price: "18",
    
    subcategoryId: 70
  },
  {
    product_name: "Shadows of the Past",
    product_description: "An engaging historical fiction that explores the depth of human emotions.",
    product_price: "20",
    
    subcategoryId: 70
  },
  {
    product_name: "Heart of the Ocean",
    product_description: "A romance novel that tells a poignant story of love and loss at sea.",
    product_price: "16",
    
    subcategoryId: 70
  },
  {
    product_name: "The Quantum Thief",
    product_description: "A cutting-edge science fiction novel exploring the possibilities of quantum technology.",
    product_price: "22",
    
    subcategoryId: 70
  },
  {
    product_name: "Gardens of the Moon",
    product_description: "An epic fantasy novel that begins the tale of the Malazan Book of the Fallen.",
    product_price: "19",
    
    subcategoryId: 70
  },
  {
    product_name: "The Silent Witness",
    product_description: "A captivating crime novel that will keep you guessing till the very end.",
    product_price: "17",
    
    subcategoryId: 70
  },
  {
    product_name: "Whispers in the Dark",
    product_description: "A spine-chilling horror novel that explores the supernatural.",
    product_price: "18",
    
    subcategoryId: 70
  },
  {
    product_name: "Fragments of Tomorrow",
    product_description: "A post-apocalyptic novel that explores the resilience of humanity.",
    product_price: "20",
    
    subcategoryId: 70
  },
  {
    product_name: "Rivers of Time",
    product_description: "A compelling novel that weaves together multiple timelines into a single, mesmerizing story.",
    product_price: "21",
    
    subcategoryId: 70
  },
  {
    product_name: "Cybernetic Dreams",
    product_description: "An anthology of cyberpunk short stories from various acclaimed authors.",
    product_price: "14",
    
    subcategoryId: 71
  },
  {
    product_name: "Tales of the Unknown",
    product_description: "A collection of fantasy stories that transport readers to magical realms.",
    product_price: "16",
    
    subcategoryId: 71
  },
  {
    product_name: "Echoes of the Void",
    product_description: "A space opera that explores the vastness and mysteries of the universe.",
    product_price: "23",
    
    subcategoryId: 71
  },
  {
    product_name: "Underworld Chronicles",
    product_description: "A dark fantasy series that delves into the depths of underworld mythology.",
    product_price: "19",
    
    subcategoryId: 71
  },
  {
    product_name: "Mysteries Unveiled",
    product_description: "A series of detective stories that unravel complex mysteries.",
    product_price: "17",
    
    subcategoryId: 71
  },
  {
    product_name: "Legends Reborn",
    product_description: "A collection of reimagined myths and legends from cultures around the world.",
    product_price: "20",
    
    subcategoryId: 71
  },
  {
    product_name: "Futuristic Visions",
    product_description: "A compendium of science fiction tales that envision the future of humanity.",
    product_price: "22",
    
    subcategoryId: 71
  },
  {
    product_name: "Haunting of the Night",
    product_description: "A collection of ghost stories that explore the paranormal and the unknown.",
    product_price: "15",
    
    subcategoryId: 71
  },
  {
    product_name: "Chronicles of Courage",
    product_description: "Historical fiction that highlights bravery and heroism through the ages.",
    product_price: "18",
    
    subcategoryId: 71
  },
  {
    product_name: "Tales from the Crypt",
    product_description: "An anthology of horror stories that will send shivers down your spine.",
    product_price: "16",
    
    subcategoryId: 71
  },
  {
    product_name: "Mindful Growth",
    product_description: "A guide to personal development and mindfulness for a fulfilling life.",
    product_price: "24",
    
    subcategoryId: 72
  },
  {
    product_name: "Leadership in Action",
    product_description: "Insights from successful leaders on effective leadership and management.",
    product_price: "30",
    
    subcategoryId: 72
  },
  {
    product_name: "Creative Thinking",
    product_description: "Techniques and exercises to enhance creativity and innovative thinking.",
    product_price: "22",
    
    subcategoryId: 72
  },
  {
    product_name: "Financial Wisdom",
    product_description: "Practical advice on managing finances, investing, and building wealth.",
    product_price: "27",
    
    subcategoryId: 72
  },
  {
    product_name: "Healthy Habits",
    product_description: "A comprehensive guide to building a healthy lifestyle through diet and exercise.",
    product_price: "25",
    
    subcategoryId: 72
  },
  {
    product_name: "Digital Mastery",
    product_description: "Skills and strategies for succeeding in the digital age, from social media to online marketing.",
    product_price: "29",
    
    subcategoryId: 72
  },
  {
    product_name: "The Art of Communication",
    product_description: "Mastering the art of effective communication in personal and professional settings.",
    product_price: "26",
    
    subcategoryId: 72
  },
  {
    product_name: "Strategic Thinking",
    product_description: "Developing a strategic mindset for business and personal growth.",
    product_price: "28",
    
    subcategoryId: 72
  },
  {
    product_name: "Cultural Intelligence",
    product_description: "Understanding and navigating diverse cultures for personal and business success.",
    product_price: "23",
    
    subcategoryId: 72
  },
  {
    product_name: "Peak Performance",
    product_description: "Techniques for achieving peak performance in sports, business, and personal life.",
    product_price: "30",
    
    subcategoryId: 72
  },
  {
    product_name: "Magical Adventures",
    product_description: "A collection of enchanting stories for children, filled with magic and wonder.",
    product_price: "12",
    
    subcategoryId: 73
  },
  {
    product_name: "Journey Through Space",
    product_description: "An educational adventure through the cosmos for young astronomers.",
    product_price: "14",
    
    subcategoryId: 73
  },
  {
    product_name: "Fables of the Forest",
    product_description: "Timeless tales of animals and nature that teach valuable life lessons.",
    product_price: "13",
    
    subcategoryId: 73
  },
  {
    product_name: "Pirate's Treasure",
    product_description: "A thrilling tale of adventure on the high seas, perfect for young explorers.",
    product_price: "15",
    
    subcategoryId: 73
  },
  {
    product_name: "Dinosaur World",
    product_description: "Step back in time and explore the world of dinosaurs in this exciting book for kids.",
    product_price: "16",
    
    subcategoryId: 73
  },
  {
    product_name: "The Wizard's Apprentice",
    product_description: "A magical story of a young apprentice learning the secrets of wizardry.",
    product_price: "11",
    
    subcategoryId: 73
  },
  {
    product_name: "Underwater Kingdom",
    product_description: "Discover the mysteries of the deep sea in this captivating story for children.",
    product_price: "14",
    
    subcategoryId: 73
  },
  {
    product_name: "Heroes of Myth",
    product_description: "Epic tales of heroes and gods from ancient myths, adapted for young readers.",
    product_price: "13",
    
    subcategoryId: 73
  },
  {
    product_name: "The Enchanted Forest",
    product_description: "An adventurous journey through a magical forest filled with fantastical creatures.",
    product_price: "12",
    
    subcategoryId: 73
  },
  {
    product_name: "Space Cadets",
    product_description: "Join the Space Cadets on their exciting missions across the galaxy in this adventurous series for kids.",
    product_price: "15",
    
    subcategoryId: 73
  },
  {
    product_name: "Voices of Inspiration",
    product_description: "Motivational stories narrated by famous personalities to inspire and uplift.",
    product_price: "25",
    
    subcategoryId: 74
  },
  {
    product_name: "Starlight Tales",
    product_description: "Fairy tales and bedtime stories brought to life by the soothing voices of celebrities.",
    product_price: "22",
    
    subcategoryId: 74
  },
  {
    product_name: "Legendary Lives",
    product_description: "Biographies of historical figures narrated by renowned actors and actresses.",
    product_price: "30",
    
    subcategoryId: 74
  },
  {
    product_name: "Mysteries Unraveled",
    product_description: "Engrossing mystery novels narrated by award-winning voice actors.",
    product_price: "27",
    
    subcategoryId: 74
  },
  {
    product_name: "Echoes of the Stage",
    product_description: "Famous plays and theatrical works narrated by acclaimed stage actors.",
    product_price: "29",
    
    subcategoryId: 74
  },
  {
    product_name: "Verses of the Stars",
    product_description: "A collection of poetry and prose narrated by well-known poets and celebrities.",
    product_price: "24",
    
    subcategoryId: 74
  },
  {
    product_name: "Cinematic Journeys",
    product_description: "Iconic movie scripts and screenplays narrated by famous film actors.",
    product_price: "28",
    
    subcategoryId: 74
  },
  {
    product_name: "Voices from the Past",
    product_description: "Historical speeches and documents narrated by influential public figures.",
    product_price: "26",
    
    subcategoryId: 74
  },
  {
    product_name: "Melodies of Words",
    product_description: "Music legends narrate their autobiographies, sharing their journey in their own words.",
    product_price: "30",
    
    subcategoryId: 74
  },
  {
    product_name: "Adventures in Voice",
    product_description: "Adventure novels and stories narrated by actors known for their dynamic voice work.",
    product_price: "27",
    
    subcategoryId: 74
  },                                                  
  // Outdoor, Fun, and Sports Subcategory 75: Cycling
  {
    product_name: "SpeedRacer 3000",
    product_description: "High-performance road bike with lightweight frame and aerodynamic design.",
    product_price: "900",
    subcategoryId: 75,
  },
  {
    product_name: "TrailBlazer MTB",
    product_description: "Durable mountain bike with full suspension for rugged terrain.",
    product_price: "1200",
    subcategoryId: 75,
  },
  {
    product_name: "Urban Commuter",
    product_description: "Sleek city bike with integrated gear system for smooth urban rides.",
    product_price: "700",
    subcategoryId: 75,
  },
  {
    product_name: "EcoRide Electric",
    product_description: "Eco-friendly electric bike with long-range battery and regenerative braking.",
    product_price: "1500",
    subcategoryId: 75,
  },
  {
    product_name: "Kids' Adventure Bike",
    product_description: "Colorful and safe bike for kids, perfect for learning and small adventures.",
    product_price: "300",
    subcategoryId: 75,
  },
  {
    product_name: "Fold-n-Go Bicycle",
    product_description: "Compact folding bike ideal for commuters and storing in tight spaces.",
    product_price: "800",
    subcategoryId: 75,
  },
  {
    product_name: "CycloCross Challenger",
    product_description: "Versatile cyclocross bike designed for racing and off-road trails.",
    product_price: "1100",
    subcategoryId: 75,
  },
  {
    product_name: "Retro Cruiser",
    product_description: "Vintage-style cruiser bike with comfortable seating and smooth ride.",
    product_price: "600",
    subcategoryId: 75,
  },
  {
    product_name: "Triathlon Pro",
    product_description: "Elite triathlon bike with advanced geometry for speed and endurance.",
    product_price: "2500",
    subcategoryId: 75,
  },
  {
    product_name: "BMX Stunt Master",
    product_description: "Sturdy BMX bike designed for tricks and jumps, with reinforced frame.",
    product_price: "500",
    subcategoryId: 75,
  },

  // Subcategory 76: Camping Supplies
  {
    product_name: "StarGazer Tent",
    product_description: "Spacious 4-person tent with a panoramic view for star gazing.",
    product_price: "250",
    subcategoryId: 76,
  },
  {
    product_name: "CampFire Grill",
    product_description: "Portable and durable camping grill, easy to set up for a great cookout.",
    product_price: "100",
    subcategoryId: 76,
  },
  {
    product_name: "Survivor Sleeping Bag",
    product_description: "All-weather sleeping bag designed for warmth and comfort in extreme conditions.",
    product_price: "150",
    subcategoryId: 76,
  },
  {
    product_name: "Hiker's Backpack",
    product_description: "Ergonomic backpack with ample storage and hydration system for long hikes.",
    product_price: "180",
    subcategoryId: 76,
  },
  {
    product_name: "Portable Water Filter",
    product_description: "Compact water filtration device for safe drinking water anywhere.",
    product_price: "50",
    subcategoryId: 76,
  },
  {
    product_name: "Solar Lantern",
    product_description: "Eco-friendly solar-powered lantern with adjustable brightness settings.",
    product_price: "40",
    subcategoryId: 76,
  },
  {
    product_name: "Multi-Tool Camping Kit",
    product_description: "Versatile multi-tool kit with essentials for camping and outdoor survival.",
    product_price: "70",
    subcategoryId: 76,
  },
  {
    product_name: "Inflatable Camping Mat",
    product_description: "Comfortable and lightweight inflatable mat for a good night's sleep outdoors.",
    product_price: "60",
    subcategoryId: 76,
  },
  {
    product_name: "Compact Cookware Set",
    product_description: "Durable and lightweight cookware set for easy cooking at the campsite.",
    product_price: "80",
    subcategoryId: 76,
  },
  {
    product_name: "Thermal Flask",
    product_description: "High-quality thermal flask for keeping beverages hot or cold for hours.",
    product_price: "30",
    subcategoryId: 76,
  },

  // Subcategory 77: Climbing Gear
  {
    product_name: "Summit Climbing Harness",
    product_description: "Comfortable and secure climbing harness for all levels of climbers.",
    product_price: "120",
    subcategoryId: 77,
  },
  {
    product_name: "GripMaster Chalk Bag",
    product_description: "Leak-proof chalk bag with easy access for a reliable grip while climbing.",
    product_price: "25",
    subcategoryId: 77,
  },
  {
    product_name: "Ascend Quickdraws",
    product_description: "Lightweight and durable quickdraws for efficient climbing and safety.",
    product_price: "15",
    subcategoryId: 77,
  },
  {
    product_name: "Vertex Climbing Shoes",
    product_description: "High-performance climbing shoes with superior grip and comfort.",
    product_price: "140",
    subcategoryId: 77,
  },
  {
    product_name: "Belay Pro Device",
    product_description: "Advanced belay device with enhanced safety features for climbing.",
    product_price: "75",
    subcategoryId: 77,
  },
  {
    product_name: "Crag Helmet",
    product_description: "Lightweight and robust helmet designed for climbing protection.",
    product_price: "100",
    subcategoryId: 77,
  },
  {
    product_name: "Climber's Carabiner Set",
    product_description: "Set of high-strength carabiners for secure and versatile climbing setups.",
    product_price: "50",
    subcategoryId: 77,
  },
  {
    product_name: "Rope Master",
    product_description: "Dynamic climbing rope with optimal balance of strength and flexibility.",
    product_price: "200",
    subcategoryId: 77,
  },
  {
    product_name: "ClimbTech Anchors",
    product_description: "Reliable and easy-to-install anchors for various climbing surfaces.",
    product_price: "40",
    subcategoryId: 77,
  },
  {
    product_name: "Altitude Altimeter",
    product_description: "Precision altimeter watch for tracking elevation gains during climbs.",
    product_price: "220",
    subcategoryId: 77,
  },

  // Subcategory 78: Outdoor & Recreation
  {
    product_name: "Explorer Kayak",
    product_description: "Inflatable kayak with high stability and durability for recreational paddling.",
    product_price: "300",
    subcategoryId: 78,
  },
  {
    product_name: "TrailBlaze Hiking Poles",
    product_description: "Adjustable hiking poles with ergonomic grips for enhanced trail support.",
    product_price: "80",
    subcategoryId: 78,
  },
  {
    product_name: "Ranger Outdoor Watch",
    product_description: "Rugged outdoor watch with GPS, altimeter, barometer, and compass functionalities.",
    product_price: "250",
    subcategoryId: 78,
  },
  {
    product_name: "Wilderness Hammock",
    product_description: "Lightweight and compact hammock for the ultimate relaxation in nature.",
    product_price: "60",
    subcategoryId: 78,
  },
  {
    product_name: "Eco-Friendly Picnic Set",
    product_description: "Biodegradable picnic set including plates, cups, and utensils for outdoor dining.",
    product_price: "35",
    subcategoryId: 78,
  },
  {
    product_name: "Portable Solar Panel",
    product_description: "Compact and foldable solar panel for charging devices while off the grid.",
    product_price: "150",
    subcategoryId: 78,
  },
  {
    product_name: "All-Weather Blanket",
    product_description: "Waterproof and windproof blanket, ideal for picnics and outdoor events.",
    product_price: "45",
    subcategoryId: 78,
  },
  {
    product_name: "Binoculars Pro",
    product_description: "High-definition binoculars with long-range zoom for wildlife and scenic viewing.",
    product_price: "120",
    subcategoryId: 78,
  },
  {
    product_name: "Adventure First Aid Kit",
    product_description: "Comprehensive first aid kit designed for outdoor activities and emergencies.",
    product_price: "50",
    subcategoryId: 78,
  },
  {
    product_name: "Nature Trail Camera",
    product_description: "Motion-activated trail camera for capturing wildlife in high definition.",
    product_price: "180",
    subcategoryId: 78,
  },

  // Subcategory 79: Outdoor Sports
  {
    product_name: "Pro Frisbee",
    product_description: "Competition-grade frisbee designed for ultimate flying precision and distance.",
    product_price: "20",
    subcategoryId: 79,
  },
  {
    product_name: "Beach Volleyball Set",
    product_description: "Complete volleyball set with net, ball, and stakes, perfect for beach or backyard.",
    product_price: "100",
    subcategoryId: 79,
  },
  {
    product_name: "All-Terrain Skateboard",
    product_description: "Durable skateboard with all-terrain wheels for street and off-road skating.",
    product_price: "150",
    subcategoryId: 79,
  },
  {
    product_name: "Portable Basketball Hoop",
    product_description: "Adjustable and portable basketball hoop for driveway or backyard play.",
    product_price: "200",
    subcategoryId: 79,
  },
  {
    product_name: "Precision Golf Putter",
    product_description: "High-quality golf putter with superior balance for precision putting.",
    product_price: "120",
    subcategoryId: 79,
  },
  {
    product_name: "Archery Set",
    product_description: "Beginner to intermediate archery set with bow, arrows, and target for practice.",
    product_price: "250",
    subcategoryId: 79,
  },
  {
    product_name: "Tennis Trainer",
    product_description: "Solo tennis trainer with rebound base for practice without a partner.",
    product_price: "40",
    subcategoryId: 79,
  },
  {
    product_name: "Inflatable SUP Board",
    product_description: "Inflatable stand-up paddleboard with paddle, pump, and carrying case for water enthusiasts.",
    product_price: "400",
    subcategoryId: 79,
  },
  {
    product_name: "Speed Badminton Set",
    product_description: "Fast-paced badminton set with rackets and wind-resistant shuttlecocks for outdoor play.",
    product_price: "60",
    subcategoryId: 79,
  },
  {
    product_name: "Fishing Kayak",
    product_description: "Stable and comfortable fishing kayak with rod holders and storage compartments.",
    product_price: "800",
    subcategoryId: 79,
  },

  // Subcategory 80: Survival & Navigation
  {
    product_name: "Satellite Messenger",
    product_description: "Emergency satellite messenger for SOS signals and off-grid communication.",
    product_price: "300",
    subcategoryId: 80,
  },
  {
    product_name: "Multi-Tool Survival Kit",
    product_description: "Compact survival kit with multi-tool, fire starter, and emergency whistle.",
    product_price: "50",
    subcategoryId: 80,
  },
  {
    product_name: "Water Purification Tablets",
    product_description: "Fast-acting tablets for purifying water in emergency or survival situations.",
    product_price: "10",
    subcategoryId: 80,
  },
  {
    product_name: "Handheld GPS Device",
    product_description: "Rugged, waterproof GPS device with preloaded maps for outdoor navigation.",
    product_price: "250",
    subcategoryId: 80,
  },
  {
    product_name: "Survival Paracord Bracelet",
    product_description: "Paracord bracelet with built-in compass, whistle, and fire starter for survival scenarios.",
    product_price: "15",
    subcategoryId: 80,
  },
  {
    product_name: "Emergency Shelter Tent",
    product_description: "Lightweight and easy-to-set-up emergency shelter for protection against the elements.",
    product_price: "40",
    subcategoryId: 80,
  },
  {
    product_name: "Solar Powered Radio",
    product_description: "Multi-function solar powered radio with NOAA weather channels and phone charger.",
    product_price: "60",
    subcategoryId: 80,
  },
  {
    product_name: "Tactical Flashlight",
    product_description: "High-lumen tactical flashlight with multiple modes and rugged construction.",
    product_price: "70",
    subcategoryId: 80,
  },
  {
    product_name: "Compact Binoculars",
    product_description: "Lightweight and compact binoculars for distance viewing and navigation.",
    product_price: "90",
    subcategoryId: 80,
  },
  {
    product_name: "Survival Guidebook",
    product_description: "Comprehensive guidebook covering survival techniques, first aid, and outdoor skills.",
    product_price: "25",
    subcategoryId: 80,
  },

  // Subcategory 81: Gym Tools & Equipment
  {
    product_name: "Adjustable Dumbbell Set",
    product_description: "Space-saving adjustable dumbbell set for a range of weightlifting exercises.",
    product_price: "300",
    subcategoryId: 81,
  },
  {
    product_name: "Yoga Mat Pro",
    product_description: "Eco-friendly, high-grip yoga mat for all levels of yoga practice.",
    product_price: "50",
    subcategoryId: 81,
  },
  {
    product_name: "Resistance Band Kit",
    product_description: "Versatile resistance band kit with varying levels for strength and flexibility training.",
    product_price: "40",
    subcategoryId: 81,
  },
  {
    product_name: "Kettlebell Select",
    product_description: "Adjustable kettlebell for dynamic strength training and conditioning.",
    product_price: "150",
    subcategoryId: 81,
  },
  {
    product_name: "Fitness Rowing Machine",
    product_description: "Compact rowing machine with adjustable resistance for full-body workouts.",
    product_price: "400",
    subcategoryId: 81,
  },
  {
    product_name: "Speed Jump Rope",
    product_description: "High-speed jump rope with adjustable length for cardio and agility training.",
    product_price: "20",
    subcategoryId: 81,
  },
  {
    product_name: "Workout Bench",
    product_description: "Multi-position workout bench for weightlifting and bodyweight exercises.",
    product_price: "120",
    subcategoryId: 81,
  },
  {
    product_name: "Pull-Up Bar",
    product_description: "Doorframe pull-up bar with multiple grip positions for upper body strength.",
    product_price: "30",
    subcategoryId: 81,
  },
  {
    product_name: "Foam Roller",
    product_description: "High-density foam roller for muscle recovery and flexibility training.",
    product_price: "25",
    subcategoryId: 81,
  },
  {
    product_name: "Exercise Ball",
    product_description: "Anti-burst exercise ball for core workouts, stretching, and balance training.",
    product_price: "30",
    subcategoryId: 81,
  },
  {
    product_name: "AquaBliss Showerhead",
    product_description: "High-pressure rainfall shower head with water filtration system for a spa-like experience",
    product_price: "75",
    
    subcategoryId: 82
  },
  {
    product_name: "SoftEmbrace Towels",
    product_description: "Ultra-soft, absorbent bamboo cotton towels in a set of 4, perfect for sensitive skin",
    product_price: "40",
    
    subcategoryId: 82
  },
  {
    product_name: "BathBloom Bath Mat",
    product_description: "Non-slip, microfiber bath mat with memory foam for luxurious comfort",
    product_price: "25",
    
    subcategoryId: 82
  },
  {
    product_name: "EcoSuds Soap Dispenser",
    product_description: "Wall-mounted, touchless soap dispenser with refillable eco-friendly pods",
    product_price: "60",
    
    subcategoryId: 82
  },
  {
    product_name: "SereneCurtain Shower Liner",
    product_description: "Mildew-resistant, waterproof shower curtain liner with weighted hem",
    product_price: "20",
    
    subcategoryId: 82
  },
  {
    product_name: "LuxeRack Towel Warmer",
    product_description: "Freestanding or wall-mounted electric towel warmer with built-in timer",
    product_price: "120",
    
    subcategoryId: 82
  },
  {
    product_name: "VanityGlow LED Mirror",
    product_description: "Illuminated bathroom mirror with adjustable LED lights and touch sensor",
    product_price: "150",
    
    subcategoryId: 82
  },
  {
    product_name: "ZenSpa Bathtub Caddy",
    product_description: "Expandable bamboo bathtub caddy with book holder, wine glass slot, and soap dish",
    product_price: "45",
    
    subcategoryId: 82
  },
  {
    product_name: "FreshFragrance Bath Bombs",
    product_description: "Set of 6 handmade, organic bath bombs with essential oils for relaxation",
    product_price: "30",
    
    subcategoryId: 82
  },
  {
    product_name: "ClearView Shower Squeegee",
    product_description: "Ergonomic shower squeegee with silicone blade and suction cup hanger for glass cleaning",
    product_price: "15",
    
    subcategoryId: 82
  },
  {
    product_name: "DreamWeave Comforter Set",
    product_description: "Luxury microfiber comforter set with pillow shams and bed skirt, hypoallergenic",
    product_price: "90",
    
    subcategoryId: 83
  },
  {
    product_name: "SleepTight Memory Foam Pillow",
    product_description: "Ergonomic memory foam pillow with cooling gel layer for optimal neck support",
    product_price: "50",
    
    subcategoryId: 83
  },
  {
    product_name: "CozyNest Weighted Blanket",
    product_description: "Premium weighted blanket for improved sleep, made with non-toxic glass beads",
    product_price: "100",
    
    subcategoryId: 83
  },
  {
    product_name: "SilkSerenity Pillowcase Set",
    product_description: "Set of 2 pure mulberry silk pillowcases, hypoallergenic and hair-friendly",
    product_price: "70",
    
    subcategoryId: 83
  },
  {
    product_name: "BedFramePro Adjustable Base",
    product_description: "Electric adjustable bed base with wireless remote, USB ports, and massage feature",
    product_price: "800",
    
    subcategoryId: 83
  },
  {
    product_name: "SheetHaven Luxury Set",
    product_description: "Egyptian cotton sheet set with deep pockets and a sateen weave, 800 thread count",
    product_price: "120",
    
    subcategoryId: 83
  },
  {
    product_name: "MattressMax Memory Foam",
    product_description: "10-inch gel-infused memory foam mattress with adaptive support layers, queen size",
    product_price: "400",
    
    subcategoryId: 83
  },
  {
    product_name: "NightGlow Bedside Lamp",
    product_description: "Touch-activated bedside lamp with dimmable warm light and minimalist design",
    product_price: "35",
    
    subcategoryId: 83
  },
  {
    product_name: "QuiltCrafters Heirloom Quilt",
    product_description: "Hand-stitched cotton quilt with vintage patchwork design, king size",
    product_price: "200",
    
    subcategoryId: 83
  },
  {
    product_name: "UnderBed Smart Storage",
    product_description: "Roll-out under-bed storage solution with smart compartments and dust protection",
    product_price: "60",
    
    subcategoryId: 83
  },
  {
    product_name: "ComfyLounge Recliner",
    product_description: "Ergonomic recliner chair with leather upholstery and built-in lumbar support",
    product_price: "350",
    
    subcategoryId: 84
  },
  {
    product_name: "SpaceSaver Foldable Desk",
    product_description: "Compact foldable desk ideal for small spaces, with built-in storage compartments",
    product_price: "100",
    
    subcategoryId: 84
  },
  {
    product_name: "ModernArt Coffee Table",
    product_description: "Contemporary glass coffee table with artistic metal frame, center piece for any living room",
    product_price: "250",
    
    subcategoryId: 84
  },
  {
    product_name: "EcoWood Dining Set",
    product_description: "Sustainable solid wood dining set including table and 6 chairs, with a natural finish",
    product_price: "600",
    
    subcategoryId: 84
  },
  {
    product_name: "SofaKing Convertible Couch",
    product_description: "Multi-functional convertible sofa that turns into a bed, with additional storage space",
    product_price: "500",
    
    subcategoryId: 84
  },
  {
    product_name: "BookNook Wall Shelf",
    product_description: "Wall-mounted bookshelf with creative geometric design, in solid oak",
    product_price: "150",
    
    subcategoryId: 84
  },
  {
    product_name: "RusticCharm Wardrobe",
    product_description: "Vintage-style solid pine wardrobe with ample storage and a distressed finish",
    product_price: "450",
    
    subcategoryId: 84
  },
  {
    product_name: "UltraModern TV Stand",
    product_description: "Sleek TV stand with LED lighting and glass shelves, supports up to 65 inch screens",
    product_price: "200",
    
    subcategoryId: 84
  },
  {
    product_name: "PatioPerfection Outdoor Set",
    product_description: "All-weather outdoor furniture set with rattan sofa, chairs, and glass top table",
    product_price: "700",
    
    subcategoryId: 84
  },
  {
    product_name: "SleepyHollow Rocking Chair",
    product_description: "Traditional wooden rocking chair with hand-carved details and comfortable cushioning",
    product_price: "180",
    
    subcategoryId: 84
  },
  {
    product_name: "WorkSmart Standing Desk",
    product_description: "Adjustable standing desk with electronic controls and memory settings for optimal ergonomics",
    product_price: "300",
    
    subcategoryId: 84
  },
  {
    product_name: "FrostFree Refrigerator",
    product_description: "Energy-efficient, frost-free refrigerator with smart temperature controls and spacious interior",
    product_price: "1200",
    
    subcategoryId: 85
  },
  {
    product_name: "QuickWash Dishwasher",
    product_description: "Ultra-quiet dishwasher with advanced wash cycles and energy-saving features",
    product_price: "700",
    
    subcategoryId: 85
  },
  {
    product_name: "AirPure Smart Purifier",
    product_description: "Smart air purifier with HEPA filters and real-time air quality monitoring",
    product_price: "300",
    
    subcategoryId: 85
  },
  {
    product_name: "BakeMaster Convection Oven",
    product_description: "Digital convection oven with multiple cooking modes and precise temperature control",
    product_price: "500",
    
    subcategoryId: 85
  },
  {
    product_name: "BlendPro Kitchen Blender",
    product_description: "High-power kitchen blender with multiple speed settings and durable glass jar",
    product_price: "150",
    
    subcategoryId: 85
  },
  {
    product_name: "EspressoElite Coffee Maker",
    product_description: "Barista-grade espresso machine with customizable settings and milk frother",
    product_price: "400",
    
    subcategoryId: 85
  },
  {
    product_name: "SteamGenie Garment Steamer",
    product_description: "Handheld garment steamer for quick and efficient wrinkle removal, with multiple attachments",
    product_price: "80",
    
    subcategoryId: 85
  },
  {
    product_name: "SonicClean Vacuum Cleaner",
    product_description: "Powerful bagless vacuum cleaner with sonic cleaning technology for deep cleaning",
    product_price: "250",
    
    subcategoryId: 85
  },
  {
    product_name: "RoboMop Floor Cleaner",
    product_description: "Autonomous floor cleaning robot with smart navigation and mop function",
    product_price: "300",
    
    subcategoryId: 85
  },
  {
    product_name: "ToastTastic Toaster",
    product_description: "4-slice toaster with wide slots, bagel function, and removable crumb tray",
    product_price: "60",
    
    subcategoryId: 85
  },
  {
    product_name: "IronFast Steam Iron",
    product_description: "Advanced steam iron with ceramic soleplate and precision tip for easy wrinkle removal",
    product_price: "50",
    
    subcategoryId: 85
  },
  {
    product_name: "ElegantVase Decor Set",
    product_description: "Set of 3 decorative vases in varying sizes, perfect for modern and traditional spaces",
    product_price: "80",
    
    subcategoryId: 86
  },
  {
    product_name: "WallWhisper Art Prints",
    product_description: "Gallery-quality art prints set, featuring abstract and contemporary designs",
    product_price: "120",
    
    subcategoryId: 86
  },
  {
    product_name: "GlowLantern LED Lights",
    product_description: "Set of wireless, rechargeable LED lanterns with adjustable brightness, for indoor/outdoor use",
    product_price: "70",
    
    subcategoryId: 86
  },
  {
    product_name: "ScentHarmony Diffuser",
    product_description: "Ultrasonic aroma diffuser with color-changing LED lights and timer settings",
    product_price: "40",
    
    subcategoryId: 86
  },
  {
    product_name: "FrameFiesta Picture Frames",
    product_description: "Assorted set of picture frames in various sizes and finishes for a personalized gallery wall",
    product_price: "60",
    
    subcategoryId: 86
  },
  {
    product_name: "TimeTeller Wall Clock",
    product_description: "Minimalist wall clock with silent movement and modern design, available in multiple colors",
    product_price: "30",
    
    subcategoryId: 86
  },
  {
    product_name: "CozyThrow Blanket",
    product_description: "Ultra-soft, knitted throw blanket in a variety of colors, perfect for any living space",
    product_price: "50",
    
    subcategoryId: 86
  },
  {
    product_name: "ZenGarden Indoor Fountain",
    product_description: "Tabletop indoor fountain with natural river rocks and calming water sound for relaxation",
    product_price: "90",
    
    subcategoryId: 86
  },
  {
    product_name: "MoodGlow Candle Set",
    product_description: "Set of scented candles in glass jars, with long burn time and soothing fragrances",
    product_price: "35",
    
    subcategoryId: 86
  },
  {
    product_name: "RetroRecord Vinyl Player",
    product_description: "Vintage-style vinyl record player with modern features like Bluetooth connectivity",
    product_price: "150",
    
    subcategoryId: 86
  },
  {
    product_name: "SoftStep Rug",
    product_description: "Luxury area rug with high pile and soft texture, ideal for living rooms and bedrooms",
    product_price: "200",
    
    subcategoryId: 86
  },
  {
    product_name: "ChefMate Knife Set",
    product_description: "Professional-grade stainless steel knife set with ergonomic handles and wooden block",
    product_price: "150",
    
    subcategoryId: 87
  },
  {
    product_name: "CulinaryPro Cast Iron Skillet",
    product_description: "Pre-seasoned cast iron skillet, perfect for frying, baking, grilling, and more",
    product_price: "40",
    
    subcategoryId: 87
  },
  {
    product_name: "DineElegance Dinnerware Set",
    product_description: "Porcelain dinnerware set for 8, with dinner plates, salad plates, bowls, and mugs",
    product_price: "200",
    
    subcategoryId: 87
  },
  {
    product_name: "BakeWizard Baking Mats",
    product_description: "Set of 2 non-stick silicone baking mats, durable and reusable for all your baking needs",
    product_price: "20",
    
    subcategoryId: 87
  },
  {
    product_name: "MixMaster Stand Mixer",
    product_description: "Powerful stand mixer with multiple attachments for mixing, kneading, and whipping",
    product_price: "300",
    
    subcategoryId: 87
  },
  {
    product_name: "PreservePro Vacuum Sealer",
    product_description: "Advanced vacuum sealer for food preservation, with multiple sealing modes and starter kit",
    product_price: "120",
    
    subcategoryId: 87
  },
  {
    product_name: "GlassGenius Storage Containers",
    product_description: "Set of glass food storage containers with airtight lids, microwave and freezer safe",
    product_price: "50",
    
    subcategoryId: 87
  },
  {
    product_name: "GrillMaster BBQ Set",
    product_description: "Complete BBQ tool set with stainless steel utensils and aluminum storage case",
    product_price: "80",
    
    subcategoryId: 87
  },
  {
    product_name: "SipSavvy Wine Glasses",
    product_description: "Set of 6 crystal wine glasses, elegantly designed for red and white wines",
    product_price: "60",
    
    subcategoryId: 87
  },
  {
    product_name: "CafeBrew French Press",
    product_description: "Stainless steel French press coffee maker with double-wall construction for heat retention",
    product_price: "40",
    
    subcategoryId: 87
  },
  {
    product_name: "SpiceSavant Rack",
    product_description: "Rotating spice rack with 16 pre-filled spice jars and labels for easy organization",
    product_price: "70",
    
    subcategoryId: 87
  },
  {
    product_name: "PetPal Interactive Feeder",
    product_description: "Smart pet feeder with remote control and programmable feeding schedule for dogs and cats",
    product_price: "150",
    
    subcategoryId: 88
  },
  {
    product_name: "FurryFriend Bed",
    product_description: "Orthopedic pet bed with memory foam and removable, washable cover for ultimate comfort",
    product_price: "100",
    
    subcategoryId: 88
  },
  {
    product_name: "WhiskerWand Cat Tree",
    product_description: "Multi-level cat tree with scratching posts, hammock, and play area for indoor cats",
    product_price: "200",
    
    subcategoryId: 88
  },
  {
    product_name: "BarkBuddy Dog Harness",
    product_description: "No-pull dog harness with adjustable straps and reflective stitching for safe walks",
    product_price: "30",
    
    subcategoryId: 88
  },
  {
    product_name: "AquaMate Aquarium Kit",
    product_description: "Complete aquarium starter kit with filter, LED lighting, and water conditioner, 20 gallons",
    product_price: "120",
    
    subcategoryId: 88
  },
  {
    product_name: "FeatherFun Bird Cage",
    product_description: "Spacious bird cage with perches, feeders, and swing, suitable for small to medium birds",
    product_price: "150",
    
    subcategoryId: 88
  },
  {
    product_name: "CritterCave Hamster Habitat",
    product_description: "Expandable hamster habitat with tunnels, wheel, and lookout areas for enrichment",
    product_price: "80",
    
    subcategoryId: 88
  },
  {
    product_name: "ReptiHome Terrarium",
    product_description: "Glass terrarium with screen top and front opening doors for reptiles and amphibians",
    product_price: "200",
    
    subcategoryId: 88
  },
  {
    product_name: "FlutterFly Butterfly Garden",
    product_description: "Live butterfly garden kit with caterpillars, habitat, and food for educational fun",
    product_price: "30",
    
    subcategoryId: 88
  },
  {
    product_name: "SqueakJoy Plush Toys",
    product_description: "Set of durable plush dog toys with squeakers, perfect for interactive play and dental health",
    product_price: "25",
    
    subcategoryId: 88
  },
  {
    product_name: "ChewChampion Bones",
    product_description: "Natural, long-lasting chew bones for dogs, promoting dental health and satisfying chew instincts",
    product_price: "20",
    
    subcategoryId: 88
  }
  
];
