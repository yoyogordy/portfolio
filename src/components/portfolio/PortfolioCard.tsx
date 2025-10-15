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
    /(?:youtube\.com\/shorts\/)([^&\n?#]+)/, // YouTube Shorts
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

// Helper to extract Google Drive file ID from URL
const getGoogleDriveFileId = (url: string): string | null => {
  const patterns = [
    /\/file\/d\/([^/]+)/, // https://drive.google.com/file/d/FILE_ID/view
    /id=([^&]+)/, // https://drive.google.com/open?id=FILE_ID
    /\/uc\?id=([^&]+)/, // https://drive.google.com/uc?id=FILE_ID
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

// Helper to convert Dropbox URL to direct/raw link
const getDropboxDirectLink = (url: string): string => {
  // Handle shared folder links with preview parameter
  if (url.includes('/scl/fo/') && url.includes('preview=')) {
    const previewMatch = url.match(/preview=([^&]+)/);
    const rlkeyMatch = url.match(/rlkey=([^&]+)/);
    
    if (previewMatch && rlkeyMatch) {
      const fileName = decodeURIComponent(previewMatch[1]);
      const rlkey = rlkeyMatch[1];
      // Extract folder ID from the URL
      const folderIdMatch = url.match(/\/scl\/fo\/([^/]+)\/([^?]+)/);
      if (folderIdMatch) {
        const folderId = folderIdMatch[1];
        const pathId = folderIdMatch[2];
        // Construct raw content link using Dropbox's content delivery
        return `https://www.dropbox.com/scl/fo/${folderId}/${pathId}/${fileName}?rlkey=${rlkey}&raw=1`;
      }
    }
  }
  
  // Handle regular Dropbox links
  // For /s/ links (older format)
  if (url.includes('dropbox.com/s/')) {
    return url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
  }
  
  // Handle regular file links - convert dl=0 to raw=1 for direct access
  if (url.includes('dl=0')) {
    return url.replace('dl=0', 'raw=1');
  }
  // If already has raw=1, keep it
  if (url.includes('raw=1')) {
    return url;
  }
  // Convert dl=1 to raw=1 for embedding
  if (url.includes('dl=1')) {
    return url.replace('dl=1', 'raw=1');
  }
  // If no dl parameter, add raw=1
  return url.includes('?') ? `${url}&raw=1` : `${url}?raw=1`;
};

const PortfolioCard = ({ item }: PortfolioCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Only open dialog if there's a video or if it's an image (for larger view)
    if (item.videoSrc || item.imageSrc) {
      setIsOpen(true);
    }
  };

  // Check if this is an image item (no video source)
  const isImage = !item.videoSrc && item.imageSrc;

  // Determine if this is a YouTube video, Instagram post, Google Drive video, Dropbox video, or local video
  const isYouTube = !item.isLocal && item.videoSrc && (
    item.videoSrc.includes('youtube.com') || 
    item.videoSrc.includes('youtu.be') ||
    item.videoSrc.match(/^[a-zA-Z0-9_-]{11}$/) !== null
  );
  const youtubeVideoId = isYouTube ? getYouTubeVideoId(item.videoSrc || '') : null;
  
  const isInstagram = !item.isLocal && item.videoSrc && item.videoSrc.includes('instagram.com');
  const instagramPostId = isInstagram ? getInstagramPostId(item.videoSrc || '') : null;
  const instagramPostType = isInstagram ? getInstagramPostType(item.videoSrc || '') : null;
  
  const isGoogleDrive = !item.isLocal && item.videoSrc && item.videoSrc.includes('drive.google.com');
  const googleDriveFileId = isGoogleDrive ? getGoogleDriveFileId(item.videoSrc || '') : null;

  const isDropbox = !item.isLocal && item.videoSrc && item.videoSrc.includes('dropbox.com');
  const dropboxDirectLink = isDropbox ? getDropboxDirectLink(item.videoSrc || '') : null;

  const CardMedia = () => (
    <div className="aspect-w-16 aspect-h-9">
      <AspectRatio ratio={16/9} className="bg-slate-100 overflow-hidden">
        <div className="relative w-full h-full group cursor-pointer">
          {isImage ? (
            // Image item
            <img 
              src={item.imageSrc}
              alt={item.client || "Portfolio image"}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : item.thumbnailUrl ? (
            // Custom thumbnail provided
            <img 
              src={item.thumbnailUrl}
              alt="Video thumbnail"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : isYouTube && youtubeVideoId ? (
            // YouTube thumbnail
            <img 
              src={`https://img.youtube.com/vi/${youtubeVideoId}/mqdefault.jpg`}
              alt="Video thumbnail"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : isInstagram ? (
            // Instagram placeholder (Instagram doesn't provide direct thumbnail access)
            <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
          ) : isDropbox ? (
            // Dropbox placeholder (Dropbox doesn't provide direct thumbnail access)
            <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 1.807L0 5.629l6 3.822 6.001-3.822L6 1.807zM18 1.807l-6 3.822 6 3.822 6-3.822-6-3.822zM0 13.274l6 3.822 6.001-3.822L6 9.452 0 13.274zM18 9.452l-6 3.822 6 3.822 6-3.822-6-3.822zM6 18.371l6.001 3.822 6-3.822-6-3.822L6 18.371z"/>
              </svg>
            </div>
          ) : isGoogleDrive && googleDriveFileId ? (
            // Google Drive thumbnail (if publicly shared) or placeholder
            <>
              <img 
                src={`https://drive.google.com/thumbnail?id=${googleDriveFileId}&sz=w640`}
                alt="Video thumbnail"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                onError={(e) => {
                  // If thumbnail fails to load, show placeholder
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const placeholder = target.nextElementSibling as HTMLElement;
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 items-center justify-center hidden transition-transform duration-700 ease-out group-hover:scale-110">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 87.3 78">
                  <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"/>
                  <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"/>
                  <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"/>
                  <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"/>
                  <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"/>
                </svg>
              </div>
            </>
          ) : (
            // Local video
            <video 
              ref={videoRef}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              src={item.videoSrc}
              preload="metadata"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          )}
          {/* Show play button only for videos, not for images */}
          {!isImage && (!isPlaying || isYouTube || isInstagram || isGoogleDrive || isDropbox || item.thumbnailUrl) && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="bg-white/95 p-4 rounded-full transform group-hover:scale-110 transition-all duration-500 shadow-xl">
                <Play className="text-black h-8 w-8 fill-black" />
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
        <Card className="overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ease-out border border-slate-200 group">
          {/* Text section below the media */}
          {(item.showText && item.description) && (
            <CardContent className="p-4">
            
              {item.description && (
                <p className="text-base font-medium text-slate-700 leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              )}
            </CardContent>
          )}
          <CardMedia />
          {(item.description && !item.showText) && (
            <CardContent className="p-4">
            
              {item.description && (
                <p className="text-base font-medium text-slate-700 leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              )}
            </CardContent>
          )}
        </Card>
      </div>
      <DialogContent className="max-w-4xl w-[90vw]">
        <VisuallyHidden>
          <DialogTitle>{item.client}</DialogTitle>
        </VisuallyHidden>
        {item.modalTitle && (
          <h4 className="text-2xl font-semibold text-slate-800 mb-4 text-center">
            {item.modalTitle}
          </h4>
        )}
        <div className="aspect-w-16 aspect-h-9">
          <AspectRatio ratio={16/9}>
            {isImage ? (
              // Image item in dialog
              <img 
                src={item.imageSrc}
                alt={item.client || "Portfolio image"}
                className="w-full h-full object-contain"
              />
            ) : isYouTube && youtubeVideoId ? (
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
            ) : isGoogleDrive && googleDriveFileId ? (
              // Google Drive embed
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://drive.google.com/file/d/${googleDriveFileId}/preview`}
                title={`${item.client} video`}
                allow="autoplay"
                allowFullScreen
                className="border-0"
              />
            ) : isDropbox && dropboxDirectLink ? (
              // Dropbox video
              <video 
                className="w-full h-full"
                src={dropboxDirectLink}
                controls
                autoPlay
                playsInline
              >
                Your browser does not support the video tag.
              </video>
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

