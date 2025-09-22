'use client'

import { useState, useEffect } from 'react'
import { Container } from '@/shared/ui/container'
import { Button } from '@/shared/ui/button'
import Image from 'next/image'

export function Header() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'events', 'gallery', 'contacts']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header className="bg-white/50 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50 animate-slide-in-up">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 animate-fade-in-left">
            <div className="w-10 h-10 hover:scale-110 transition-transform duration-300 relative overflow-hidden rounded-lg">
              <Image
                src="/images/logo.png"
                alt="АМД Логотип"
                width={40}
                height={40}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <span className="font-semibold text-primary">АМД</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 animate-fade-in-right">
            <a 
              href="#about" 
              className={`transition-all duration-300 hover:scale-105 relative group ${
                activeSection === 'about' ? 'text-accent' : 'text-gray-700 hover:text-accent'
              }`}
            >
              О НАС
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                activeSection === 'about' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
            <a 
              href="#events" 
              className={`transition-all duration-300 hover:scale-105 relative group ${
                activeSection === 'events' ? 'text-accent' : 'text-gray-700 hover:text-accent'
              }`}
            >
              СОБЫТИЯ
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                activeSection === 'events' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
            <a 
              href="#gallery" 
              className={`transition-all duration-300 hover:scale-105 relative group ${
                activeSection === 'gallery' ? 'text-accent' : 'text-gray-700 hover:text-accent'
              }`}
            >
              ГАЛЕРЕЯ
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                activeSection === 'gallery' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
            <a 
              href="#contacts" 
              className={`transition-all duration-300 hover:scale-105 relative group ${
                activeSection === 'contacts' ? 'text-accent' : 'text-gray-700 hover:text-accent'
              }`}
            >
              КОНТАКТЫ
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                activeSection === 'contacts' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          </nav>

          <Button variant="ghost" className="md:hidden animate-fade-in-right">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </Container>
    </header>
  )
}