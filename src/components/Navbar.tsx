import { Link, useLocation } from "react-router-dom";
import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Dumbbell className="h-6 w-6 text-primary" />
          <span className="text-foreground">Eat<span className="text-primary">Over</span></span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}
          >
            Home
          </Link>
          <Link
            to="/calculator"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/calculator") ? "text-primary" : "text-muted-foreground"}`}
          >
            Get My Plan
          </Link>
          <Button asChild size="sm">
            <Link to="/calculator">Start Free</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background px-4 py-4 space-y-3">
          <Link to="/" className="block text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/calculator" className="block text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>Get My Plan</Link>
          <Button asChild size="sm" className="w-full">
            <Link to="/calculator" onClick={() => setMobileOpen(false)}>Start Free</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
