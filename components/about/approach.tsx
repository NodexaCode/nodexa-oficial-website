import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const commitments = [
  'A dedicated point of contact for your project',
  'Fixed-scope proposals with no hidden fees',
  'You own your code, content, domains and data',
  'Documented handoff and team training',
  'Ongoing maintenance and growth plans available',
  'Remote-first, working with clients across time zones',
]

export function Approach() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-2">
      <SectionHeading
        eyebrow="Working with us"
        title="A small, senior team. Direct communication. No handoffs to strangers."
        description="When you work with Nodexa Code, you talk directly to the people designing and building your product. That keeps decisions fast and quality high."
      />
      <ul className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card">
        {commitments.map((item) => (
          <li key={item} className="flex items-start gap-3 px-6 py-4">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary">
              <Check className="size-3 text-primary-foreground" aria-hidden="true" />
            </span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
