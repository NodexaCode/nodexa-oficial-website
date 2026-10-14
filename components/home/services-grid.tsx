import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { SectionHeading } from '@/components/section-heading'
import { services } from '@/lib/site'

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="What we do"
          title="Every service connected, from first line of code to first page of Google."
        />
        <Link
          href="/services"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          All services
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <li key={service.slug} className="bg-card">
              <Link
                href={`/services#${service.slug}`}
                className="group flex h-full flex-col gap-4 p-7 transition-colors hover:bg-background"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
