
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out",
        isScrolled ? 
          "glass shadow-sm py-3" : 
          "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-ocean-500 to-beacon-400 flex items-center justify-center shadow-md">
            <span className="font-bold text-white text-lg">OB</span>
          </div>
          <div className="font-medium text-xl">
            <span>Ocean</span>
            <span className="text-ocean-600">Beacon</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/#services" className="font-medium text-foreground/80 hover:text-foreground transition-colors">
            Services
          </Link>
          <Link to="/#booking" className="font-medium text-foreground/80 hover:text-foreground transition-colors">
            Book Appointment
          </Link>
          <Link to="/#tracking" className="font-medium text-foreground/80 hover:text-foreground transition-colors">
            Track Order
          </Link>
          <Link to="/#contact" className="font-medium text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-foreground/5 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "fixed inset-0 top-[72px] z-40 glass md:hidden transition-transform duration-300 ease-in-out transform",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col p-6 space-y-6">
            <Link 
              to="/" 
              className="font-medium text-foreground/80 hover:text-foreground transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/#services" 
              className="font-medium text-foreground/80 hover:text-foreground transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/#booking" 
              className="font-medium text-foreground/80 hover:text-foreground transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Appointment
            </Link>
            <Link 
              to="/#tracking" 
              className="font-medium text-foreground/80 hover:text-foreground transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Track Order
            </Link>
            <Link 
              to="/#contact" 
              className="font-medium text-foreground/80 hover:text-foreground transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
