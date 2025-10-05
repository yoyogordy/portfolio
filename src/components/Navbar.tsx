import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-3'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-heading font-bold">
          Amit Gordon<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white absolute w-full transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-60 border-b shadow-md' : 'max-h-0 overflow-hidden'
      }`}>
        <nav className="container-custom py-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <a 
                href="#about" 
                className="block py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#portfolio" 
                className="block py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="block py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
