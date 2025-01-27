const productsList = [
    {
      name: "OnePlus Earphones",
      category: "electronics",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/616bhfyXimL._SL1500_.jpg",
      description:
        "Compatible with all smartphones. Charge for 10 minutes, enjoy for 10 hours on your OnePlus Bullets Wireless Z that comes equipped with the Bluetooth v5.0 QCC3024 chipset.",
      price: 1999,
      discountPrice: 1599,
      brand: "OnePlus",
      rating: 4.2,
      numReviews: 483,
      countInStock: 10,
    },
    {
      name: "Philips UpBeat",
      category: "electronics",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71C78Yjz26L._SL1500_.jpg",
      description:
        "3 hours play time on single charge, 9 hours additional play time with charging case. Small earphone design.",
      price: 1679,
      discountPrice: 1579,
      brand: "Philips",
      rating: 2.9,
      numReviews: 16,
      countInStock: 10,
    },
    {
      name: "GoPro HERO9 Black",
      category: "electronics",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61Iyd3w%2BbKL._SL1500_.jpg",
      description:
        "A new, larger rear touch screen with touch zoom on HERO9 Black should feel instantly familiar and a dazzling new front display makes for easy framing and intuitive camera control.",
      price: 38399,
      discountPrice: 37899,
      brand: "GoPro",
      rating: 4.0,
      numReviews: 66,
      countInStock: 10,
    },
    {
      name: "Lenovo 300 Wireless Compact Mouse",
      category: "electronics",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51ogrgGK%2B9L._SY355_.jpg",
      description:
        "The Lenovo 300 Wireless Compact Mouse is the perfect accessory for those who travel for work, executives who give presentations, or anyone who wants greater control and freedom.",
      price: 649,
      discountPrice: 549,
      brand: "Lenovo",
      rating: 4.4,
      numReviews: 648,
      countInStock: 10,
    },
    {
      name: "HP 32GB Pen Drive",
      category: "electronics",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61aflcZgumL._SL1400_.jpg",
      description:
        "This smart pen drive has a metal body which makes it sturdy. You can store almost 32 GB data in the pen drive for this storage capacity. This smart pen drive has a small strap hole.",
      price: 399,
      discountPrice: 349,
      brand: "HP",
      rating: 4,
      numReviews: 110,
      countInStock: 10,
    },
    {
      name: "Apple AirPods",
      category: "electronics",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71IPFP9WJIL._SL1500_.jpg",
      description:
        "Easy setup for all your Apple devices. Quick access to Siri by saying “Hey Siri”. Charges quickly in the case.",
      price: 15990,
      discountPrice: 14999,
      brand: "Apple",
      rating: 4.1,
      numReviews: 184,
      countInStock: 10,
    },
    {
      name: "New Apple Watch SE",
      category: "electronics",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71rhrO49SmL._SX466_.jpg",
      description:
        "GPS model lets you take calls and reply to texts from your wrist. Swimproof design and Measure workouts like running, walking, cycling, yoga, swimming, and dance.",
      price: 29900,
      discountPrice: 28990,
      brand: "Apple",
      rating: 4.6,
      numReviews: 238,
      countInStock: 10,
    },
    {
      name: "Echo Dot – Smart speaker",
      category: "electronics",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61rT%2BxgJeDL._SL1000_.jpg",
      description:
        "Alexa, the brain behind Echo Dot, is built in the cloud, so it is always getting smarter. The more you use Dot, the more Alexa adapts to your speech patterns and vocabulary.",
      price: 2999,
      discountPrice: 2499,
      brand: "Amazon",
      rating: 4.3,
      numReviews: 320,
      countInStock: 10,
    },
    {
      name: "JBL Go 2 Bluetooth Speaker",
      category: "electronics",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81-Y7h5n31L._SL1500_.jpg",
      description:
        "The JBL Go 2 is a full-featured waterproof Bluetooth speaker to take with you everywhere. Wirelessly stream music via Bluetooth for up to 5 hours of continuous JBL quality sound. Making a splash with its new IPX7 waterproof design.",
      price: 2349,
      discountPrice: 1999,
      brand: "JBL",
      rating: 4.1,
      numReviews: 481,
      countInStock: 10,
    },
    {
      name: "Sony Alpha DSLR",
      category: "electronics",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81b8S9hI1bL._SY355_.jpg",
      description:
        "Capture the peaks of more decisive moments with the α7 III from Sony packing newly developed back-illuminated full-frame CMOS sensor  and other advanced imaging innovations, high-speed response, ease of operation, and reliable durability that are ready for various shooting needs.",
      price: 46990,
      discountPrice: 45990,
      brand: "Sony",
      rating: 4.4,
      numReviews: 172,
      countInStock: 10,
    },
    {
      name: "Samsung Galaxy M01",
      category: "mobiles",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81o1rDu5FZL._SL1500_.jpg",
      description:
        "With the Samsung Galaxy M01, Samsung introduces a 4000 mAh battery along with a sAmoled display for the first time in this price segment. This comes along with a dual camera set up.",
      price: 7499,
      discountPrice: 6999,
      brand: "Samsung",
      rating: 4.4,
      numReviews: 884,
      countInStock: 10,
    },
    {
      name: "Honor 20",
      category: "mobiles",
      image: "https://images-na.ssl-images-amazon.com/images/I/414Em8PeaJL.jpg",
      description:
        "Android v9+EMUI 9.0.1 operating system with 2.2GHz Kirin 710F octa core processor. 15.7734 centimeters (6.21-inch) FHD+ drew drop display with 2340 x 1080 pixels resolution.",
      price: 22999,
      discountPrice: 21999,
      brand: "Honor",
      rating: 4.4,
      numReviews: 234,
      countInStock: 10,
    },
    {
      name: "OnePlus Nord 5G",
      category: "mobiles",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71gag816F7L._SL1500_.jpg",
      description:
        "Nord, the latest product line by the Number 1 premium smartphone in India - OnePlus, brings together Exceptional Cameras, Smooth Experience and OnePlus Quality and Trust to the consumers.",
      price: 27999,
      discountPrice: 26999,
      brand: "OnePlus",
      rating: 4.2,
      numReviews: 272,
      countInStock: 10,
    },
    {
      name: "Google Pixel 4a",
      category: "mobiles",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/7199N-Uz2AL._SL1500_.jpg",
      description:
        "Meet Pixel 4a. It comes packed with the things you want most in a phone, for a lot less than you’d expect. And it’s unlocked – so you can pick the carrier and data plan that work best for you.",
      price: 37500,
      discountPrice: 36500,
      brand: "Google",
      rating: 4.7,
      numReviews: 328,
      countInStock: 10,
    },
    {
      name: "Apple iPhone 12 Pro Max",
      category: "mobiles",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg",
      description:
        "Ceramic Shield, tougher than any smartphone glass. 6.1-inch Super Retina XDR display. A14 Bionic chip, the fastest chip ever in a smartphone.",
      price: 129900,
      discountPrice: 127900,
      brand: "Apple",
      rating: 4.5,
      numReviews: 120,
      countInStock: 10,
    },
    {
      name: "Motorola Razr",
      category: "mobiles",
      image: "https://images-na.ssl-images-amazon.com/images/I/31mqujr%2BQaL.jpg",
      description:
        "The Motorola Razr is here to redefine your smartphone experience with its sleek and stylish foldable display. Featuring the zero-gap hinge design, you can flip open this phone to view your favourite visuals on the main 15.75 cm (6.2) 21:9 CinemaVision display.",
      price: 63950,
      discountPrice: 61950,
      brand: "Motorola",
      rating: 2.9,
      numReviews: 8,
      countInStock: 10,
    },
    {
      name: "Samsung Galaxy A51",
      category: "mobiles",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81qVoEhymIL._SL1500_.jpg",
      description:
        "The Samsung galaxy A51 is a complete device that provides for a onscreen fingerprint sensor along with the Quad Camera Setup - 48MP (F1.8) Main Camera +12MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Punch Hole Camera.",
      price: 22499,
      discountPrice: 21499,
      brand: "Samsung",
      rating: 4.0,
      numReviews: 454,
      countInStock: 10,
    },
    {
      name: "OnePlus 8T 5G",
      category: "mobiles",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71m05O2uNdL._SL1500_.jpg",
      description:
        "The all new OnePlus 8T 5G - ultra stops at nothing - loaded with snapdragon 865 processor, 5G connectivity, 120hz fluid amoled display, 65W warp charging, rear quad camera setup.",
      price: 42999,
      discountPrice: 40999,
      brand: "OnePlus",
      rating: 4.2,
      numReviews: 423,
      countInStock: 10,
    },
    {
      name: "Nokia 5.3 Android",
      category: "mobiles",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/710lQvb4NRL._SL1500_.jpg",
      description:
        "Go big and beyond with Nokia 5.3. From its quad camera, ultra-wide lens and the power of AI imaging built in, you won’t miss a moment, plus your shots will look absolutely stunning.",
      price: 12489,
      discountPrice: 11489,
      brand: "Nokia",
      rating: 3.7,
      numReviews: 253,
      countInStock: 10,
    },
    {
      name: "Samsung Galaxy S20 FE",
      category: "mobiles",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71OYLm6srFL._SL1500_.jpg",
      description:
        "Galaxy S20 FE series introduce the next generation of mobile innovation. Completely redesigned to remove interruptions from your view. No notch, no distractions. Precise laser cutting, on-screen security, and a Dynamic AMOLED that's easy on the eyes.",
      price: 40998,
      discountPrice: 39998,
      brand: "Samsung",
      rating: 3.2,
      numReviews: 72,
      countInStock: 10,
    },
    {
      name: "The Alchemist",
      category: "ebooks",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg",
      description:
        "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and inspiring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried in the Pyramids.",
      price: 189,
      discountPrice: 149,
      brand: "Paulo Coelho",
      rating: 4.6,
      numReviews: 416,
      countInStock: 10,
    },
    {
      name: "The Monk Who Sold His Ferrari",
      category: "ebooks",
      image: "https://images-na.ssl-images-amazon.com/images/I/61Iz2yy2CKL.jpg",
      description:
        "A renowned inspirational fiction, The Monk Who Sold His Ferrari is a revealing story that offers the readers a simple yet profound way to live life. The plot of this story revolves around Julian Mantle, a lawyer who has made his fortune and name in the profession. A sudden heart-attack creates havoc in the successful lawyer’s life.",
      price: 174,
      discountPrice: 149,
      brand: "Robin Sharma",
      rating: 4.6,
      numReviews: 774,
      countInStock: 10,
    },
    {
      name: "Think and Grow Rich",
      category: "ebooks",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41+eK8zBwQL._SX319_BO1,204,203,200_.jpg",
      description:
        "Think and Grow Rich has earned itself The reputation of being considered a textbook for actionable techniques that can help one get better at doing anything, not just by rich and wealthy, but also by people doing wonderful work in their respective fields.",
      price: 172,
      discountPrice: 149,
      brand: "Napoleon Hill",
      rating: 4.5,
      numReviews: 356,
      countInStock: 10,
    },
    {
      name: "Eloquent JavaScript",
      category: "ebooks",
      image: "https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg",
      description:
        "Completely revised and updated, this best-selling introduction to programming in JavaScript focuses on writing real applications.",
      price: 1874,
      discountPrice: 1699,
      brand: "Marjin Haverbeke",
      rating: 4.6,
      numReviews: 660,
      countInStock: 10,
    },
    {
      name: "You Don`t Know JS",
      category: "ebooks",
      image: "https://images-na.ssl-images-amazon.com/images/I/71mKvD89oEL.jpg",
      description:
        "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. The 'You Don’t Know JS' is a series of books which explores JavaScript types in greater depth",
      price: 2560,
      discountPrice: 1999,
      brand: "Kyle Simpson",
      rating: 4.5,
      numReviews: 33,
      countInStock: 10,
    },
    {
      name: "Beginning React (incl. Redux and React Hooks)",
      category: "ebooks",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41iau0FNmNL._SX258_BO1,204,203,200_.jpg",
      description:
        "Developed by Facebook, React is one of the leading frameworks to build efficient web user interfaces. You use small manageable components to build large-sale, data-driven websites without page reloads.",
      price: 1274,
      discountPrice: 899,
      brand: "Greg Lim",
      rating: 4.3,
      numReviews: 38,
      countInStock: 10,
    },
    {
      name: "Python Crash Course",
      category: "ebooks",
      image: "https://images-na.ssl-images-amazon.com/images/I/81vmJCNCm6L.jpg",
      description:
        "Second edition of the best-selling Python book in the world. A fast-paced, no-nonsense guide to programming in Python. Updated and thoroughly revised to reflect the latest in Python code and practices.",
      price: 1400,
      discountPrice: 999,
      brand: "Eric Matthes",
      rating: 4.7,
      numReviews: 302,
      countInStock: 10,
    },
    {
      name: "Beginning Node.js, Express & MongoDB",
      category: "ebooks",
      image: "https://m.media-amazon.com/images/I/41lMD31ltzL.jpg",
      description:
        "In this book, we take you on a fun, hands-on and pragmatic journey to learning Node.js, Express and MongoDB development. You'll start building your first Node.js app within minutes.",
      price: 1349,
      discountPrice: 1111,
      brand: "Greg Lim",
      rating: 4.3,
      numReviews: 74,
      countInStock: 10,
    },
    {
      name: "Data Structure and Algorithmic Thinking with Python",
      category: "ebooks",
      image: "https://images-na.ssl-images-amazon.com/images/I/61mF67j52OL.jpg",
      description:
        "'Data Structure and Algorithmic Thinking with Python' is designed to give a jump-start to programmers, job hunters and those who are appearing for exams. All the code in this book are written in Python.",
      price: 585,
      discountPrice: 449,
      brand: "Narasimha Karumanchi",
      rating: 4.2,
      numReviews: 274,
      countInStock: 10,
    },
    {
      name: "The Self-Taught Programmer",
      category: "ebooks",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/31YJmObNTnL._SX258_BO1,204,203,200_.jpg",
      description:
        "I am a self-taught programmer. After a year of self-study, I learned to program well enough to land a job as a software engineer II At Bay. Once I got there, I realized I was severely under-prepared. I was overwhelmed by the amount of things I needed to know but hadn't learned yet.",
      price: 2292,
      discountPrice: 1899,
      brand: "Cory Althoff",
      rating: 4.5,
      numReviews: 747,
      countInStock: 10,
    },
    {
      name: "The Forest Bee Organic Acacia Honey 500g",
      category: "health care",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81e6019hhVL._SL1500_.jpg",
      description:
        "Acacia is one such type of honey that comes from trees in North America and Europe and from Kashmir in India. Regular honey, on the other hand, is the one that is processed in the factories before being packed in bottles and sent to supermarkets for sale.",
      price: 1049,
      discountPrice: 849,
      brand: "The Forest Bee",
      rating: 4.2,
      numReviews: 22,
      countInStock: 10,
    },
    {
      name: "Dabur Chyawanprash 1kg",
      category: "health care",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71gDoilY5-L._SL1500_.jpg",
      description:
        "Dabur Chyawanprash is the answer to your child’s health worries - A recipe used in Ayurveda since ancient times,chyawanprash offers a wide range of health benefits. Dabur Chyawanprash provides strong immunity and good digestion for children and adults alike. Two spoons daily of Dabur Chyawanprash supports immunity and is beneficial for overall health and well being.",
      price: 306,
      discountPrice: 249,
      brand: "Dabur",
      rating: 4.4,
      numReviews: 110,
      countInStock: 10,
    },
    {
      name: "Pintola Peanut Butter (Crunchy) 1kg",
      category: "health care",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/710SkOOXiQL._SL1500_.jpg",
      description:
        "More than 25% protein. Good source of fibres & healthy-fats. Ready to eat food product with 18 months shelf stability. Vit. & minerals - Vitamin B-6, Vitamin E, Calcium, Iron, Magnesium, Phosphorous, Potassium.",
      price: 295,
      discountPrice: 149,
      brand: "Pintola",
      rating: 4.3,
      numReviews: 963,
      countInStock: 10,
    },
    {
      name: "Indus Valley Organic Aloe Vera Gel 175ml",
      category: "health care",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61yGCO7TBAL._SL1100_.jpg",
      description:
        "Indus valley Bio Organic Aloe Vera Gel works magic in terms of skin and hair care. This non-greasy & pure non-toxic aloe vera gel happens to be lightweight in nature, capable of penetrating into the deepest layers of the skin while giving you smooth and radiant complexion with a natural young look. Aloe Vera is known to be a natural moisturizer. ",
      price: 199,
      discountPrice: 149,
      brand: "Indus Valley",
      rating: 4.2,
      numReviews: 425,
      countInStock: 10,
    },
    {
      name: "Khadi Natural Ayurvedic handmade bath soap 125g",
      category: "health care",
      image: "https://images-na.ssl-images-amazon.com/images/I/41%2BxpkFYfaL.jpg",
      description:
        "Charcoals Soap help in removing the dirt, from the pores and give your skin a thorough cleansing. This soap also controls the oil secretion in your skin, making it perfect for skin.Khadi Natural Charcoal soap is perfect for deep cleaning and detoxifying the dead cells of the skin Its usage helps in removing acne, blackheads and dead cells.",
      price: 340,
      discountPrice: 299,
      brand: "Khadi Natural",
      rating: 4.6,
      numReviews: 440,
      countInStock: 10,
    },
    {
      name: "UrbanBotanics Pure Cold Pressed Almond Oil 200ml",
      category: "health care",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/616IRFFJ6-L._SL1280_.jpg",
      description:
        "Made using chemical-free substances, the UrbanBotanics Sweet Almond Oil is perfect for all skin and hair types; Cold-pressed oil: The Sweet Almond Oil from UrbanBotanics is cold-pressed without heat or chemical substances.",
      price: 399,
      discountPrice: 389,
      brand: "Urban Botanics",
      rating: 4.4,
      numReviews: 195,
      countInStock: 10,
    },
    {
      name: "Khadi Essentials Wild Rose Lip Butter 5g",
      category: "health care",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51nzqnh-GbL._SL1080_.jpg",
      description:
        "Casting a spell with therapeutic flower that promises tender care to your squishy-mushy lips. Petals of wild rose are mildly sedative and anti-parasitic. The antiseptic nature of untamed and wild rose petals, fortified with numerous organic kinds of butter and oils, makes this lip butter a healer for chapped and dry lips while giving a tint of rose.",
      price: 349,
      discountPrice: 299,
      brand: "Khadi Natural",
      rating: 4.2,
      numReviews: 346,
      countInStock: 10,
    },
    {
      name: "Himalayan Organics Bhringraj Shampoo 300ml",
      category: "health care",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61Szg1vF7kL._SL1000_.jpg",
      description:
        "Himalayan Organics Bhringraj Shampoo that is enriched with the goodness of Amla and Shikakai. When used together, it works against common hair problems like Hair loss, Split ends, Dandruff, Itchiness of the scalp, damaged hair so that you can have fabulous looking hair everytime.",
      price: 506,
      discountPrice: 449,
      brand: "Himalayan Organics",
      rating: 4.1,
      numReviews: 528,
      countInStock: 10,
    },
    {
      name: "Rustic Art Organic Neem Basil Face Wash 50g",
      category: "health care",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71SVfqkHQPL._SL1500_.jpg",
      description:
        "Control acne, excess oil and protect the environment all at the same time. Organic face wash concentrate is an unique blend gently exfoliate the skin, dries the acne, reduces the inflammation and deep cleanse the pores.",
      price: 190,
      discountPrice: 169,
      brand: "Rustic Art",
      rating: 4.1,
      numReviews: 190,
      countInStock: 10,
    },
    {
      name: "Caveman Naturals Deodorant 50g",
      category: "health care",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61JDr-wJo1L._SL1200_.jpg",
      description:
        "Caveman Naturals Deodorant is excellent for both men and women looking for a completely natural way to smell fresh and stay cool all day long. It has been formulated by a team of experts after two years of R&D and dermatologically tested to ensure gentleness on skin.",
      price: 549,
      discountPrice: 499,
      brand: "Caveman Naturals",
      rating: 4.2,
      numReviews: 345,
      countInStock: 10,
    },
    {
      name: "Panasonic Seekit Edge Smart Tracker",
      category: "gadgets",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51GcMWofFVL._SL1500_.jpg",
      description:
        "With Panasonic Seekit, keep a track of all your valuables always. Seekit comes with cutting Edge Bluetooth Technology (Bluetooth 5), for best in class battery usage & stable connection. Tag your keys, your wallets, your camera or any other belonging to keep them safe, always.",
      price: 137,
      discountPrice: 99,
      brand: "Panasonic",
      rating: 3,
      numReviews: 48,
      countInStock: 10,
    },
    {
      name: "AmazonBasics Laptop Stand",
      category: "gadgets",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61B8vKK6HZL._SL1500_.jpg",
      description:
        "Laptop stand raises laptops 6.1-inches off your desk for better ergonomics. Cable organizer keeps your keyboard and mouse cables neatly stowed.",
      price: 799,
      discountPrice: 699,
      brand: "Amazon",
      rating: 4.2,
      numReviews: 637,
      countInStock: 10,
    },
    {
      name: "Philips Hue 9.5W E27 Smart Bulb",
      category: "gadgets",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51LVX01HGNL._SL1500_.jpg",
      description:
        "This smart light LED bulb can be tuned from yellow light (warm white) to white light (cool daylight). This feature can be used effectively to help you to wake up naturally, relax, read, concentrate, energize, and prepare the right light setting for you to go to sleep.",
      price: 1899,
      discountPrice: 1799,
      brand: "Philips",
      rating: 3.8,
      numReviews: 491,
      countInStock: 10,
    },
    {
      name: "Unique Gadget 10 in 1 Combo Toolkit",
      category: "gadgets",
      image: "https://images-na.ssl-images-amazon.com/images/I/41uoE0S3XgL.jpg",
      description:
        "There's a stapler, scissors, carton opener, staple pin remover, 1 meter retractable measuring tape, pencil sharpener, paper punch, key ring, storage basket and waste bin. Just about the only thing the 10x Office Tool won't do is make you coffee.",
      price: 594,
      discountPrice: 549,
      brand: "Unique Gadget",
      rating: 3.5,
      numReviews: 592,
      countInStock: 10,
    },
    {
      name: "Livpure Smart Memory Foam Pillow",
      category: "gadgets",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41iFW5bwsFL._SL1080_.jpg",
      description:
        "Take home this charcoal-infused memory foam pillow for a fresh feel every morning. The activated charcoal is not only hypo-allergenic but also helps in temperature regulation to keep your skin safe. The pillow is crafted to give you perfect support for your head, neck, and shoulder.",
      price: 1999,
      discountPrice: 1799,
      brand: "Livpure Smart",
      rating: 4.1,
      numReviews: 110,
      countInStock: 10,
    },
    {
      name: "ELV Desktop Cell Phone Stand",
      category: "gadgets",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ALO0BDcJL._SL1080_.jpg",
      description:
        "The generous and simple design makes it fit for totally different occasions. Heavy case compatible: The hook of this cell phone stand is longer than others so that it could hold your device even with a heavy case on.",
      price: 149,
      discountPrice: 129,
      brand: "Elv",
      rating: 4.4,
      numReviews: 170,
      countInStock: 10,
    },
    {
      name: "Mini Spark Fire for Outdoor",
      category: "gadgets",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61TpOhC6-aL._SL1500_.jpg",
      description:
        "Lightweight,safe and fireproof, applicable at anywhere,anytime and any condition,including moistweather or low temperature, sparks easily:ignite paper,dry grass or bark.",
      price: 239,
      discountPrice: 199,
      brand: "Futurekart",
      rating: 3.9,
      numReviews: 187,
      countInStock: 10,
    },
    {
      name: "Generic Mini 30x Loupe Magnifier",
      category: "gadgets",
      image: "https://images-na.ssl-images-amazon.com/images/I/41%2BRbWVIYCL.jpg",
      description:
        "100% brand new & high quality silver eye magnifying glass in metal plated case ingenious, portable and easy to carry good for jewelry, stamps, coins and antiques etc inspect object at 30 times power.",
      price: 158,
      discountPrice: 129,
      brand: "Generic",
      rating: 3.9,
      numReviews: 69,
      countInStock: 10,
    },
    {
      name: "Maroon Black RFID Protected Wallet",
      category: "gadgets",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71yS6alLp7L._SL1350_.jpg",
      description:
        "Presenting our all in one AL FASCINO wallets. make heads turn boost your personality - wallet construction that complements your presence smooth finishing - carefully chosen top notch quality pure leather stunning looks - designer stitch to add elegance to the appearance get better organized one size fits all.",
      price: 497,
      discountPrice: 449,
      brand: "Al Fascino",
      rating: 4.3,
      numReviews: 428,
      countInStock: 10,
    },
    {
      name: "Spectacles with Anti-glare for Eye Protection",
      category: "gadgets",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/517u8uJihDL._UL1500_.jpg",
      description:
        "Square Blue light filter lens is upgraded from normal computer glasses, Perfect for you who uses computer and phones all day for work and was complaining of eye fatigue and pain, redness. You will notice a difference.",
      price: 799,
      discountPrice: 749,
      brand: "Intellilens",
      rating: 4.2,
      numReviews: 177,
      countInStock: 10,
    },
  ];
  
export default productsList;
  