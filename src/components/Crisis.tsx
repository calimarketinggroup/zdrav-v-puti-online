
import { Phone, Heart, Shield, Clock } from "lucide-react";

const Crisis = () => {
  return (
    <section id="crisis" className="py-20 bg-gradient-to-br from-red-50 to-orange-50 border-t-4 border-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Phone className="h-10 w-10 text-red-600 animate-pulse" />
            <h2 className="text-4xl lg:text-5xl font-bold text-red-600">
              Кризисная помощь
            </h2>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Если вы находитесь в кризисной ситуации, не оставайтесь одни. Наша команда готова помочь вам 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Phone className="h-6 w-6 text-red-600 mr-3" />
                Экстренные контакты
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                  <span className="font-medium text-gray-800">Горячая линия помощи:</span>
                  <a href="tel:+78002000122" className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors">
                    8-800-2000-122
                  </a>
                </div>
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <span className="font-medium text-gray-800">Кризисный психолог:</span>
                  <a href="tel:+79151234567" className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
                    +7 915 123-45-67
                  </a>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium text-gray-800">Экстренный чат:</span>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                    Написать сейчас
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Clock className="h-6 w-6 mr-3" />
                Круглосуточная поддержка
              </h3>
              <p className="text-lg mb-6">
                Мы понимаем, что кризис не выбирает время. Наши специалисты готовы помочь вам в любое время дня и ночи.
              </p>
              <button className="bg-white text-red-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
                Получить помощь сейчас
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="h-8 w-8 text-red-500" />
                <h4 className="text-xl font-bold text-gray-800">Когда обращаться</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Мысли о самоповреждении или суициде</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Острые панические атаки</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Сильные депрессивные эпизоды</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Острые состояния тревоги</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Кризисы в отношениях</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-green-500" />
                <h4 className="text-xl font-bold text-gray-800">Что мы предлагаем</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Немедленную эмоциональную поддержку</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Оценку безопасности ситуации</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Разработку плана безопасности</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Связь с местными службами</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Последующее наблюдение</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border-t-4 border-yellow-400">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Помните: вы не одни</h3>
            <p className="text-lg text-gray-600 mb-6">
              Обращение за помощью - это проявление силы, а не слабости. Каждый человек заслуживает поддержки в трудные моменты.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <a
                href="tel:+78002000122"
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Позвонить сейчас</span>
              </a>
              <button className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105 hover:shadow-lg">
                Начать чат
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crisis;
