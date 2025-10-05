import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Youtube, Maximize, ExternalLink, Instagram } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { type PortfolioItem } from "@/data/portfolioItems";
import { useState } from "react";

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard = ({ item }: PortfolioCardProps) => {
  const [imgError, setImgError] = useState(false);
  const isDirectLink = item.id === 9 || item.id === 10 || item.id === 11;

  const getThumbnailUrl = () => {
    // Handle specific fallback images for social media content
    if (item.isInstagram || item.isTikTok || imgError) {
      // Default fallback for all social media items
      return "/portfolio-placeholder.jpg";
    }
    return `https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`;
  };

  const CardContent = () => (
    <div className="p-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-medium">{item.title}</h3>
        <Badge variant="secondary" className="capitalize">{item.category}</Badge>
      </div>
      <p className="text-sm text-muted-foreground">{item.description}</p>
    </div>
  );

  const CardMedia = () => (
    <div className="aspect-w-16 aspect-h-9">
      <AspectRatio ratio={16/9} className="bg-slate-100">
        <div className="w-full h-full">
          {isDirectLink ? (
            <div className="relative w-full h-full">
              <img 
                src={getThumbnailUrl()} 
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                {item.isInstagram ? (
                  <Instagram className="text-white h-12 w-12" />
                ) : item.isTikTok ? (
                  <svg viewBox="0 0 24 24" className="text-white h-12 w-12" fill="currentColor">
                    <path d="M19.321 5.562a5.122 5.122 0 0 1 .244 1.669c0 2.803-2.267 5.074-5.064 5.074v3.764c3.473 0 6.465-2.066 7.83-5.036v7.076c0 3.288-2.658 5.946-5.937 5.946-3.279 0-5.937-2.658-5.937-5.946v-7.076h-0.042v-3.764h0.042v-4.266h3.764v4.266c0.776 0 1.494-0.244 2.087-0.659v3.861c-0.593 0.415-1.311 0.659-2.087 0.659v3.764c1.669 0 3.022-1.353 3.022-3.022v-7.076h3.861z"/>
                  </svg>
                ) : null}
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 p-1 rounded-md">
                <ExternalLink className="h-4 w-4 text-white" />
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full cursor-pointer group">
              <img 
                src={getThumbnailUrl()} 
                alt={item.title}
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                <Youtube className="text-white h-12 w-12" />
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 p-1 rounded-md">
                <Maximize className="h-4 w-4 text-white" />
              </div>
            </div>
          )}
        </div>
      </AspectRatio>
    </div>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <a 
          href={isDirectLink ? item.link : undefined}
          target={isDirectLink ? "_blank" : undefined}
          rel={isDirectLink ? "noopener noreferrer" : undefined}
          className="block cursor-pointer"
        >
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 group">
            <CardMedia />
            <CardContent />
          </Card>
        </a>
      </DialogTrigger>
      {!isDirectLink && (
        <DialogContent className="max-w-4xl w-[90vw]">
          <div className="aspect-w-16 aspect-h-9">
            <AspectRatio ratio={16/9}>
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${item.videoId}`} 
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="border-0"
              ></iframe>
            </AspectRatio>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default PortfolioCard;
