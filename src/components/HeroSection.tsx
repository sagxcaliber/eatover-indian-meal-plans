import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="Indian fitness food" className="h-full w-full object-cover" />
      <div className="absolute inset-0 gradient-hero opacity-85" />
    </div>

    <div className="relative container mx-auto px-4 py-24 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground mb-6">
          <Zap className="h-4 w-4" />
          Built for Indian gym-goers
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
          High-Protein Indian
          <br />
          Meal Plans That
          <br />
          <span className="text-accent">Actually Work</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg">
          Stop guessing your macros. Get a personalized 7-day meal plan with dal, paneer, chicken & more — tailored to your fitness goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" variant="secondary" className="text-base font-semibold">
            <Link to="/calculator">
              Get My Free Plan <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="mt-8 flex items-center gap-6 text-primary-foreground/70 text-sm">
          <span>✓ 100% Indian foods</span>
          <span>✓ Veg & Non-veg</span>
          <span>✓ Budget friendly</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
