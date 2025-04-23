import React from 'react';
import ImageSection from '../ImageSection';
import { BookOpen, Zap, Coffee } from 'lucide-react';

const ResearchSection = () => {
  const researchImages = [
    {
      url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Лабораторные исследования",
      caption: "Изучение микроструктур природных материалов"
    },
    {
      url: "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Микроскопические исследования",
      caption: "Анализ структур на микроуровне"
    },
    {
      url: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Полевые исследования",
      caption: "Наблюдение за природными процессами"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="biomimicry-container">
        <h2 className="section-heading">Исследования в области биомимикрии</h2>
        <p className="text-lg text-biomimicry-green-800 mb-10">
          Современные ученые используют передовые технологии для изучения природных структур и процессов:
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ImageSection images={researchImages} columns={2} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-biomimicry-green-700 mb-4">Методы исследования</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <BookOpen className="h-6 w-6 text-biomimicry-green-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-biomimicry-green-800">Микроскопия высокого разрешения</h4>
                  <p className="text-biomimicry-green-700">
                    Позволяет изучать поверхности и структуры на наноуровне, выявляя уникальные особенности природных материалов.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="h-6 w-6 text-biomimicry-green-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-biomimicry-green-800">Компьютерное моделирование</h4>
                  <p className="text-biomimicry-green-700">
                    Используется для симуляции природных процессов и оптимизации биомиметических решений.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Coffee className="h-6 w-6 text-biomimicry-green-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-biomimicry-green-800">Полевые исследования</h4>
                  <p className="text-biomimicry-green-700">
                    Наблюдение за животными и растениями в их естественной среде обитания для понимания их адаптаций.
                  </p>
                </div>
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold text-biomimicry-green-700 mt-8 mb-4">Ключевые направления</h3>
            <p className="text-biomimicry-green-800 mb-4">
              Современные исследования в области биомимикрии сосредоточены на нескольких ключевых направлениях:
            </p>
            <ul className="list-disc list-inside text-biomimicry-green-700 space-y-2">
              <li>Самовосстанавливающиеся материалы, имитирующие способность живых тканей к регенерации</li>
              <li>Энергоэффективные системы, основанные на природных механизмах сбора и использования энергии</li>
              <li>Адаптивные конструкции, способные изменять свою форму и функции в ответ на внешние факторы</li>
              <li>Биоразлагаемые материалы, вдохновленные природными циклами разложения и переработки</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
