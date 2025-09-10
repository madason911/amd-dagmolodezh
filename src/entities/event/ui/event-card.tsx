import { Event } from '../model'
import { formatDate } from '@/shared/lib/format-date'

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
      {event.image && (
        <div className="h-48 bg-gray-200 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium group-hover:scale-110 transition-transform duration-300">
            {formatDate(event.date)}
          </div>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-3">
          {event.title}
        </h3>
        
        {event.description && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {event.description}
          </p>
        )}
        
        {event.location && (
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {event.location}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-accent font-medium">
            {formatDate(event.date, { time: true })}
          </span>
          
          {event.link && (
            <a 
              href={event.link}
              className="text-accent hover:text-accent/80 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Подробнее →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}