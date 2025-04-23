import React from 'react';

const HistorySection = () => {
  return (
    <section className="bg-biomimicry-green-50 py-16">
      <div className="biomimicry-container">
        <h2 className="section-heading">История биомимикрии</h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3">
            <div className="image-card">
              <img 
                src="https://images.unsplash.com/photo-1623603807271-21a9cae0a237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Исторические зарисовки"
                loading="lazy"
              />
            </div>
            <div className="mt-4">
              <div className="image-card">
                <img 
                  src="https://images.unsplash.com/photo-1533709752211-118fcaf03312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Природные механизмы"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-2/3">
            <p className="text-lg mb-6">
              Хотя термин "биомимикрия" стал популярен лишь в конце XX века, принцип обучения у природы существовал 
              тысячелетиями. Еще Леонардо да Винчи изучал полет птиц и анатомию летучих мышей, пытаясь создать 
              летательные аппараты.
            </p>
            <p className="text-lg mb-6">
              В 1950-х годах ученые исследовали структуру листа лотоса, чтобы понять, почему он остается чистым 
              даже в грязной среде. Это привело к созданию самоочищающихся поверхностей и красок.
            </p>
            <p className="text-lg mb-6">
              В 1997 году Джанин Бенюс опубликовала книгу "Биомимикрия: инновации, вдохновленные природой", которая 
              стала переломным моментом для этого направления. С тех пор интерес к биомимикрии постоянно растет, и 
              она становится важной частью устойчивого дизайна и инженерии.
            </p>
            <p className="text-lg">
              Сегодня существуют специализированные исследовательские центры и образовательные программы, посвященные 
              биомимикрии, а крупные компании включают биомиметические подходы в свои инновационные стратегии.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
