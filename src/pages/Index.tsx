import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExampleCard from "@/components/ExampleCard";
import ImageSection from "@/components/ImageSection";
import { Leaf, Award, Lightbulb, Heart, Globe, BookOpen, Zap, Coffee } from "lucide-react";

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
    },
    {
      title: "Костюмы для плавания Speedo",
      description: "Технология Fastskin имитирует кожу акулы с её микроскопическими зубчиками, что снижает сопротивление воды и позволяет пловцам двигаться быстрее.",
      imageUrl: "https://images.unsplash.com/photo-1551919059-a87d3c858022?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      inspiration: "Кожа акулы"
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
      
      {/* History Section */}
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
      
      {/* Examples Section */}
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
      
      {/* Research Section */}
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
      
      {/* Benefits Section */}
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
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-biomimicry-green-300 font-medium mb-3">Ресурсы</h4>
              <ul className="space-y-2 text-biomimicry-green-200">
                <li><a href="#" className="hover:text-white transition-colors">Публикации</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Исследования</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Видеоматериалы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-biomimicry-green-300 font-medium mb-3">Области применения</h4>
              <ul className="space-y-2 text-biomimicry-green-200">
                <li><a href="#" className="hover:text-white transition-colors">Архитектура</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Инженерия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Медицина</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-biomimicry-green-300 font-medium mb-3">О проекте</h4>
              <ul className="space-y-2 text-biomimicry-green-200">
                <li><a href="#" className="hover:text-white transition-colors">Наша миссия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-biomimicry-green-300 font-medium mb-3">Подписаться</h4>
              <p className="text-biomimicry-green-200 mb-2">Получайте новости из мира биомимикрии</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="bg-biomimicry-green-700 text-white px-3 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-biomimicry-green-300 placeholder-biomimicry-green-400"
                />
                <button className="bg-biomimicry-green-500 hover:bg-biomimicry-green-400 transition-colors text-white px-3 py-2 rounded-r-md">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
