import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll to section with offset
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Offset for sticky category nav
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm shadow-sm py-3'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a 
          href="#" 
          className="text-xl md:text-2xl font-heading font-bold"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          עמית גורדון<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 lg:gap-8 items-center" dir="rtl">
            <li>
              <a 
                href="#category-work" 
                className="hover:text-primary transition-colors font-medium"
                onClick={(e) => handleNavClick(e, 'category-work')}
              >
                עבודות
              </a>
            </li>
            <li>
              <a 
                href="#category-music-creative" 
                className="hover:text-primary transition-colors font-medium"
                onClick={(e) => handleNavClick(e, 'category-music-creative')}
              >
              מוסיקה וקריאייטיב
              </a>
            </li>
            <li>
              <a 
                href="#category-english" 
                className="hover:text-primary transition-colors font-medium"
                onClick={(e) => handleNavClick(e, 'category-english')}
              >
             באנגלית
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="hover:text-primary transition-colors font-medium"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
              צור קשר
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white absolute w-full transition-all duration-300 ease-in-out shadow-md ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <nav className="container-custom py-4 border-t">
          <ul className="flex flex-col space-y-2">
            <li>
              <a 
                href="#category-work" 
                className="block py-3 hover:text-primary transition-colors font-medium text-center"
                onClick={(e) => handleNavClick(e, 'category-work')}
              >
              עבודות
              </a>
            </li>
            <li>
              <a 
                href="#category-music-creative" 
                className="block py-3 hover:text-primary transition-colors font-medium text-center"
                onClick={(e) => handleNavClick(e, 'category-music-creative')}
              >
              מוסיקה וקריאייטיב
              </a>
            </li>
            <li>
              <a 
                href="#category-english" 
                className="block py-3 hover:text-primary transition-colors font-medium text-center"
                onClick={(e) => handleNavClick(e, 'category-english')}
              >
              באנגלית
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="block py-3 hover:text-primary transition-colors font-medium text-center"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
              צור קשר
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
