const resobj = {
  data: [
    // -------- Petukram --------
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "1001173",
        name: "Petukram",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/30/d7752d5f-22a9-4155-80be-a024e4a38189_1001173.jpg",
        locality: "Ultadanga",
        areaName: "Kankurgachi",
        costForTwo: "₹400 for two",
        cuisines: ["Bengali"],
        avgRating: 4.1,
        sla: { deliveryTime: 39 },
      },
    },

    // -------- KFC --------
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "920809",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/a6ed7d73-bd29-4163-9ba9-27a7e6cc789e_920809.JPG",
        locality: "Baranagar",
        areaName: "Girish Park",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        avgRating: 4.4,
        sla: { deliveryTime: 29 },
      },
    },

    // -------- Burger King --------
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "407661",
        name: "Burger King",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/3079cc60-8ee1-4306-8390-fc436f9dc9d5_407661.jpg",
        locality: "New Market",
        areaName: "Esplanade",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 3.3,
        sla: { deliveryTime: 32 },
      },
    },

    // -------- Domino's --------
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "23921",
        name: "Domino's Pizza",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/7b3282c8-69b4-4fd9-b5ab-9abf85ba52a2_23921.JPG",
        locality: "Girish Park",
        areaName: "Girish Park",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.6,
        sla: { deliveryTime: 25 },
      },
    },

    // -------- McDonald's --------
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "707773",
        name: "McDonald's",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/88004a0f-90eb-4cd3-ba69-542ed97d11cb_707773.JPG",
        locality: "Kankurgachhi",
        areaName: "Kankurgachhi",
        costForTwo: "₹400 for two",
        cuisines: ["American", "Fast Food"],
        avgRating: 4.4,
        sla: { deliveryTime: 36 },
      },
    },

    // -------- Subway --------
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "639205",
        name: "Subway",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/62df7565-a4a9-4007-8153-bfe000d91f88_8912.jpg",
        locality: "Manicktala main road",
        areaName: "Kankurgachi",
        costForTwo: "₹250 for two",
        cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
        avgRating: 3.5,
        sla: { deliveryTime: 42 },
      },
    },

    // -------- Bakingo --------
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "836578",
        name: "Bakingo",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/17/e9e43722-a131-4728-bf1b-e82e56573c21_836578.JPG",
        costForTwo: "₹300 for two",
        cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
        avgRating: 3.2,
        sla: { deliveryTime: 31 },
      },
    },

    // -------- Taco Bell --------
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "195708",
        name: "Taco Bell",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/1da9ae60-22e3-4826-ad7d-462313e22a36_795338.JPG",
        costForTwo: "₹350 for two",
        cuisines: ["Mexican", "Fast Food", "Snacks"],
        avgRating: 4,
        sla: { deliveryTime: 41 },
      },
    },

    // -------- Chowman --------
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "368032",
        name: "Chowman",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/49b82731-b099-4365-83db-6a2b8488c685_368032.jpg",
        locality: "Maniktala",
        areaName: "Dumdum",
        costForTwo: "₹700 for two",
        cuisines: [
          "Chinese",
          "Asian",
          "Thai",
          "Oriental",
          "Burmese",
          "Tibetan",
        ],
        avgRating: 3.6,
        sla: { deliveryTime: 45 },
      },
    },

    // -------- Shanghai Flavours --------
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "837735",
        name: "Shanghai Flavours of China Town",
        cloudinaryImageId: "7170641b5ee8b9cf94597ae555d762eb",
        locality: "Dumdum",
        areaName: "Hatibagan",
        costForTwo: "₹600 for two",
        cuisines: [
          "Chinese",
          "Asian",
          "Oriental",
          "Pan-Asian",
          "Thai",
          "Seafood",
          "Beverages",
          "Desserts",
        ],
        avgRating: 2.3,
        sla: { deliveryTime: 43 },
      },
    },

    // -------- Apu's Kitchen --------
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "18359",
        name: "Apu's Kitchen Phool Bagan",
        cloudinaryImageId: "e49fwbcb7szcnnj44sht",
        locality: "Kankurganchi",
        areaName: "Kankurgachhi",
        costForTwo: "₹250 for two",
        cuisines: [
          "Chinese",
          "Biryani",
          "Mughlai",
          "Kebabs",
          "Indian",
        ],
        avgRating: 4.6,
        sla: { deliveryTime: 30 },
      },
    },

    // -------- Wow! China --------
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "937300",
        name: "Wow! China",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/22/4ade00b6-eb6f-443d-a726-b52fc5b5397c_937300.JPG",
        locality: "Raja Bazar",
        areaName: "Sealdah",
        costForTwo: "₹400 for two",
        cuisines: ["Chinese", "Asian", "fastfood", "Beverages", "Snacks"],
        avgRating: 4.1,
        sla: { deliveryTime: 41 },
      },
    },

    // -------- Pizza Hut --------
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "926594",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/9a478fcd-2921-48f1-a882-9b09239d7322_926594.JPG",
        locality: "Hedua",
        areaName: "Hedua",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.8,
        sla: { deliveryTime: 31 },
      },
    },
  ],
};

export default resobj;
