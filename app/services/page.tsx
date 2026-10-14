import type { Metadata } from 'next'
import Link from 'next/link'
import { CtaBand } from '@/components/cta-band'
import { PageHero } from '@/components/page-hero'
import { ServiceDetail } from '@/components/services/service-detail'
import { ServicesFaq } from '@/components/services/services-faq'
import { services } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web applications, platforms, WordPress and JavaScript websites, landing pages, local SEO, and web positioning with analytics — all from Nodexa Code.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything you need to launch, scale and get found online."
        description="Pick a single service or combine them into one connected engagement. Either way, you get custom work built on secure, modern infrastructure."
      />

      <nav
        aria-label="Services"
        className="sticky top-16 z-30 border-b border-border bg-background/90 backdrop-blur"
      >
        <ul className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-5 py-3">
          {services.map((service) => (
            <li key={service.slug} className="shrink-0">
              <Link
                href={`#${service.slug}`}
                className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-6xl px-5 pb-6">
        {services.map((service, i) => (
          <ServiceDetail key={service.slug} service={service} index={i} />
        ))}
      </div>

      <ServicesFaq />
      <CtaBand
        title="Not sure which service fits?"
        description="Book a free consultation. We’ll review your current site or idea and recommend the most effective path forward."
      />
    </>
  )
}
