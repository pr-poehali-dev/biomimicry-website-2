import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
