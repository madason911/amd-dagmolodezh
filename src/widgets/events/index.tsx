import { Container } from '@/shared/ui/container'
import { Button } from '@/shared/ui/button'
import { EventCard } from '@/entities/event/ui/event-card'
import { Event } from '@/entities/event/model'
import eventsData from '@/data/events.json'

export function Events() {
  const events: Event[] = eventsData

  return (
    <section id="events" className="py-16 bg-gray-50 section-shadow">
      <Container>
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Наши события
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Присоединяйтесь к нашим мероприятиям — от культурных праздников 
            до неформальных встреч
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {events.map((event, index) => (
            <div key={event.id} className="animate-scale-in" style={{animationDelay: `${index * 200}ms`}}>
              <EventCard event={event} />
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up delay-700">
          <Button>
            Посмотреть все события
          </Button>
        </div>
      </Container>
    </section>
  )
}