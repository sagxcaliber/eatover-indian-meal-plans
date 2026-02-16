import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserProfile } from "@/lib/nutrition";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Calculator = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<Partial<UserProfile>>({
    gender: "male",
    activityLevel: "moderate",
    goal: "cutting",
    dietPreference: "veg",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const profile: UserProfile = {
      weight: Number(form.weight),
      height: Number(form.height),
      age: Number(form.age),
      gender: form.gender as UserProfile["gender"],
      activityLevel: form.activityLevel as UserProfile["activityLevel"],
      goal: form.goal as UserProfile["goal"],
      dietPreference: form.dietPreference as UserProfile["dietPreference"],
      budget: form.budget ? Number(form.budget) : undefined,
    };
    // Store in sessionStorage and navigate
    sessionStorage.setItem("eatover_profile", JSON.stringify(profile));
    navigate("/dashboard");
  };

  const update = (key: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">Tell Us About Yourself</h1>
          <p className="text-muted-foreground mb-8">
            We'll calculate your exact macros and generate a personalized Indian meal plan.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="70"
                  required
                  min={30}
                  max={200}
                  value={form.weight || ""}
                  onChange={(e) => update("weight", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="175"
                  required
                  min={100}
                  max={250}
                  value={form.height || ""}
                  onChange={(e) => update("height", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="25"
                  required
                  min={16}
                  max={65}
                  value={form.age || ""}
                  onChange={(e) => update("age", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Gender</Label>
                <Select value={form.gender} onValueChange={(v) => update("gender", v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Activity Level</Label>
              <Select value={form.activityLevel} onValueChange={(v) => update("activityLevel", v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low (1–2 days/week)</SelectItem>
                  <SelectItem value="moderate">Moderate (3–5 days/week)</SelectItem>
                  <SelectItem value="high">High (6–7 days/week)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Fitness Goal</Label>
              <Select value={form.goal} onValueChange={(v) => update("goal", v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="cutting">Cutting (Fat Loss)</SelectItem>
                  <SelectItem value="bulking">Bulking (Muscle Gain)</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Diet Preference</Label>
              <Select value={form.dietPreference} onValueChange={(v) => update("dietPreference", v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="veg">Vegetarian</SelectItem>
                  <SelectItem value="eggitarian">Eggitarian</SelectItem>
                  <SelectItem value="non-veg">Non-Vegetarian</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Monthly Food Budget (₹) — Optional</Label>
              <Input
                id="budget"
                type="number"
                placeholder="6000"
                min={1000}
                max={50000}
                value={form.budget || ""}
                onChange={(e) => update("budget", e.target.value)}
              />
            </div>

            <Button type="submit" size="lg" className="w-full font-semibold text-base">
              Generate My Meal Plan <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Calculator;
