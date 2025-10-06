import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { type PortfolioItem } from "@/data/portfolioItems";
import { useRef, useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface PortfolioCardProps {
  item: PortfolioItem;
}

// Helper to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/ // Direct video ID
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

// Helper to extract Instagram post/reel ID from URL
const getInstagramPostId = (url: string): string | null => {
  const patterns = [
    /(?:instagram\.com\/(?:p|reel)\/)([\w-]+)/,
    /(?:instagram\.com\/(?:tv)\/)([\w-]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

// Helper to get Instagram post type (p, reel, tv)
const getInstagramPostType = (url: string): 'p' | 'reel' | 'tv' | null => {
  if (url.includes('/reel/')) return 'reel';
  if (url.includes('/tv/')) return 'tv';
  if (url.includes('/p/')) return 'p';
  return null;
};

const PortfolioCard = ({ item }: PortfolioCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(true);
  };

  // Determine if this is a YouTube video, Instagram post, or local video
  const isYouTube = !item.isLocal && item.videoSrc && (
    item.videoSrc.includes('youtube.com') || 
    item.videoSrc.includes('youtu.be') ||
    item.videoSrc.match(/^[a-zA-Z0-9_-]{11}$/) !== null
  );
  const youtubeVideoId = isYouTube ? getYouTubeVideoId(item.videoSrc || '') : null;
  
  const isInstagram = !item.isLocal && item.videoSrc && item.videoSrc.includes('instagram.com');
  const instagramPostId = isInstagram ? getInstagramPostId(item.videoSrc || '') : null;
  const instagramPostType = isInstagram ? getInstagramPostType(item.videoSrc || '') : null;

  const CardMedia = () => (
    <div className="aspect-w-16 aspect-h-9">
      <AspectRatio ratio={16/9} className="bg-slate-100">
        <div className="relative w-full h-full group cursor-pointer">
          {isYouTube && youtubeVideoId ? (
            // YouTube thumbnail
            <img 
              src={`https://img.youtube.com/vi/${youtubeVideoId}/mqdefault.jpg`}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
          ) : isInstagram ? (
            // Instagram placeholder (Instagram doesn't provide direct thumbnail access)
            <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
          ) : (
            // Local video
            <video 
              ref={videoRef}
              className="w-full h-full object-cover"
              src={item.videoSrc}
              preload="metadata"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          )}
          {(!isPlaying || isYouTube || isInstagram) && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
              <div className="bg-white/90 p-4 rounded-full">
                <Play className="text-black h-8 w-8" />
              </div>
            </div>
          )}
        </div>
      </AspectRatio>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div 
        className="block cursor-pointer" 
        onClick={handleCardClick}
      >
        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 group">
          <CardMedia />
        </Card>
      </div>
      <DialogContent className="max-w-4xl w-[90vw]">
        <VisuallyHidden>
          <DialogTitle>{item.client}</DialogTitle>
          <DialogDescription>
            {item.description || "Video"}
          </DialogDescription>
        </VisuallyHidden>
        <div className="aspect-w-16 aspect-h-9">
          <AspectRatio ratio={16/9}>
            {isYouTube && youtubeVideoId ? (
              // YouTube embed
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                title={`${item.client} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="border-0"
              />
            ) : isInstagram && instagramPostId && instagramPostType ? (
              // Instagram embed
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.instagram.com/${instagramPostType}/${instagramPostId}/embed/`}
                title={`${item.client} Instagram post`}
                allow="encrypted-media"
                allowFullScreen
                className="border-0 bg-white"
                style={{ minHeight: '600px' }}
              />
            ) : (
              // Local video
              <video 
                className="w-full h-full"
                src={item.videoSrc}
                controls
                autoPlay
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            )}
          </AspectRatio>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioCard;
