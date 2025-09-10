import { Container } from '@/shared/ui/container'
import { Photo } from '@/entities/photo/model'
import photosData from '@/data/photos.json'

export function Gallery() {
  const photos: Photo[] = photosData

  return (
    <section id="gallery" className="py-16 bg-white section-shadow">
      <Container>
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Наша галерея
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Моменты из жизни нашего сообщества — праздники, встречи, 
            традиции и новые знакомства
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div 
              key={photo.id}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group animate-scale-in"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="text-center z-10">
                  <div className="w-8 h-8 bg-white/80 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-white text-xs font-medium">
                    {photo.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up delay-500">
          <p className="text-gray-600">
            Хотите поделиться своими фотографиями? Свяжитесь с нами!
          </p>
        </div>
      </Container>
    </section>
  )
}