import { useEffect, useRef } from 'react';

interface ImageSectionProps {
  images: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  columns?: 2 | 3 | 4;
}

const ImageSection = ({ images, columns = 3 }: ImageSectionProps) => {
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              img.onload = () => {
                img.classList.add('loaded');
              };
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (imagesRef.current) {
      const images = imagesRef.current.querySelectorAll('img[data-src]');
      images.forEach(img => observer.observe(img));
    }

    return () => {
      if (imagesRef.current) {
        const images = imagesRef.current.querySelectorAll('img[data-src]');
        images.forEach(img => observer.unobserve(img));
      }
    };
  }, [images]);

  const getGridClass = () => {
    switch (columns) {
      case 2: return "grid-cols-1 sm:grid-cols-2";
      case 3: return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      case 4: return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
      default: return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }
  };
  
  return (
    <div ref={imagesRef} className={`grid ${getGridClass()} gap-6`}>
      {images.map((image, index) => (
        <div key={index} className="image-card overflow-hidden">
          <div className="relative overflow-hidden h-60">
            <img 
              data-src={image.url} 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" 
              alt={image.alt} 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-3">
              <div className="text-white text-sm font-medium">{image.alt}</div>
            </div>
          </div>
          {image.caption && (
            <div className="p-4 bg-white text-biomimicry-green-800 text-sm">
              {image.caption}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageSection;
