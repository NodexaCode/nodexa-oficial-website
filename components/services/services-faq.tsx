import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const faqs = [
  {
    q: 'Should I choose WordPress or a JavaScript framework?',
    a: 'WordPress is ideal when your team publishes content often and wants a familiar editor. Frameworks like Next.js or Vue are better for custom functionality, complex interactions and top-tier performance. We’ll recommend the right fit after understanding your goals.',
  },
  {
    q: 'How do you keep deployments secure?',
    a: 'Every project ships with HTTPS, hardened security headers, environment-isolated secrets, dependency audits, automated backups and uptime monitoring. Access is granted on a least-privilege basis.',
  },
  {
    q: 'How long until I see SEO results?',
    a: 'Technical fixes can show improvements within weeks. Local SEO and competitive keyword rankings typically build over 3–6 months. We report progress monthly so you always know where you stand.',
  },
  {
    q: 'Can you work on my existing website?',
    a: 'Yes. We regularly audit, redesign, migrate and optimize existing sites — whether you want a performance boost, a security review or a full rebuild.',
  },
  {
    q: 'Do you offer maintenance after launch?',
    a: 'Absolutely. Our care plans cover updates, security patches, backups, small changes and ongoing SEO and analytics reporting.',
  },
]

export function ServicesFaq() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <SectionHeading eyebrow="FAQ" title="Questions we hear often." />
      </div>
      <div className="flex flex-col divide-y divide-border border-y border-border lg:col-span-8">
        {faqs.map((faq) => (
          <details key={faq.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium [&::-webkit-details-marker]:hidden">
              {faq.q}
              <Plus
                className="size-5 shrink-0 text-primary transition-transform group-open:rotate-45"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
