
import { useState } from "react";
import { Menu, X, Heart, Phone, BookOpen } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold text-gray-800">МентальПоддержка</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="nav-link text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md">
                Главная
              </a>
              <a href="#services" className="nav-link text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md">
                Услуги
              </a>
              <a href="#about" className="nav-link text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md">
                О нас
              </a>
              <a href="#crisis" className="nav-link text-red-600 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>Кризисная помощь</span>
              </a>
              <a href="#contact" className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1">
                Записаться
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">Главная</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">Услуги</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">О нас</a>
            <a href="#crisis" className="block px-3 py-2 text-red-600 hover:text-red-700 transition-colors duration-300">Кризисная помощь</a>
            <a href="#contact" className="block px-3 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-md transition-all duration-300">Записаться</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
