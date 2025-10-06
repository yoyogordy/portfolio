
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-secondary/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-heading font-bold">
              עמית גורדון<span className="text-primary">.</span>
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <nav className="mb-4 md:mb-0">
              <ul className="flex space-x-6 text-sm">
                <li><a href="#portfolio" className="hover:text-primary transition-colors">[Portfolio]</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">[Contact]</a></li>
              </ul>
            </nav>
            <Separator orientation="vertical" className="hidden md:block h-6 mx-2" />
            <div className="text-sm text-muted-foreground">
              © {currentYear} עמית גורדון. [All rights reserved].
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
