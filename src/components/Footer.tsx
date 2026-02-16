import { Dumbbell } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-muted/50 py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 font-bold text-lg">
          <Dumbbell className="h-5 w-5 text-primary" />
          <span className="text-foreground">Eat<span className="text-primary">Over</span></span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 EatOver. Fuel your gains with Indian nutrition.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
