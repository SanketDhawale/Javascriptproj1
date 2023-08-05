const foodData = [[
    {
      "id": 1,
      "foodname": "Apple",
      "calorie": 95,
      "category": "Fruit",
      "protiens": 0.3,
      "cab": 25
    },
    {
      "id": 2,
      "foodname": "Banana",
      "calorie": 105,
      "category": "Fruit",
      "protiens": 1.3,
      "cab": 27
    },
    {
      "id": 3,
      "foodname": "Orange",
      "calorie": 62,
      "category": "Fruit",
      "protiens": 1.2,
      "cab": 15
    },
    {
      "id": 4,
      "foodname": "Pear",
      "calorie": 95,
      "category": "Fruit",
      "protiens": 0.5,
      "cab": 25
    },
    {
      "id": 5,
      "foodname": "Grapefruit",
      "calorie": 42,
      "category": "Fruit",
      "protiens": 1.1,
      "cab": 11
    },
    {
      "id": 6,
      "foodname": "Strawberry",
      "calorie": 46,
      "category": "Fruit",
      "protiens": 1.5,
      "cab": 10
    },
    {
      "id": 7,
      "foodname": "Blueberry",
      "calorie": 52,
      "category": "Fruit",
      "protiens": 1.1,
      "cab": 14
    },
    {
      "id": 8,
      "foodname": "Raspberry",
      "calorie": 52,
      "category": "Fruit",
      "protiens": 1.4,
      "cab": 15
    },
    {
      "id": 9,
      "foodname": "Broccoli",
      "calorie": 34,
      "category": "Vegetable",
      "protiens": 3.3,
      "cab": 5
    },
    {
      "id": 10,
      "foodname": "Cauliflower",
      "calorie": 25,
      "category": "Vegetable",
      "protiens": 2.6,
      "cab": 5
    },
    {
      "id": 11,
      "foodname": "Green Beans",
      "calorie": 31,
      "category": "Vegetable",
      "protiens": 2.4,
      "cab": 4
    },
    {
      "id": 12,
      "foodname": "Asparagus",
      "calorie": 20,
      "category": "Vegetable",
      "protiens": 2.2,
      "cab": 2
    },
    {
      "id": 13,
      "foodname": "Spinach",
      "calorie": 23,
      "category": "Vegetable",
      "protiens": 3.5,
      "cab": 4
    },
    {
      "id": 14,
      "foodname": "Kale",
      "calorie": 33,
      "category": "Vegetable",
      "protiens": 4.3,
      "cab": 7
    },
    {
      "id": 15,
      "foodname": "Sweet Potato",
      "calorie": 103,
      "category": "Vegetable",
      "protiens": 2,
      "cab": 27
    },
    {
      "id": 16,
      "foodname": "Potato",
      "calorie": 161,
      "category": "Vegetable",
      "protiens": 4.3,
      "cab": 37
    },
    {"id": 17,
      "foodname": "Carrot",
      "calorie": 41,
      "category": "Vegetable",
      "protiens": 0.9,
      "cab": 9
    },
    {
      "id": 18,
      "foodname": "Onion",
      "calorie": 40,
      "category": "Vegetable",
      "protiens": 1.4,
      "cab": 9
    },
    {
      "id": 19,
      "foodname": "Egg",
      "calorie": 77,
      "category": "Protein",
      "protiens": 6.3,
      "cab": 0.5
    },
    {
      "id": 20,
      "foodname": "Chicken Breast",
      "calorie": 165,
      "category": "Protein",
      "protiens": 31,
      "cab": 0
    },
    {
      "id": 21,
      "foodname": "Salmon",
      "calorie": 206,
      "category": "Protein",
      "protiens": 22,
      "cab": 0
    },
    {
      "id": 22,
      "foodname": "Tuna",
      "calorie": 179,
      "category": "Protein",
      "protiens": 39,
      "cab": 0
    },
    {
      "id": 23,
      "foodname": "Beef",
      "calorie": 250,
      "category": "Protein",
      "protiens": 26,
      "cab": 0
    },
    {
      "id": 24,
      "foodname": "Pork",
      "calorie": 242,
      "category": "Protein",
      "protiens": 26,
      "cab": 0
    },
    {
      "id": 25,
      "foodname": "Lamb",
      "calorie": 294,
      "category": "Protein",
      "protiens": 25,
      "cab": 0
    },
    {
      "id": 26,
      "foodname": "Shrimp",
      "calorie": 85,
      "category": "Protein",
      "protiens": 20,
      "cab": 0.2
    },
    {
      "id": 27,
      "foodname": "Quinoa",
      "calorie": 120,
      "category": "Grain",
      "protiens": 4.4,
      "cab": 21
    },
    {
      "id": 28,
      "foodname": "Brown Rice",
      "calorie": 216,
      "category": "Grain",
      "protiens": 4.5,
      "cab": 45
    },
    {
      "id": 29,
      "foodname": "Oats",
      "calorie": 389,
      "category": "Grain",
      "protiens": 16.9,
      "cab": 66
    },
    {
      "id": 30,
      "foodname": "Quinoa",
      "calorie": 120,
      "category": "Grain",
      "protiens": 4.4,
      "cab": 21
    },
    {
      "id": 31,
      "foodname": "Bread",
      "calorie": 265,
      "category": "Grain",
      "protiens": 9.4,
      "cab": 49
    },
    {
      "id": 32,
      "foodname": "Pasta",
      "calorie": 131,
      "category": "Grain",
      "protiens": 5.5,
      "cab": 26
    },
    {
      "id": 33,
      "foodname": "Milk",
      "calorie": 60,
      "category": "Dairy",
      "protiens": 3.2,
      "cab": 5.1
    },
    {
      "id": 34,
      "foodname": "Cheese",
      "calorie": 402,
      "category": "Dairy",
      "protiens": 25,
      "cab": 2.4
    },
    {
      "id": 35,
      "foodname": "Yogurt",
      "calorie": 59,
      "category": "Dairy",
      "protiens": 3.5,
      "cab": 5
    },
    {
      "id": 36,
      "foodname": "Butter",
      "calorie": 717,
      "category": "Dairy",
      "protiens": 0.9,
      "cab": 0.1
    },
    {
      "id": 37,
      "foodname": "Almonds",
      "calorie": 579,
      "category": "Nuts",
      "protiens": 21,
      "cab": 22
    },
    {
      "id": 38,
      "foodname": "Walnuts",
      "calorie": 654,
      "category": "Nuts",
      "protiens": 15,
      "cab": 14
    },
    {
      "id": 39,
      "foodname": "Peanuts",
      "calorie": 567,
      "category": "Nuts",
      "protiens": 26,
      "cab": 16
    },
    {
      "id": 40,
      "foodname": "Cashews",
      "calorie": 553,
      "category": "Nuts",
      "protiens": 18,
      "cab": 30
    }
  ]
  
    // ... the given food data array ...
  ];
  
  // Flatten the array of arrays into a single array
  const flattenedFoodData = foodData.flat();
  
  // List all the food items
  function listAllFoodItems(data) {
    return data.map(item => item.foodname);
  }
  
  // List all the food items with a specific category
  function listFoodItemsByCategory(data, category) {
    return data.filter(item => item.category === category).map(item => item.foodname);
  }
  
  // List all the food items with category "Fruit"
  const fruits = listFoodItemsByCategory(flattenedFoodData, 'Fruit');
  
  // List all the food items with category "Vegetable"
  const vegetables = listFoodItemsByCategory(flattenedFoodData, 'Vegetable');
  
  // List all the food items with category "Protein"
  const proteins = listFoodItemsByCategory(flattenedFoodData, 'Protein');
  
  // List all the food items with category "Nuts"
  const nuts = listFoodItemsByCategory(flattenedFoodData, 'Nuts');
  
  // List all the food items with category "Grain"
  const grains = listFoodItemsByCategory(flattenedFoodData, 'Grain');
  
  // List all the food items with category "Dairy"
  const dairy = listFoodItemsByCategory(flattenedFoodData, 'Dairy');
  
  // List all the food items with calorie above 100
  function listFoodItemsAboveCalorie(data, calorie) {
    return data.filter(item => item.calorie > calorie).map(item => item.foodname);
  }
  
  const foodItemsAbove100Cal = listFoodItemsAboveCalorie(flattenedFoodData, 100);
  
  // List all the food items with calorie below 100
  function listFoodItemsBelowCalorie(data, calorie) {
    return data.filter(item => item.calorie < calorie).map(item => item.foodname);
  }
  
  const foodItemsBelow100Cal = listFoodItemsBelowCalorie(flattenedFoodData, 100);
  
  // List all the food items sorted by protein content (highest to lowest)
  function sortFoodItemsByProtein(data) {
    return data.sort((a, b) => b.protiens - a.protiens).map(item => item.foodname);
  }
  
  const foodItemsByProtein = sortFoodItemsByProtein(flattenedFoodData);
  
  // List all the food items sorted by carbohydrate content (lowest to highest)
  function sortFoodItemsByCarb(data) {
    return data.sort((a, b) => a.cab - b.cab).map(item => item.foodname);
  }
  
  const foodItemsByCarb = sortFoodItemsByCarb(flattenedFoodData);
  
  // Output the results
  console.log("All food items:", listAllFoodItems(flattenedFoodData));
  console.log("Vegetables:", vegetables);
  console.log("Fruits:", fruits);
  console.log("Proteins:", proteins);
  console.log("Nuts:", nuts);
  console.log("Grains:", grains);
  console.log("Dairy:", dairy);
  console.log("Food items with calorie above 100:", foodItemsAbove100Cal);
  console.log("Food items with calorie below 100:", foodItemsBelow100Cal);
  console.log("Food items with highest protein content to lowest:", foodItemsByProtein);
  console.log("Food items with lowest carbohydrate content to highest:", foodItemsByCarb);
  