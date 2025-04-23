interface ExampleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  inspiration: string;
}

const ExampleCard = ({ title, description, imageUrl, inspiration }: ExampleCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-56 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-biomimicry-green-700 mb-2">{title}</h3>
        <p className="text-sm text-biomimicry-green-600 mb-4">
          <span className="font-medium">Вдохновлено: </span>{inspiration}
        </p>
        <p className="text-biomimicry-green-800">{description}</p>
      </div>
    </div>
  );
};

export default ExampleCard;
