const menuData = [
  {
    id: 1,
    name: "Iceberg Wedge Salad with House Cured Bacon",
    description: "tomato salsa gorgonzola",
    price: 7.5,
    category: "APPETIZERS",
  },
  {
    id: 2,
    name: "Sautéed Shredded Brussels Sprouts",
    description: "bacon hazelnuts gorgonzola",
    price: 6.95,
    category: "APPETIZERS",
  },
  {
    id: 3,
    name: "Kale Salad",
    description: "parmesan crisp corn radish garlic-lemon vinaigrette",
    price: 7.5,
    category: "APPETIZERS",
  },
  {
    id: 4,
    name: "Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto",
    description: "grilled tomato salsa crostini",
    price: 6.95,
    category: "APPETIZERS",
  },
  {
    id: 5,
    name: "Chicken and Cabbage Eggrolls",
    description: "hot & sour dipping sauce",
    price: 6.95,
    category: "APPETIZERS",
  },
  {
    id: 6,
    name: "Farfalle Pasta with Braised Pork in Tomato Cream",
    description: "capers butternut squash kale",
    price: 12.95,
    category: "ENTREES",
  },
  {
    id: 7,
    name: "Stout Braised Bratwurst",
    description:
      "horseradish mashed potatoes roasted root veggies grilled onion",
    price: 13.95,
    category: "ENTREES",
  },
  {
    id: 8,
    name: "Salmon & Crispy Tofu in Yellow Curry Sauce",
    description: "vegetable sauté golden raisin chutney",
    price: 15.95,
    category: "ENTREES",
  },
  {
    id: 9,
    name: "Sesame Shrimp",
    description:
      "udon noodles ramen broth shiitake mushrooms bean sprouts scallions",
    price: 13.95,
    category: "ENTREES",
  },
  {
    id: 10,
    name: "Turkey & Avocado",
    description: "with tomato",
    price: 7.95,
    category: "SANDWICHES COLD half",
  },
  {
    id: 11,
    name: "Turkey & Avocado",
    description: "with tomato",
    price: 9.25,
    category: "SANDWICHES COLD full",
  },
  {
    id: 12,
    name: "Pub Club",
    description: "turkey, bacon. lettuce, tomato",
    price: 7.95,
    category: "SANDWICHES COLD half",
  },
  {
    id: 13,
    name: "Pub Club",
    description: "turkey, bacon. lettuce, tomato",
    price: 9.25,
    category: "SANDWICHES COLD full",
  },
  {
    id: 14,
    name: "Rare Roast Beef & Swiss",
    description: "sweet-hot mustard, lettuce, red onion",
    price: 7.95,
    category: "SANDWICHES COLD half",
  },
  {
    id: 15,
    name: "Rare Roast Beef & Swiss",
    description: "sweet-hot mustard, lettuce, red onion",
    price: 9.25,
    category: "SANDWICHES COLD full",
  },
  {
    id: 16,
    name: "Veggie",
    description: "pepper jack, avocado, sprout, tomato",
    price: 7.95,
    category: "SANDWICHES COLD half",
  },
  {
    id: 17,
    name: "Veggie",
    description: "pepper jack, avocado, sprout, tomato",
    price: 9.25,
    category: "SANDWICHES COLD full",
  },
  {
    id: 18,
    name: "Southwest Chicken Breast",
    description: "Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese",
    price: 9.5,
    category: "SANDWICHES HOT",
  },
  {
    id: 19,
    name: "Portobello Fresh Mozzarella",
    description:
      "Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli",
    price: 9.5,
    category: "SANDWICHES HOT",
  },
  {
    id: 20,
    name: "Chipotle BBQ Pork Sandwich",
    description: "Pickled Jalapeño Slaw",
    price: 9.5,
    category: "SANDWICHES HOT",
  },
  {
    id: 21,
    name: "Bacon Burger*",
    description: "Swiss, Lettuce, Tomato",
    price: 9.25,
    category: "SANDWICHES HOT",
  },
  {
    id: 22,
    name: "Mexi Burger*",
    description: "Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole",
    price: 9.25,
    category: "SANDWICHES HOT",
  },
  {
    id: 23,
    name: "Herb Marinated Top Sirloin*",
    description:
      "Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli, Served Open Faced on Fococcia",
    price: 10.95,
    category: "SANDWICHES HOT",
  },
  {
    id: 24,
    name: "Roast Beef with Ancho Au Jus",
    description: "Jack Cheese, Grilled Onions, Served on Crumb Bros. Baguette",
    price: 9.75,
    category: "SANDWICHES HOT",
  },
  {
    id: 25,
    name: "Blackened Catfish",
    description:
      "Creole Peppers & Onions, Fresh Herb Aioli, Served on house made Sourdough",
    price: 9.75,
    category: "SANDWICHES HOT",
  },
  {
    id: 26,
    name: "French Onion or Soup of the Day",
    description: "",
    price: 4.95,
    category: "SOUP & SALAD COMBOS",
  },
  {
    id: 27,
    name: "French Onion or Soup of the Day Combos",
    description: "with small green salad, fresh fruit or house pasta",
    price: 7.25,
    category: "SOUP & SALAD COMBOS",
  },
  {
    id: 28,
    name: "French Onion or Soup of the Day Combos",
    description: "with half pasta of the day",
    price: 8.75,
    category: "SOUP & SALAD COMBOS",
  },
  {
    id: 29,
    name: "Chicken Fajitas",
    description: "Onions, Poblano and Bell Peppers, Guacamole, Two Salsas",
    price: 10.95,
    category: "FAJITAS",
  },
  {
    id: 30,
    name: "Sirloin Steak Fajitas",
    description:
      "Onions, Poblano and Bell Peppers, Carrots, Onion, Guacamole, Two Salsas",
    price: 10.95,
    category: "FAJITAS",
  },
  {
    id: 31,
    name: "Beer Battered Fish Tacos",
    description: "with Jalapeño Remoulade, Roasted Salsa, Cabbage",
    price: 9.95,
    category: "TACOS",
  },
  {
    id: 32,
    name: "Carne Asada Tacos",
    description: "(marinated sirloin) with Guacamole, Tomatillo Salsa",
    price: 9.95,
    category: "TACOS",
  },
  {
    id: 33,
    name: "Citrus Marinated Chicken Tacos",
    description: "with Guacamole, Tomatillo Salsa",
    price: 9.95,
    category: "TACOS",
  },
  {
    id: 34,
    name: "Grilled Veggie Tacos",
    description:
      "with Zucchini, Yellow Squash, Bell Peppers, Onion, Guacamole, Tomatillo Salsa",
    price: 9.95,
    category: "TACOS",
  },
  {
    id: 35,
    name: "Enchiladas Uno",
    description:
      "with Southwestern Succotash, Black Beans with Chipotle Crema, Choice of Beef, Chicken, Cheese or Veggie",
    price: 8.5,
    category: "ENCHILADAS",
  },
  {
    id: 36,
    name: "Enchiladas Dos",
    description:
      "with Southwestern Succotash, Black Beans with Chipotle Crema, Choice of Beef, Chicken, Cheese or Veggie",
    price: 9.95,
    category: "ENCHILADAS",
  },
  {
    id: 37,
    name: "Enchiladas Tres",
    description:
      "with Southwestern Succotash, Black Beans with Chipotle Crema, Choice of Beef, Chicken, Cheese or Veggie",
    price: 11.5,
    category: "ENCHILADAS",
  },
  {
    id: 38,
    name: "Chili Relleno",
    description:
      "Stuffed with Jack Cheese & Corn Glazed Yam, Chayote Squash Succotash, Red Chili Sauce",
    price: 9.95,
    category: "OTHER",
  },
  {
    id: 39,
    name: "Pepita Crusted Salmon with Chipotle Glaze",
    description: "chevre whipped yams, jicama slaw, tomatillo sauce",
    price: 10.95,
    category: "OTHER",
  },
  {
    id: 40,
    name: "Quiche",
    description:
      "Bacon, Swiss, Mushroom, Zucchini and Mushroom Quiche Choice of Fresh Fruit or Green Salad",
    price: 8.95,
    category: "OTHER",
  },
  {
    id: 41,
    name: "Grilled Red Trout Salad",
    description:
      "Lentils, Tomatoes, Cukes, Green Beans, Red Bells, Almonds, Sundried Tomato Vinaigrette",
    price: 10.95,
    category: "GREEN SALADS",
  },
  {
    id: 42,
    name: "Smoked Turkey Salad",
    description:
      "Cheese Tortellini, Bacon, Tomato, Cucumber, Egg, Black Bean-Corn Salsa, Avocado",
    price: 9.95,
    category: "GREEN SALADS",
  },
  {
    id: 43,
    name: "Asian Grilled Chicken Salad",
    description:
      "Snow Peas, Carrot Slaw, Red Bells, Water Chestnut, Peanuts, Baby Corn, Cilantro, Cukes, Spicy Peanut Dressing",
    price: 10.5,
    category: "GREEN SALADS",
  },
  {
    id: 44,
    name: "Southwest Grilled Chicken Salad",
    description:
      "Tomato, Guacamole, pepitas, Jicama, Corn & Black Bean Salsa, Orange Wedges, Spicy Citrus Vinaigrette",
    price: 10.5,
    category: "GREEN SALADS",
  },
  {
    id: 45,
    name: "Mediterranean Salad",
    description:
      "Italian Sausage, Artichoke Hearts, Green Beans, Roma Tomato, Kalamatas, Red Onion, Cucumber, Croutons, Parmesan, Fresh Mozzarella, Gorgonzola Vinaigrette",
    price: 9.95,
    category: "GREEN SALADS",
  },
  {
    id: 46,
    name: "Grilled Salmon Salad",
    description:
      "Artichoke tapenade, shredded kale, corn, radish, parmesan crisps",
    price: 11.5,
    category: "GREEN SALADS",
  },
];

module.exports = menuData;
