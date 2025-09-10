import { Container } from '@/shared/ui/container'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-12 section-shadow-light">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 hover:scale-110 transition-transform duration-300 relative overflow-hidden rounded-lg">
                <Image
                  src="/images/logo.jpg"
                  alt="АМД Логотип"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-xl font-semibold">АМД</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ассоциация молодежи Дагестана в Москве. Объединяем молодых людей, 
              сохраняем традиции и создаем новые возможности.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Быстрые ссылки</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-300 hover:text-accent transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-300 hover:text-accent transition-colors">
                  События
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-accent transition-colors">
                  Галерея
                </a>
              </li>
              <li>
                <a href="#contacts" className="text-gray-300 hover:text-accent transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Социальные сети</h4>
            <div className="flex space-x-4">
              <a 
                href="https://t.me/amd_moscow" 
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              
              <a 
                href="https://instagram.com/amd_moscow" 
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Ассоциация молодежи Дагестана. Все права защищены.</p>
        </div>
      </Container>
    </footer>
  )
}