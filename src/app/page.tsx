import { Header } from '@/widgets/header'
import { Hero } from '@/widgets/hero'  
import { About } from '@/widgets/about'
import { Events } from '@/widgets/events'
import { Gallery } from '@/widgets/gallery'
import { Contacts } from '@/widgets/contacts'
import { Footer } from '@/widgets/footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Contacts />
      <Footer />
    </main>
  )
}