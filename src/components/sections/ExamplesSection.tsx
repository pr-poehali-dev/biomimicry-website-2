import React from 'react';
import ExampleCard from '../ExampleCard';
import ImageSection from '../ImageSection';

const ExamplesSection = () => {
  const biomimicryExamples = [
    {
      title: "Застежка-липучка Velcro",
      description: "Джордж де Местраль создал застежку-липучку после изучения колючек репейника, которые цеплялись к его одежде и шерсти собаки во время прогулки.",
      imageUrl: "https://images.unsplash.com/photo-1602526429747-ac387a91eb6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      inspiration: "Семена репейника"
    },
    {
      title: "Поезд Синкансэн",
      description: "Японский сверхскоростной поезд Синкансэн был перепроектирован по образцу клюва зимородка, что позволило снизить шум и увеличить скорость.",
      imageUrl: "https://images.unsplash.com/photo-1525011268345-6cdac9a4322c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      inspiration: "Клюв зимородка"
    },
    {
      title: "Самоочищающаяся краска Lotusan",
      description: "Структура поверхности краски имитирует лист лотоса, где капли воды скатываются, захватывая частицы грязи и очищая поверхность.",
      imageUrl: "https://images.unsplash.com/photo-1532616748542-417c6d003d06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      inspiration: "Листья лотоса"
    },
    {
      title: "Костюмы для плавания Speedo",
      description: "Технология Fastskin имитирует кожу акулы с её микроскопическими зубчиками, что снижает сопротивление воды и позволяет пловцам двигаться быстрее.",
      imageUrl: "https://images.unsplash.com/photo-1551919059-a87d3c858022?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      inspiration: "Кожа акулы"
    }
  ];

  const natureImages = [
    {
      url: "https://images.unsplash.com/photo-1509470475192-4516c145f8a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Структура паутины"
    },
    {
      url: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Соты пчел"
    },
    {
      url: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Морские раковины"
    },
    {
      url: "https://images.unsplash.com/photo-1517970640957-29350cf9b415?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Листья растений"
    },
    {
      url: "https://images.unsplash.com/photo-1520990269335-9271253a5295?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Кора деревьев"
    },
    {
      url: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Перья птиц"
    }
  ];

  return (
    <section id="examples" className="bg-biomimicry-green-100 py-16">
      <div className="biomimicry-container">
        <h2 className="section-heading">Примеры биомимикрии</h2>
        <p className="text-lg text-biomimicry-green-800 mb-10">
          Вот некоторые из самых известных примеров, где человеческие технологии были вдохновлены природой:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {biomimicryExamples.map((example, index) => (
            <ExampleCard 
              key={index}
              title={example.title}
              description={example.description}
              imageUrl={example.imageUrl}
              inspiration={example.inspiration}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="section-subheading">Природные структуры, вдохновляющие ученых</h3>
          <ImageSection images={natureImages} columns={3} />
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
