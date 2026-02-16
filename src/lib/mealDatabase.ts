export interface Meal {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  type: "breakfast" | "lunch" | "dinner" | "snack";
  diet: ("veg" | "eggitarian" | "non-veg")[];
  cost: number; // INR per serving
  ingredients: string[];
}

export const mealDatabase: Meal[] = [
  // BREAKFAST - VEG
  { name: "Paneer Paratha + Curd", calories: 420, protein: 20, carbs: 45, fats: 18, type: "breakfast", diet: ["veg", "eggitarian", "non-veg"], cost: 40, ingredients: ["paneer", "wheat flour", "curd", "butter"] },
  { name: "Moong Dal Chilla + Chutney", calories: 280, protein: 18, carbs: 35, fats: 8, type: "breakfast", diet: ["veg", "eggitarian", "non-veg"], cost: 25, ingredients: ["moong dal", "onion", "green chutney"] },
  { name: "Poha + Sev + Peanuts", calories: 320, protein: 10, carbs: 50, fats: 10, type: "breakfast", diet: ["veg", "eggitarian", "non-veg"], cost: 20, ingredients: ["poha", "peanuts", "sev", "onion"] },
  { name: "Oats Upma + Vegetables", calories: 290, protein: 12, carbs: 42, fats: 8, type: "breakfast", diet: ["veg", "eggitarian", "non-veg"], cost: 30, ingredients: ["oats", "vegetables", "peanuts"] },
  { name: "Besan Chilla + Mint Chutney", calories: 260, protein: 16, carbs: 30, fats: 9, type: "breakfast", diet: ["veg", "eggitarian", "non-veg"], cost: 20, ingredients: ["besan", "onion", "tomato", "mint"] },
  { name: "Idli + Sambar + Coconut Chutney", calories: 300, protein: 10, carbs: 55, fats: 5, type: "breakfast", diet: ["veg", "eggitarian", "non-veg"], cost: 25, ingredients: ["rice", "urad dal", "sambar powder", "coconut"] },
  { name: "Sattu Paratha + Pickle", calories: 380, protein: 18, carbs: 50, fats: 12, type: "breakfast", diet: ["veg", "eggitarian", "non-veg"], cost: 25, ingredients: ["sattu", "wheat flour", "onion"] },

  // BREAKFAST - EGG
  { name: "Egg Bhurji + 2 Roti", calories: 400, protein: 24, carbs: 40, fats: 16, type: "breakfast", diet: ["eggitarian", "non-veg"], cost: 35, ingredients: ["eggs", "wheat flour", "onion", "tomato"] },
  { name: "Boiled Eggs (4) + Toast", calories: 350, protein: 28, carbs: 25, fats: 14, type: "breakfast", diet: ["eggitarian", "non-veg"], cost: 30, ingredients: ["eggs", "bread", "butter"] },
  { name: "Egg Dosa + Chutney", calories: 340, protein: 18, carbs: 40, fats: 12, type: "breakfast", diet: ["eggitarian", "non-veg"], cost: 30, ingredients: ["eggs", "dosa batter", "chutney"] },

  // LUNCH - VEG
  { name: "Rajma Chawal + Salad", calories: 480, protein: 20, carbs: 72, fats: 10, type: "lunch", diet: ["veg", "eggitarian", "non-veg"], cost: 35, ingredients: ["rajma", "rice", "onion", "tomato", "cucumber"] },
  { name: "Chole + 3 Roti + Raita", calories: 520, protein: 22, carbs: 65, fats: 18, type: "lunch", diet: ["veg", "eggitarian", "non-veg"], cost: 40, ingredients: ["chickpeas", "wheat flour", "curd", "spices"] },
  { name: "Dal Tadka + Rice + Sabzi", calories: 450, protein: 18, carbs: 68, fats: 10, type: "lunch", diet: ["veg", "eggitarian", "non-veg"], cost: 30, ingredients: ["toor dal", "rice", "vegetables", "ghee"] },
  { name: "Paneer Bhurji + 3 Roti", calories: 520, protein: 28, carbs: 50, fats: 22, type: "lunch", diet: ["veg", "eggitarian", "non-veg"], cost: 50, ingredients: ["paneer", "wheat flour", "onion", "capsicum"] },
  { name: "Soya Chunk Curry + Rice", calories: 480, protein: 32, carbs: 60, fats: 12, type: "lunch", diet: ["veg", "eggitarian", "non-veg"], cost: 30, ingredients: ["soya chunks", "rice", "onion", "tomato"] },
  { name: "Kadhi Pakora + Rice", calories: 460, protein: 14, carbs: 65, fats: 16, type: "lunch", diet: ["veg", "eggitarian", "non-veg"], cost: 30, ingredients: ["besan", "curd", "rice", "spices"] },

  // LUNCH - NON-VEG
  { name: "Chicken Curry + 3 Roti", calories: 550, protein: 38, carbs: 48, fats: 20, type: "lunch", diet: ["non-veg"], cost: 70, ingredients: ["chicken", "wheat flour", "onion", "tomato", "spices"] },
  { name: "Fish Curry + Rice", calories: 480, protein: 32, carbs: 55, fats: 14, type: "lunch", diet: ["non-veg"], cost: 80, ingredients: ["fish", "rice", "coconut", "spices"] },
  { name: "Egg Curry + 3 Roti", calories: 450, protein: 24, carbs: 50, fats: 16, type: "lunch", diet: ["eggitarian", "non-veg"], cost: 35, ingredients: ["eggs", "wheat flour", "onion", "tomato"] },

  // DINNER - VEG
  { name: "Palak Paneer + 2 Roti", calories: 420, protein: 22, carbs: 38, fats: 20, type: "dinner", diet: ["veg", "eggitarian", "non-veg"], cost: 50, ingredients: ["paneer", "spinach", "wheat flour", "cream"] },
  { name: "Mixed Dal + 2 Roti + Salad", calories: 380, protein: 18, carbs: 52, fats: 10, type: "dinner", diet: ["veg", "eggitarian", "non-veg"], cost: 30, ingredients: ["mixed dal", "wheat flour", "vegetables"] },
  { name: "Tofu Stir Fry + Brown Rice", calories: 400, protein: 24, carbs: 48, fats: 12, type: "dinner", diet: ["veg", "eggitarian", "non-veg"], cost: 45, ingredients: ["tofu", "brown rice", "vegetables", "soy sauce"] },
  { name: "Paneer Tikka + Salad", calories: 350, protein: 26, carbs: 15, fats: 22, type: "dinner", diet: ["veg", "eggitarian", "non-veg"], cost: 55, ingredients: ["paneer", "capsicum", "onion", "curd"] },
  { name: "Mushroom Curry + 2 Roti", calories: 360, protein: 14, carbs: 45, fats: 14, type: "dinner", diet: ["veg", "eggitarian", "non-veg"], cost: 40, ingredients: ["mushroom", "wheat flour", "onion", "tomato"] },

  // DINNER - NON-VEG
  { name: "Grilled Chicken + Salad", calories: 380, protein: 42, carbs: 10, fats: 18, type: "dinner", diet: ["non-veg"], cost: 80, ingredients: ["chicken breast", "lettuce", "cucumber", "olive oil"] },
  { name: "Chicken Tikka + 2 Roti", calories: 450, protein: 36, carbs: 35, fats: 18, type: "dinner", diet: ["non-veg"], cost: 75, ingredients: ["chicken", "wheat flour", "curd", "spices"] },
  { name: "Egg Omelette (3) + 2 Roti", calories: 400, protein: 26, carbs: 35, fats: 18, type: "dinner", diet: ["eggitarian", "non-veg"], cost: 30, ingredients: ["eggs", "wheat flour", "onion", "capsicum"] },

  // SNACKS
  { name: "Protein Shake (Whey + Banana)", calories: 250, protein: 30, carbs: 28, fats: 4, type: "snack", diet: ["veg", "eggitarian", "non-veg"], cost: 40, ingredients: ["whey protein", "banana", "milk"] },
  { name: "Roasted Chana (100g)", calories: 190, protein: 12, carbs: 28, fats: 4, type: "snack", diet: ["veg", "eggitarian", "non-veg"], cost: 15, ingredients: ["roasted chana"] },
  { name: "Peanut Butter Toast", calories: 280, protein: 12, carbs: 30, fats: 14, type: "snack", diet: ["veg", "eggitarian", "non-veg"], cost: 20, ingredients: ["bread", "peanut butter"] },
  { name: "Paneer Tikka (6 pcs)", calories: 300, protein: 22, carbs: 8, fats: 20, type: "snack", diet: ["veg", "eggitarian", "non-veg"], cost: 45, ingredients: ["paneer", "capsicum", "curd"] },
  { name: "Sprouts Chaat", calories: 200, protein: 14, carbs: 30, fats: 4, type: "snack", diet: ["veg", "eggitarian", "non-veg"], cost: 15, ingredients: ["moong sprouts", "onion", "tomato", "lemon"] },
  { name: "Boiled Eggs (2) + Almonds", calories: 220, protein: 18, carbs: 4, fats: 14, type: "snack", diet: ["eggitarian", "non-veg"], cost: 20, ingredients: ["eggs", "almonds"] },
  { name: "Greek Yogurt + Nuts", calories: 240, protein: 16, carbs: 18, fats: 12, type: "snack", diet: ["veg", "eggitarian", "non-veg"], cost: 35, ingredients: ["greek yogurt", "mixed nuts", "honey"] },
  { name: "Makhana (Fox Nuts)", calories: 160, protein: 6, carbs: 22, fats: 4, type: "snack", diet: ["veg", "eggitarian", "non-veg"], cost: 20, ingredients: ["makhana", "ghee"] },
];
