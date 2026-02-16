import { Calculator, IndianRupee, Salad, Target, ShoppingCart, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Target, title: "Personalized Macros", desc: "BMR + TDEE calculated for your exact body stats and fitness goal." },
  { icon: Salad, title: "Indian Meals Only", desc: "Dal, paneer, roti, rice — real food you already eat, optimized for protein." },
  { icon: Calculator, title: "Calorie Accuracy", desc: "Every meal is macro-verified. No guesswork, just science." },
  { icon: IndianRupee, title: "Budget Friendly", desc: "Get estimated daily costs. Eat healthy without breaking the bank." },
  { icon: ShoppingCart, title: "Weekly Grocery List", desc: "Auto-generated shopping list aggregated from your full meal plan." },
  { icon: RotateCcw, title: "Regenerate Anytime", desc: "Don't like a plan? Hit regenerate for fresh meal combos (Pro)." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Everything You Need to <span className="text-primary">Eat Right</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          No more generic Western diet plans. EatOver is built ground-up for Indian food lovers who lift.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={item}
            className="rounded-xl border bg-card p-6 shadow-card hover:shadow-elevated transition-shadow"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
              <f.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;
