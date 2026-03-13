function getYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([^&?/\s]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export function getVideoThumbnail(videoSrc?: string, thumbnailUrl?: string): string | null {
  if (thumbnailUrl) return thumbnailUrl;
  if (!videoSrc) return null;
  const ytId = getYouTubeId(videoSrc);
  if (ytId) return `https://img.youtube.com/vi/${ytId}/mqdefault.jpg`;
  return null;
}

interface YouTubePreviewProps {
  url: string;
  thumbnailUrl?: string;
  className?: string;
}

export default function YouTubePreview({ url, thumbnailUrl, className }: YouTubePreviewProps) {
  const thumb = getVideoThumbnail(url, thumbnailUrl);

  if (!thumb) {
    return (
      <div className={`bg-muted flex items-center justify-center text-muted-foreground text-xs rounded ${className || ''}`}>
        אין תצוגה מקדימה
      </div>
    );
  }

  return (
    <img
      src={thumb}
      alt="תצוגה מקדימה"
      className={`object-cover rounded ${className || ''}`}
    />
  );
}
