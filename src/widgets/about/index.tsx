import { Container } from '@/shared/ui/container'

export function About() {
  const goals = [
    'Объединение молодых дагестанцев в Москве',
    'Сохранение и популяризация культурных традиций',
    'Взаимопомощь и поддержка участников АМД',
    'Организация культурных и образовательных мероприятий',
    'Развитие профессиональных и дружеских связей'
  ]

  return (
    <section id="about" className="py-16 bg-white section-shadow relative overflow-hidden">
      <div className="absolute inset-0 flex justify-center">
        <div className="max-w-7xl w-full h-full" style={{backgroundImage: 'url(/svg/mountain.svg)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
      </div>
      <div className="absolute inset-0 bg-white/80"></div>
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center animate-fade-in-up">
            О нашей ассоциации
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg animate-fade-in-left">
              <p className="text-gray-600 leading-relaxed mb-6">
                АМД — это активная Ассоциация молодежи Дагестана, объединяющая молодых 
                дагестанцев, которые живут и работают в Москве. Наша миссия заключается в том, 
                чтобы поддерживать молодое поколение, сохранять богатые традиции нашего 
                народа и создавать возможности для развития.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Мы организуем молодежные встречи, культурные мероприятия, отмечаем 
                национальные праздники и помогаем участникам в профессиональном 
                и личностном росте. Вместе мы сильнее!
              </p>
            </div>
            
            <div className="animate-fade-in-right">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Наши цели
              </h3>
              <ul className="space-y-3">
                {goals.map((goal, index) => (
                  <li key={index} className="flex items-start animate-fade-in-up hover:translate-x-2 transition-transform duration-300" style={{animationDelay: `${index * 100 + 300}ms`}}>
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0 hover:scale-150 transition-transform duration-300" />
                    <span className="text-gray-700">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}