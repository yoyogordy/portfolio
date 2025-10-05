import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Play } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="flex items-center py-6">
      <div className="container-custom">
        <div className="animate-fade-in flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className="text-primary font-medium mb-3">Hi there, I'm</p>
            <h1 className="font-bold mb-4">
              Amit Gordon
            </h1>
            <h2 className="text-3xl font-heading font-medium text-muted-foreground mb-6">
              Professional Copywriter
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              I craft compelling copy that engages your audience and drives action. My words tell your story and sell your vision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col md:flex-row items-center justify-center gap-6">
            <Avatar className="w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-secondary">
              <AvatarImage 
                src="/placeholder.svg" 
                alt="Amit Gordon"
                loading="eager"
              />
              <AvatarFallback className="text-xl text-muted-foreground font-heading bg-secondary">AG</AvatarFallback>
            </Avatar>
            
            <div className="mt-8 md:mt-0 md:ml-6 relative w-full max-w-xs md:max-w-sm">
              <div className="mb-4 text-sm text-muted-foreground bg-background/80 p-3 rounded-lg shadow-sm">
                <p className="font-medium text-foreground mb-1">A little about me</p>
              </div>
              
              {!isPlaying ? (
                <div className="relative group">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/placeholder.svg"
                      alt="Amit Gordon with guitar" 
                      className="w-full object-cover aspect-video rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover:bg-black/20 transition-colors rounded-lg"
                    onClick={handlePlayVideo}
                  >
                    <div className="bg-primary/80 group-hover:bg-primary hover:scale-110 transition-transform p-4 rounded-full flex items-center justify-center">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <video
                    className="w-full aspect-video rounded-lg"
                    controls
                    autoPlay
                    preload="metadata"
                    onLoadedData={() => setVideoLoaded(true)}
                    src="https://video.wixstatic.com/video/62c2ec_ebe67d33ebab4a7da0e65164519158dc/1080p/mp4/file.mp4"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
