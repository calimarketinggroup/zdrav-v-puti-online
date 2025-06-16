
import { Phone, Heart, Video, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Свяжитесь с нами
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Готовы начать путь к выздоровлению? Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Запишитесь на консультацию</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm placeholder-white/70 text-white border border-white/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm placeholder-white/70 text-white border border-white/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm placeholder-white/70 text-white border border-white/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm text-white border border-white/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300">
                  <option value="" className="text-gray-800">Выберите услугу</option>
                  <option value="depression" className="text-gray-800">Программа от депрессии</option>
                  <option value="stress" className="text-gray-800">Управление стрессом</option>
                  <option value="addiction" className="text-gray-800">Программа от зависимости</option>
                  <option value="consultation" className="text-gray-800">Онлайн консультация</option>
                  <option value="group" className="text-gray-800">Групповая терапия</option>
                </select>
                <textarea
                  placeholder="Расскажите о своей ситуации (необязательно)"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm placeholder-white/70 text-white border border-white/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Записаться на консультацию
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/15">
                <Phone className="h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Телефон</h4>
                <p className="opacity-90">+7 (495) 123-45-67</p>
                <p className="text-sm opacity-70 mt-2">Пн-Пт: 9:00-21:00</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/15">
                <Video className="h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Онлайн</h4>
                <p className="opacity-90">Видео-консультации</p>
                <p className="text-sm opacity-70 mt-2">Ежедневно 8:00-22:00</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/15">
                <Heart className="h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Email</h4>
                <p className="opacity-90">help@mentalhealth.ru</p>
                <p className="text-sm opacity-70 mt-2">Ответ в течение 2 часов</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/15">
                <Clock className="h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Кризисная помощь</h4>
                <p className="opacity-90">8-800-2000-122</p>
                <p className="text-sm opacity-70 mt-2">Круглосуточно</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Почему выбирают нас?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  <span>Лицензированные специалисты с опытом 10+ лет</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  <span>Индивидуальный подход к каждому клиенту</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  <span>Современные методы терапии и реабилитации</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  <span>Полная конфиденциальность и безопасность</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  <span>Гибкий график и доступные цены</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <h4 className="text-xl font-bold mb-2">Первая консультация БЕСПЛАТНО!</h4>
                <p className="mb-4">Узнайте, как мы можем помочь именно вам</p>
                <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors transform hover:scale-105">
                  Записаться сейчас
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
