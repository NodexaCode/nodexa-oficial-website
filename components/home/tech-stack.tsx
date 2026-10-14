import { Code as Code2, Rocket, ShieldCheck } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { techStack } from '@/lib/site'

const pillars = [
  {
    icon: Code2,
    title: 'The right tool for the job',
    text: 'WordPress when your team needs to publish freely. React, Next.js or Vue when you need speed and custom logic.',
  },
  {
    icon: ShieldCheck,
    title: 'Security by default',
    text: 'HTTPS, hardened headers, dependency audits, automated backups and least-privilege access on every project.',
  },
  {
    icon: Rocket,
    title: 'Built for performance',
    text: 'Optimized images, edge delivery and Core Web Vitals tuning — because speed is a ranking factor.',
  },
]

export function TechStack() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2">
        <SectionHeading
          eyebrow="Technology"
          title="Modern stacks. Secure deployments. Custom-fit for your project."
          description="We don’t force every client into the same template. We choose technology based on how your business works and where it needs to grow."
        />
        <ul className="flex flex-wrap content-start gap-2" aria-label="Technologies we work with">
          {techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border bg-card px-3 py-2 font-mono text-sm text-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => {
          const Icon = pillar.icon
          return (
            <div key={pillar.title} className="flex flex-col gap-3 border-t border-foreground pt-6">
              <Icon className="size-6 text-primary" aria-hidden="true" />
              <h3 className="text-lg font-semibold">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
