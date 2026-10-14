import { Eye, Handshake, ShieldCheck, Target } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const values = [
  {
    icon: Target,
    title: 'Outcomes over output',
    text: 'We measure success in leads, sales and rankings — not in pages delivered or hours logged.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure from the start',
    text: 'Security isn’t an add-on. Every deployment ships with hardened configuration, backups and monitoring.',
  },
  {
    icon: Eye,
    title: 'Radical transparency',
    text: 'Clear proposals, honest timelines, weekly demos and analytics dashboards you own.',
  },
  {
    icon: Handshake,
    title: 'Long-term partnership',
    text: 'Launch day is the beginning. We stay on to maintain, improve and grow what we build together.',
  },
]

export function Values() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          invert
          eyebrow="What we stand for"
          title="The principles behind every project."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-xl bg-background/10 sm:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <li key={value.title} className="flex flex-col gap-3 bg-foreground p-8">
                <Icon className="size-6 text-signal" aria-hidden="true" />
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="leading-relaxed text-background/70">{value.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
