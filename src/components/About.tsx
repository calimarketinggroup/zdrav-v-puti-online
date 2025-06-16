
import { Heart, Brain, Shield } from "lucide-react";

const About = () => {
  const coaches = [
    {
      name: "Др. Елена Волкова",
      specialty: "Клинический психолог",
      experience: "15 лет опыта",
      description: "Специализируется на когнитивно-поведенческой терапии депрессии",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Др. Михаил Петров",
      specialty: "Психотерапевт",
      experience: "12 лет опыта",
      description: "Эксперт по работе с зависимостями и стрессовыми расстройствами",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Др. Анна Смирнова",
      specialty: "Семейный психолог",
      experience: "10 лет опыта",
      description: "Специалист по семейной и групповой терапии",
      image: "https://images.unsplash.com/photo-1594824797243-d1a4b7b5a62e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
            О <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">нас</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Команда профессиональных психологов, объединенных общей целью - помочь людям обрести ментальное здоровье и радость жизни
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">Наша миссия</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Мы верим, что каждый человек заслуживает счастья и внутреннего покоя. Наша цель - сделать качественную психологическую помощь доступной для всех, кто в ней нуждается.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto transform transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">500+</p>
                  <p className="text-sm text-gray-600">Помогли клиентам</p>
                </div>
              </div>
              <div className="text-center space-y-3">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto transform transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Brain className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">97%</p>
                  <p className="text-sm text-gray-600">Успешных случаев</p>
                </div>
              </div>
              <div className="text-center space-y-3">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto transform transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-600">5</p>
                  <p className="text-sm text-gray-600">Лет опыта</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-green-400 rounded-3xl p-1 transform rotate-2 hover:rotate-1 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Команда психологов"
                className="w-full h-96 object-cover rounded-3xl transform -rotate-2"
              />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-gray-800 text-center">Наши специалисты</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:scale-105 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{coach.name}</h4>
                    <p className="text-blue-600 font-medium">{coach.specialty}</p>
                    <p className="text-sm text-gray-500">{coach.experience}</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{coach.description}</p>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                    Записаться к специалисту
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
