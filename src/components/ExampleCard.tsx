import { useEffect, useRef } from 'react';

interface ExampleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  inspiration: string;
}

const ExampleCard = ({ title, description, imageUrl, inspiration }: ExampleCardProps) => {
  const imgRef = useRef<HTMLImageElement>(null);

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

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden h-48">
        <img 
          ref={imgRef}
          data-src={imageUrl} 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" 
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-0 right-0 bg-biomimicry-green-600 text-white px-3 py-1 text-xs font-medium">
          {inspiration}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-biomimicry-green-800 mb-2">{title}</h3>
        <p className="text-biomimicry-green-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ExampleCard;
