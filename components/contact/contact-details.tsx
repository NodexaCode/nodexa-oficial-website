import { Clock, Globe, Mail } from 'lucide-react'
import Image from 'next/image'
import { siteConfig } from '@/lib/site'

const details = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  { icon: Clock, label: 'Response time', value: siteConfig.responseTime },
  { icon: Globe, label: 'Where we work', value: 'Remote-first, serving clients in the US & worldwide' },
]

const nextSteps = [
  'We review your message and any links you share.',
  'We schedule a free 30-minute discovery call.',
  'You receive a clear proposal with scope, timeline and price.',
]

export function ContactDetails() {
  return (
    <aside className="flex flex-col gap-8">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted">
        <Image
          src="/images/workspace-code.png"
          alt="Developer working on code and local search results across two monitors"
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
      </div>

      <ul className="flex flex-col gap-5">
        {details.map((d) => {
          const Icon = d.icon
          return (
            <li key={d.label} className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {d.label}
                </span>
                {d.href ? (
                  <a href={d.href} className="font-medium underline-offset-4 hover:underline">
                    {d.value}
                  </a>
                ) : (
                  <span className="font-medium">{d.value}</span>
                )}
              </div>
            </li>
          )
        })}
      </ul>

      <div className="flex flex-col gap-4 rounded-xl bg-foreground p-6 text-background">
        <h2 className="font-mono text-xs uppercase tracking-widest text-signal">What happens next</h2>
        <ol className="flex flex-col gap-3">
          {nextSteps.map((step, i) => (
            <li key={step} className="flex gap-3 text-sm leading-relaxed text-background/80">
              <span className="font-mono text-background/50">{i + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </aside>
  )
}
