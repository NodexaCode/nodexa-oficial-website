import { Check } from 'lucide-react'
import type { Service } from '@/lib/site'

export function ServiceDetail({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon
  return (
    <article
      id={service.slug}
      className="grid scroll-mt-24 gap-8 border-t border-border py-14 lg:grid-cols-12"
    >
      <div className="flex flex-col gap-4 lg:col-span-5">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {`Service / ${String(index + 1).padStart(2, '0')}`}
          </span>
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-balance">{service.title}</h2>
        <p className="leading-relaxed text-muted-foreground text-pretty">{service.description}</p>
      </div>

      <div className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7">
        <div className="flex flex-col gap-3">
          <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
            What&apos;s included
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {service.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-mono text-xs uppercase tracking-widest text-primary">Tools & stack</h3>
          <ul className="flex flex-wrap gap-2">
            {service.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
