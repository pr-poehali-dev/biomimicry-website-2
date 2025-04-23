import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExampleCard from "@/components/ExampleCard";
import ImageSection from "@/components/ImageSection";
import { Leaf, Award, Lightbulb, Heart } from "lucide-react";

const Index = () => {
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
    }
  ];

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
    }
  ];

  return (
    <div className="min-h-screen bg-biomimicry-neutral-50">
      <Navbar />
      
      <Hero />
      
      {/* Introduction Section */}
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
            </div>
          </div>
        </div>
      </section>
      
      {/* Examples Section */}
      <section id="examples" className="bg-biomimicry-green-100 py-16">
        <div className="biomimicry-container">
          <h2 className="section-heading">Примеры биомимикрии</h2>
          <p className="text-lg text-biomimicry-green-800 mb-10">
            Вот некоторые из самых известных примеров, где человеческие технологии были вдохновлены природой:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <ImageSection images={natureImages} columns={4} />
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="bg-white py-16">
        <div className="biomimicry-container">
          <h2 className="section-heading">Преимущества биомимикрии</h2>
          <p className="text-lg text-biomimicry-green-800 mb-10">
            Использование природных стратегий для решения человеческих проблем имеет множество преимуществ:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-biomimicry-green-50 p-6 rounded-lg shadow-sm flex">
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
            
            <div className="bg-biomimicry-green-50 p-6 rounded-lg shadow-sm flex">
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
            
            <div className="bg-biomimicry-green-50 p-6 rounded-lg shadow-sm flex">
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
            
            <div className="bg-biomimicry-green-50 p-6 rounded-lg shadow-sm flex">
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
          </div>
        </div>
      </section>
      
      {/* Applications Section */}
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
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-biomimicry-green-800 text-white py-10">
        <div className="biomimicry-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Leaf className="h-6 w-6 text-biomimicry-green-300" />
              <span className="ml-2 text-xl font-bold">БиоМимикрия</span>
            </div>
            <div className="text-biomimicry-green-200 text-sm">
              © 2023 БиоМимикрия. Вдохновлено природой.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
