
import { Heart, Video, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Путь к <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">выздоровлению</span> начинается здесь
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Профессиональная психологическая помощь онлайн. Преодолеем депрессию, стресс и зависимости вместе.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl transform hover:-translate-y-1">
                Записаться на консультацию
              </button>
              <button className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-green-500 hover:text-white hover:scale-105 hover:shadow-xl">
                Получить помощь сейчас
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto transform transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Video className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Онлайн консультации</p>
              </div>
              <div className="text-center space-y-2">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto transform transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Индивидуальный подход</p>
              </div>
              <div className="text-center space-y-2">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto transform transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">100% конфиденциально</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-green-400 rounded-3xl p-8 transform rotate-3 hover:rotate-1 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-8 transform -rotate-3">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 text-center">Начните путь к выздоровлению</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <span className="text-gray-700">Бесплатная консультация</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                      <span className="text-gray-700">Персональный план лечения</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                      <span className="text-gray-700">Регулярные сессии</span>
                    </div>
                  </div>
                  <div className="text-center pt-4">
                    <p className="text-3xl font-bold text-green-600">97%</p>
                    <p className="text-sm text-gray-600">успешных случаев</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
