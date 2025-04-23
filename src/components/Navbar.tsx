import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-biomimicry-green-200 sticky top-0 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-biomimicry-green-500" />
              <span className="ml-2 text-xl font-bold text-biomimicry-green-700">БиоМимикрия</span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link 
                to="/" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-biomimicry-green-600 hover:text-biomimicry-green-800 hover:border-biomimicry-green-300"
              >
                Главная
              </Link>
              <a 
                href="#examples" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-biomimicry-green-600 hover:text-biomimicry-green-800 hover:border-biomimicry-green-300"
              >
                Примеры
              </a>
              <a 
                href="#benefits" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-biomimicry-green-600 hover:text-biomimicry-green-800 hover:border-biomimicry-green-300"
              >
                Преимущества
              </a>
              <a 
                href="#applications" 
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-biomimicry-green-600 hover:text-biomimicry-green-800 hover:border-biomimicry-green-300"
              >
                Применение
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
