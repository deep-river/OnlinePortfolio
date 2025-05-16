import Image from 'next/image';
import type { MediaItem } from '@/lib/types/project';

interface MediaDisplayProps {
  item: MediaItem;
  setSelectedImage?: (src: string) => void;
  className?: string;
  fullWidth?: boolean;
}

export default function MediaDisplay({ item, setSelectedImage, className, fullWidth = false }: MediaDisplayProps) {
  if (item.type === 'image') {
    return (
      <div className={`relative ${fullWidth ? 'w-full' : ''} aspect-video ${className || ''}`}>
        <Image 
          src={item.src || "/placeholder.svg"} 
          alt={item.alt || '项目媒体'} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          className="rounded-lg object-cover cursor-pointer"
          onClick={() => setSelectedImage && item.src && setSelectedImage(item.src)}
        />
        {item.caption && <p className="text-sm text-muted-foreground mt-1 text-center">{item.caption}</p>}
      </div>
    );
  } else if (item.type === 'video' && item.src) {
    return (
      <div className={`${fullWidth ? 'w-full' : ''} ${className || ''}`}>
        <div className="aspect-video w-full">
          <iframe 
            src={item.src} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
        {item.caption && <p className="text-sm text-muted-foreground mt-1 text-center">{item.caption}</p>}
      </div>
    );
  } else if (item.type === 'code' && item.src) {
    return (
      <div className={className || ''}>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
          <code>{item.src}</code>
        </pre>
        {item.caption && <p className="text-sm text-muted-foreground mt-1">{item.caption}</p>}
      </div>
    );
  }
  return null;
} 