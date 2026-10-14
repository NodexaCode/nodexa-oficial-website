import { CtaBand } from '@/components/cta-band'
import { Hero } from '@/components/home/hero'
import { Process } from '@/components/home/process'
import { ServicesGrid } from '@/components/home/services-grid'
import { TechStack } from '@/components/home/tech-stack'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Process />
      <TechStack />
      <CtaBand />
    </>
  )
}
