import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MacroSummary from "@/components/MacroSummary";
import MealPlanTable from "@/components/MealPlanTable";
import GroceryList from "@/components/GroceryList";
import { Button } from "@/components/ui/button";
import { UserProfile, calculateMacros } from "@/lib/nutrition";
import { generateMealPlan, WeeklyPlan } from "@/lib/mealPlanGenerator";
import { RotateCcw, IndianRupee, Download } from "lucide-react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState<WeeklyPlan | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const macros = useMemo(() => (profile ? calculateMacros(profile) : null), [profile]);

  useEffect(() => {
    const stored = sessionStorage.getItem("eatover_profile");
    if (!stored) {
      navigate("/calculator");
      return;
    }
    const p: UserProfile = JSON.parse(stored);
    setProfile(p);
  }, [navigate]);

  useEffect(() => {
    if (profile && macros) {
      setPlan(generateMealPlan(profile, macros, 7));
    }
  }, [profile, macros]);

  const regenerate = () => {
    if (profile && macros) {
      setPlan(generateMealPlan(profile, macros, 7));
    }
  };

  if (!plan || !macros || !profile) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Your Meal Plan</h1>
              <p className="text-muted-foreground mt-1">
                {profile.goal === "cutting" ? "Cutting" : profile.goal === "bulking" ? "Bulking" : "Maintenance"} plan
                • {profile.dietPreference === "veg" ? "Vegetarian" : profile.dietPreference === "eggitarian" ? "Eggitarian" : "Non-Veg"}
                • {profile.weight}kg
              </p>
            </div>
            <Button onClick={regenerate} variant="outline" className="gap-2">
              <RotateCcw className="h-4 w-4" /> Regenerate
            </Button>
          </div>

          {/* Target macros */}
          <MacroSummary macros={macros} label="Your Daily Macro Targets" />
        </motion.div>

        {/* Meal plan table */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
          <h2 className="text-xl font-semibold text-foreground mb-4">7-Day Meal Plan</h2>
          <MealPlanTable days={plan.days} />
        </motion.div>

        {/* Cost summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="rounded-xl border bg-card p-6 shadow-card">
            <div className="flex items-center gap-2 mb-4">
              <IndianRupee className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-card-foreground">Cost Estimate</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Average daily cost</span>
                <span className="font-semibold text-foreground">₹{plan.avgDailyCost}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Weekly cost</span>
                <span className="font-semibold text-foreground">₹{plan.totalWeeklyCost}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monthly estimate</span>
                <span className="font-bold text-primary text-lg">₹{Math.round(plan.totalWeeklyCost * 4.3)}</span>
              </div>
            </div>
          </div>

          <GroceryList groceryList={plan.groceryList} />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
