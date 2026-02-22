import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ZoomIn } from 'lucide-react';

interface DiagramDisplayProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function DiagramDisplay({ src, alt, caption }: DiagramDisplayProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-2">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="relative group cursor-pointer rounded-lg overflow-hidden border border-border">
            <img src={src} alt={alt} className="w-full h-auto" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <ZoomIn className="h-8 w-8 text-white" />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-4xl">
          <img src={src} alt={alt} className="w-full h-auto" />
          {caption && <p className="text-sm text-muted-foreground text-center mt-2">{caption}</p>}
        </DialogContent>
      </Dialog>
      {caption && <p className="text-xs text-muted-foreground text-center">{caption}</p>}
    </div>
  );
}
