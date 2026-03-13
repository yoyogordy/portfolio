import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import YouTubePreview from './YouTubePreview';

export interface ItemData {
  videoSrc?: string;
  imageSrc?: string;
  thumbnailUrl?: string;
  description?: string;
  modalTitle?: string;
  showText?: boolean;
  isLocal?: boolean;
}

interface ItemFormProps {
  open: boolean;
  onClose: () => void;
  onSave: (item: ItemData) => void;
  initial?: ItemData;
}

export default function ItemForm({ open, onClose, onSave, initial }: ItemFormProps) {
  const [videoSrc, setVideoSrc] = useState(initial?.videoSrc || '');
  const [imageSrc, setImageSrc] = useState(initial?.imageSrc || '');
  const [thumbnailUrl, setThumbnailUrl] = useState(initial?.thumbnailUrl || '');
  const [description, setDescription] = useState(initial?.description || '');
  const [modalTitle, setModalTitle] = useState(initial?.modalTitle || '');
  const [showText, setShowText] = useState(initial?.showText || false);

  const handleSave = () => {
    const item: ItemData = {};
    if (videoSrc) item.videoSrc = videoSrc;
    if (imageSrc) item.imageSrc = imageSrc;
    if (thumbnailUrl) item.thumbnailUrl = thumbnailUrl;
    if (description) item.description = description;
    if (modalTitle) item.modalTitle = modalTitle;
    if (showText) item.showText = showText;
    onSave(item);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-md" dir="rtl">
        <DialogHeader>
          <DialogTitle>{initial ? 'עריכת פריט' : 'הוספת פריט'}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>קישור לסרטון</Label>
            <Input
              dir="ltr"
              placeholder="https://www.youtube.com/watch?v=..."
              value={videoSrc}
              onChange={(e) => setVideoSrc(e.target.value)}
            />
            {videoSrc && (
              <YouTubePreview url={videoSrc} thumbnailUrl={thumbnailUrl} className="w-full h-32" />
            )}
          </div>
          <div className="space-y-2">
            <Label>קישור לתמונה (במקום סרטון)</Label>
            <Input
              dir="ltr"
              placeholder="/image.png"
              value={imageSrc}
              onChange={(e) => setImageSrc(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>תמונה ממוזערת (אופציונלי)</Label>
            <Input
              dir="ltr"
              placeholder="/thumbnail.png"
              value={thumbnailUrl}
              onChange={(e) => setThumbnailUrl(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>כותרת במודל (אופציונלי)</Label>
            <Input
              value={modalTitle}
              onChange={(e) => setModalTitle(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>תיאור (אופציונלי)</Label>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="showText"
              checked={showText}
              onChange={(e) => setShowText(e.target.checked)}
            />
            <Label htmlFor="showText">הצג טקסט</Label>
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={onClose}>ביטול</Button>
            <Button onClick={handleSave} disabled={!videoSrc && !imageSrc}>שמירה</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
