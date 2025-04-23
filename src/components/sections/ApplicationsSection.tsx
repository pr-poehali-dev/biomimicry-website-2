import React from 'react';
import ImageSection from '../ImageSection';

const ApplicationsSection = () => {
  const applicationAreas = [
    {
      url: "https://images.unsplash.com/photo-1594818379496-da1e345d93a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Архитектура",
      caption: "Энергоэффективные здания по образцу термитников"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Медицина",
      caption: "Прочные материалы, вдохновленные костями и паутиной"
    },
    {
      url: "https://images.unsplash.com/photo-1504391975254-31e223ea776b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Транспорт",
      caption: "Аэродинамические формы, основанные на рыбах и птицах"
    },
    {
      url: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Энергетика",
      caption: "Возобновляемые источники энергии по образцу фотосинтеза"
    },
    {
      url: "https://images.unsplash.com/photo-1576153192621-7a3be10b356e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Робототехника",
      caption: "Роботы, имитирующие движения и структуру животных"
    }
  ];

  return (
    <section id="applications" className="bg-biomimicry-green-100 py-16">
      <div className="biomimicry-container">
        <h2 className="section-heading">Применение в различных областях</h2>
        <p className="text-lg text-biomimicry-green-800 mb-10">
          Биомимикрия находит применение во многих областях человеческой деятельности:
        </p>
        
        <ImageSection images={applicationAreas} />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-biomimicry-green-700 mb-4">Архитектура и строительство</h3>
            <p className="text-biomimicry-green-800 mb-3">
              Здания, вдохновленные термитниками, обладают превосходной естественной вентиляцией и 
              терморегуляцией. Структуры, имитирующие пчелиные соты, обеспечивают максимальную прочность при 
              минимальном использовании материалов.
            </p>
            <p className="text-biomimicry-green-800">
              Архитекторы изучают рост деревьев и растений для создания более устойчивых конструкций, 
              способных противостоять ветровым и сейсмическим нагрузкам.
            </p>
            <div className="mt-4">
              <img 
                src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Биоинспирированная архитектура" 
                className="rounded-lg shadow-sm"
                loading="lazy"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-biomimicry-green-700 mb-4">Материаловедение</h3>
            <p className="text-biomimicry-green-800 mb-3">
              Научные исследования паутины помогли создать высокопрочные нити, которые в несколько раз 
              прочнее стали. Самоочищающиеся поверхности, имитирующие листья лотоса, не позволяют грязи 
              задерживаться.
            </p>
            <p className="text-biomimicry-green-800">
              Адгезивные материалы, подобные тем, что используют гекконы для перемещения по вертикальным 
              поверхностям, находят применение в медицине и робототехнике.
            </p>
            <div className="mt-4">
              <img 
                src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Биоматериалы" 
                className="rounded-lg shadow-sm"
                loading="lazy"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-biomimicry-green-700 mb-4">Медицина и здравоохранение</h3>
            <p className="text-biomimicry-green-800 mb-3">
              Многие медицинские инновации вдохновлены природными механизмами. Например, искусственные суставы 
              проектируются с учетом биомеханики настоящих суставов, а некоторые хирургические инструменты 
              имитируют строение клювов или зубов животных.
            </p>
            <p className="text-biomimicry-green-800">
              Самовосстанавливающиеся материалы, разработанные по образцу заживления ран в живых организмах, 
              находят применение в имплантатах и медицинских устройствах.
            </p>
            <div className="mt-4">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Биомедицина" 
                className="rounded-lg shadow-sm"
                loading="lazy"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-biomimicry-green-700 mb-4">Энергетика и устойчивое развитие</h3>
            <p className="text-biomimicry-green-800 mb-3">
              Солнечные панели, вдохновленные листьями растений, становятся все более эффективными. Ветровые 
              турбины, спроектированные с учетом особенностей плавников китов, производят больше энергии при 
              меньшем уровне шума.
            </p>
            <p className="text-biomimicry-green-800">
              Системы очистки воды, имитирующие естественные процессы фильтрации в природе, помогают решать 
              проблемы с доступом к чистой воде во многих регионах.
            </p>
            <div className="mt-4">
              <img 
                src="https://images.unsplash.com/photo-1553816077-aa1ef0d296be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Устойчивая энергетика" 
                className="rounded-lg shadow-sm"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
