import React from 'react';
import { Leaf, Award, Lightbulb, Heart, Globe } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section id="benefits" className="bg-biomimicry-green-50 py-16">
      <div className="biomimicry-container">
        <h2 className="section-heading">Преимущества биомимикрии</h2>
        <p className="text-lg text-biomimicry-green-800 mb-10">
          Использование природных стратегий для решения человеческих проблем имеет множество преимуществ:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm flex">
            <div className="mr-4">
              <Leaf className="h-10 w-10 text-biomimicry-green-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-biomimicry-green-700 mb-2">Экологическая устойчивость</h3>
              <p className="text-biomimicry-green-800">
                Природные системы развивались на протяжении миллиардов лет, создавая экологически 
                устойчивые и энергоэффективные решения.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex">
            <div className="mr-4">
              <Award className="h-10 w-10 text-biomimicry-green-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-biomimicry-green-700 mb-2">Проверенная эффективность</h3>
              <p className="text-biomimicry-green-800">
                Природные решения уже прошли "испытание временем" — они эффективны и оптимизированы для выполнения своих функций.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex">
            <div className="mr-4">
              <Lightbulb className="h-10 w-10 text-biomimicry-green-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-biomimicry-green-700 mb-2">Инновационный потенциал</h3>
              <p className="text-biomimicry-green-800">
                Природа предлагает бесконечное множество уникальных решений, которые могут вдохновить на создание 
                принципиально новых технологий.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex">
            <div className="mr-4">
              <Heart className="h-10 w-10 text-biomimicry-green-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-biomimicry-green-700 mb-2">Гармония с природой</h3>
              <p className="text-biomimicry-green-800">
                Биомиметические решения часто лучше интегрируются с окружающей средой, уменьшая негативное 
                воздействие человека на планету.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex md:col-span-2">
            <div className="mr-4">
              <Globe className="h-10 w-10 text-biomimicry-green-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-biomimicry-green-700 mb-2">Междисциплинарный подход</h3>
              <p className="text-biomimicry-green-800">
                Биомимикрия объединяет ученых из различных областей — биологов, инженеров, архитекторов, 
                дизайнеров — способствуя интеграции знаний и инновационному мышлению.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-biomimicry-green-700 mb-4">Галерея вдохновляющих природных форм</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Природные формы" className="rounded-lg shadow-sm hover:shadow-md transition-shadow" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1500526499232-b78f701b7c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Природные формы" className="rounded-lg shadow-sm hover:shadow-md transition-shadow" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Природные формы" className="rounded-lg shadow-sm hover:shadow-md transition-shadow" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Природные формы" className="rounded-lg shadow-sm hover:shadow-md transition-shadow" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1494797262163-102fae527c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Природные формы" className="rounded-lg shadow-sm hover:shadow-md transition-shadow" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Природные формы" className="rounded-lg shadow-sm hover:shadow-md transition-shadow" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1470326192775-794dc55e81e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Природные формы" className="rounded-lg shadow-sm hover:shadow-md transition-shadow" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Природные формы" className="rounded-lg shadow-sm hover:shadow-md transition-shadow" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
