import type { Metadata } from 'next'
import { Approach } from '@/components/about/approach'
import { Story } from '@/components/about/story'
import { Values } from '@/components/about/values'
import { CtaBand } from '@/components/cta-band'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet Nodexa Code — a web development and SEO agency combining solid engineering, secure deployments and data-driven growth.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Nodexa Code"
        title="We connect great code with real business growth."
        description="We’re a web development and digital growth agency. We design, build and securely deploy web products — then help them get found and measured."
      />
      <Story />
      <Values />
      <Approach />
      <CtaBand title="Let’s build something that lasts." />
    </>
  )
}
