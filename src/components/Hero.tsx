import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {

  return (
    <section className="flex items-center py-8 md:py-16">
      <div className="container-custom">
        <div className="animate-fade-in flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2">
            <h1 className="font-bold mb-4">
              עמית גורדון
            </h1>
            <h2 className="text-3xl font-heading font-medium text-muted-foreground mb-6">
               קופירייטר ומוזיקאי
            </h2>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="#contact">תיקשרו אליי</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <Avatar className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-secondary shadow-xl">
              <AvatarImage 
                src="/amit-gordon.jpg" 
                alt="עמית גורדון"
                loading="eager"
                className="object-cover"
              />
              <AvatarFallback className="text-xl text-muted-foreground font-heading bg-secondary">עג</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
