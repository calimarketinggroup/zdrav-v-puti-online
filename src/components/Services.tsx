
import { Brain, Heart, Shield, Video, BookOpen, Phone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Программа от депрессии",
      description: "Комплексная терапия депрессивных состояний с использованием современных методов",
      color: "blue",
      features: ["КПТ терапия", "Медитативные практики", "Поддержка 24/7"]
    },
    {
      icon: Heart,
      title: "Управление стрессом",
      description: "Техники релаксации и управления стрессовыми ситуациями",
      color: "green",
      features: ["Дыхательные техники", "Тайм-менеджмент", "Групповые сессии"]
    },
    {
      icon: Shield,
      title: "Программа от зависимости",
      description: "Профессиональная помощь в преодолении различных видов зависимостей",
      color: "red",
      features: ["12-шаговая программа", "Семейная терапия", "Реабилитация"]
    },
    {
      icon: Video,
      title: "Онлайн консультации",
      description: "Индивидуальные сессии с квалифицированными психологами",
      color: "purple",
      features: ["Видео-звонки", "Чат поддержка", "Гибкий график"]
    },
    {
      icon: BookOpen,
      title: "Групповая терапия",
      description: "Работа в группах для взаимной поддержки и мотивации",
      color: "orange",
      features: ["Группы поддержки", "Тематические сессии", "Социализация"]
    },
    {
      icon: Phone,
      title: "Кризисная поддержка",
      description: "Экстренная психологическая помощь в критических ситуациях",
      color: "red",
      features: ["Круглосуточно", "Экстренный вызов", "Немедленная помощь"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      red: "from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
      purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      orange: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
            Наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">услуги</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексная психологическая помощь для восстановления ментального здоровья и обретения внутренней гармонии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:scale-105 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`bg-gradient-to-br ${getColorClasses(service.color)} p-6 text-white`}>
                <service.icon className="h-12 w-12 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              </div>
              
              <div className="p-6 space-y-4">
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full bg-gradient-to-r ${getColorClasses(service.color)} text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105`}>
                  Узнать больше
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
