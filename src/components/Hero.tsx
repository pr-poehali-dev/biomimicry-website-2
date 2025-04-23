const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-biomimicry-green-100 to-biomimicry-neutral-50">
      <div className="biomimicry-container">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-biomimicry-green-800 mb-6">
              Природа как источник вдохновения
            </h1>
            <p className="text-xl text-biomimicry-green-700 mb-8">
              Биомимикрия — это наука, изучающая принципы природы для создания инновационных технологий. 
              Природа создавала и совершенствовала свои решения на протяжении миллиардов лет эволюции, 
              и мы можем учиться у неё.
            </p>
            <a 
              href="#examples" 
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-biomimicry-green-600 hover:bg-biomimicry-green-700"
            >
              Узнать больше
            </a>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="image-card">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                  alt="Природа как источник вдохновения" 
                  className="rounded-lg shadow-xl"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 hidden md:block">
                <div className="image-card">
                  <img 
                    src="https://images.unsplash.com/photo-1500526499232-b78f701b7c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Биологические структуры" 
                    className="w-40 h-40 object-cover rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
