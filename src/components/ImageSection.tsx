interface ImageSectionProps {
  images: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  columns?: 2 | 3 | 4;
}

const ImageSection = ({ images, columns = 3 }: ImageSectionProps) => {
  const getGridClass = () => {
    switch (columns) {
      case 2: return "grid-cols-1 sm:grid-cols-2";
      case 3: return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      case 4: return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
      default: return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }
  };
  
  return (
    <div className={`grid ${getGridClass()} gap-6`}>
      {images.map((image, index) => (
        <div key={index} className="image-card">
          <img 
            src={image.url} 
            alt={image.alt} 
            loading="lazy"
          />
          {image.caption && (
            <div className="p-3 bg-biomimicry-green-100 text-biomimicry-green-800 text-sm">
              {image.caption}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageSection;
