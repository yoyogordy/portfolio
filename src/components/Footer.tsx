
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
     
            <Separator orientation="vertical" className="hidden md:block h-6 mx-2" />
            <div className="text-sm text-muted-foreground">
              © {currentYear} עמית גורדון
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
