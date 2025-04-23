import React from 'react';

const IntroductionSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="biomimicry-container">
        <h2 className="section-heading">Что такое биомимикрия?</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <p className="text-lg mb-6">
              Биомимикрия (от греч. βίος (жизнь) и μίμησις (имитация)) — это практика создания устойчивых 
              решений человеческих проблем путем подражания природным образцам и стратегиям. 
              Термин популяризировала Джанин Бенюс в своей книге "Биомимикрия: инновации, вдохновленные природой".
            </p>
            <p className="text-lg mb-6">
              Природа за миллиарды лет эволюции разработала необычайно эффективные системы и материалы. 
              Современная наука и инженерия все чаще обращаются к природным решениям в поисках вдохновения 
              для технологических прорывов.
            </p>
            <p className="text-lg">
              Биомимикрия рассматривает природу как "модель, меру и наставника" и делится на три ключевых уровня:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-biomimicry-green-500">•</span>
                <span><strong className="text-biomimicry-green-700">Форма</strong> - копирование внешнего вида природных объектов</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-biomimicry-green-500">•</span>
                <span><strong className="text-biomimicry-green-700">Процесс</strong> - имитация естественных процессов</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-biomimicry-green-500">•</span>
                <span><strong className="text-biomimicry-green-700">Экосистема</strong> - подражание целым экосистемам</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/3">
            <div className="image-card">
              <img 
                src="https://images.unsplash.com/photo-1540500416789-c9953546ab4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Природные структуры"
                loading="lazy"
              />
            </div>
            <div className="mt-4">
              <div className="image-card">
                <img 
                  src="https://images.unsplash.com/photo-1528255915607-9012fda0f838?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Природа как инженер"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
