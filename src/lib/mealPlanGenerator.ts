import { MacroTargets, UserProfile } from "./nutrition";
import { Meal, mealDatabase } from "./mealDatabase";

export interface DayPlan {
  day: string;
  meals: {
    breakfast: Meal;
    lunch: Meal;
    snack: Meal;
    dinner: Meal;
  };
  totals: MacroTargets;
  cost: number;
}

export interface WeeklyPlan {
  days: DayPlan[];
  groceryList: Record<string, number>; // ingredient -> count of appearances
  totalWeeklyCost: number;
  avgDailyCost: number;
}

function getMealsForDiet(diet: UserProfile["dietPreference"]) {
  return mealDatabase.filter((m) => m.diet.includes(diet));
}

function pickBestMeal(
  available: Meal[],
  type: Meal["type"],
  targetCals: number,
  usedNames: Set<string>
): Meal {
  const typed = available.filter((m) => m.type === type && !usedNames.has(m.name));
  if (typed.length === 0) {
    return available.filter((m) => m.type === type)[0];
  }
  // Sort by how close calories are to target, with slight protein bias
  typed.sort((a, b) => {
    const diffA = Math.abs(a.calories - targetCals) - a.protein * 2;
    const diffB = Math.abs(b.calories - targetCals) - b.protein * 2;
    return diffA - diffB;
  });
  // Pick from top 3 randomly for variety
  const top = typed.slice(0, Math.min(3, typed.length));
  return top[Math.floor(Math.random() * top.length)];
}

const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export function generateMealPlan(profile: UserProfile, macros: MacroTargets, days: number = 7): WeeklyPlan {
  const available = getMealsForDiet(profile.dietPreference);
  const targetPerMeal = {
    breakfast: macros.calories * 0.25,
    lunch: macros.calories * 0.30,
    snack: macros.calories * 0.15,
    dinner: macros.calories * 0.30,
  };

  const usedBreakfasts = new Set<string>();
  const usedLunches = new Set<string>();
  const usedDinners = new Set<string>();
  const usedSnacks = new Set<string>();

  const dayPlans: DayPlan[] = [];
  const groceryCount: Record<string, number> = {};

  for (let i = 0; i < days; i++) {
    const breakfast = pickBestMeal(available, "breakfast", targetPerMeal.breakfast, usedBreakfasts);
    const lunch = pickBestMeal(available, "lunch", targetPerMeal.lunch, usedLunches);
    const snack = pickBestMeal(available, "snack", targetPerMeal.snack, usedSnacks);
    const dinner = pickBestMeal(available, "dinner", targetPerMeal.dinner, usedDinners);

    usedBreakfasts.add(breakfast.name);
    usedLunches.add(lunch.name);
    usedDinners.add(dinner.name);
    usedSnacks.add(snack.name);

    const allMeals = [breakfast, lunch, snack, dinner];
    const totals: MacroTargets = {
      calories: allMeals.reduce((s, m) => s + m.calories, 0),
      protein: allMeals.reduce((s, m) => s + m.protein, 0),
      carbs: allMeals.reduce((s, m) => s + m.carbs, 0),
      fats: allMeals.reduce((s, m) => s + m.fats, 0),
    };
    const cost = allMeals.reduce((s, m) => s + m.cost, 0);

    allMeals.forEach((m) => {
      m.ingredients.forEach((ing) => {
        groceryCount[ing] = (groceryCount[ing] || 0) + 1;
      });
    });

    dayPlans.push({ day: dayNames[i], meals: { breakfast, lunch, snack, dinner }, totals, cost });
  }

  const totalWeeklyCost = dayPlans.reduce((s, d) => s + d.cost, 0);

  return {
    days: dayPlans,
    groceryList: groceryCount,
    totalWeeklyCost,
    avgDailyCost: Math.round(totalWeeklyCost / days),
  };
}
