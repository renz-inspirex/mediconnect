import BannerComponent from '@/components/BannerComponent'
import HeroComponent from '@/components/HeroComponent'
import NavbarComponent from '@/components/NavbarComponent'
import Section1Component from '@/components/Section1Component'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <NavbarComponent />
      <BannerComponent />
      <HeroComponent />
      <Section1Component />
    </main>
  )
}
