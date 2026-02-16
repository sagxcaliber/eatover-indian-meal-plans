import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    features: ["3-day meal plan", "Macro breakdown", "Basic grocery list", "Veg & Non-veg options"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "₹399",
    period: "/month",
    features: [
      "Full 7-day meal plan",
      "Downloadable grocery list",
      "Regenerate plans",
      "Budget optimization",
      "Priority support",
    ],
    cta: "Go Pro",
    popular: true,
  },
];

const PricingSection = () => (
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Simple, Honest Pricing
        </h2>
        <p className="text-muted-foreground">Start free. Upgrade when you're serious about gains.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`rounded-2xl border p-8 ${
              plan.popular
                ? "border-primary bg-primary text-primary-foreground shadow-elevated"
                : "bg-card text-card-foreground shadow-card"
            }`}
          >
            {plan.popular && (
              <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground mb-4">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-extrabold">{plan.price}</span>
              <span className={`text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.period}
              </span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant={plan.popular ? "secondary" : "default"}
              className="w-full font-semibold"
            >
              <Link to="/calculator">{plan.cta}</Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
