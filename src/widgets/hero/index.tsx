'use client'

import { useState, useEffect } from 'react'
import { Container } from '@/shared/ui/container'
import { Button } from '@/shared/ui/button'

export function Hero() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 500) // Показать контент через 1 секунду

    return () => clearTimeout(timer)
  }, [])
  return (
    <section id="hero" className="relative pt-20 pb-16 min-h-screen flex items-center overflow-hidden section-shadow">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/main-page.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <Container>
        <div className="relative z-10 max-w-3xl">
          {showContent && (
            <>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                Ассоциация молодежи
                <span className="block text-accent animate-fade-in-up delay-200">Дагестана</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up delay-300">
                АМД — объединение молодых дагестанцев <span className="text-accent">в Москве</span>. Поддерживаем традиции,
                создаем новые возможности и помогаем друг другу в столице.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
                <Button className="text-lg px-8 py-4">
                  Присоединиться
                </Button>
                <Button variant="ghost" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
                  Узнать больше
                </Button>
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  )
}