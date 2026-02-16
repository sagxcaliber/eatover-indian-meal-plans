export interface UserProfile {
  weight: number; // kg
  height: number; // cm
  age: number;
  gender: "male" | "female";
  activityLevel: "low" | "moderate" | "high";
  goal: "bulking" | "cutting" | "maintenance";
  dietPreference: "veg" | "eggitarian" | "non-veg";
  budget?: number; // monthly INR
}

export interface MacroTargets {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

export function calculateBMR(profile: UserProfile): number {
  if (profile.gender === "male") {
    return 10 * profile.weight + 6.25 * profile.height - 5 * profile.age + 5;
  }
  return 10 * profile.weight + 6.25 * profile.height - 5 * profile.age - 161;
}

export function calculateTDEE(bmr: number, activityLevel: UserProfile["activityLevel"]): number {
  const multipliers = { low: 1.375, moderate: 1.55, high: 1.725 };
  return Math.round(bmr * multipliers[activityLevel]);
}

export function calculateMacros(profile: UserProfile): MacroTargets {
  const bmr = calculateBMR(profile);
  const tdee = calculateTDEE(bmr, profile.activityLevel);

  let calories: number;
  let proteinPerKg: number;

  switch (profile.goal) {
    case "cutting":
      calories = Math.round(tdee * 0.8);
      proteinPerKg = 2.0;
      break;
    case "bulking":
      calories = Math.round(tdee * 1.15);
      proteinPerKg = 1.7;
      break;
    default:
      calories = tdee;
      proteinPerKg = 1.8;
  }

  const protein = Math.round(profile.weight * proteinPerKg);
  const proteinCalories = protein * 4;
  const fatCalories = Math.round(calories * 0.25);
  const fats = Math.round(fatCalories / 9);
  const carbCalories = calories - proteinCalories - fatCalories;
  const carbs = Math.round(carbCalories / 4);

  return { calories, protein, carbs, fats };
}
