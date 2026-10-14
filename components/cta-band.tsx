import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function CtaBand({
  title = 'Have a project in mind? Let’s map it out.',
  description = 'Tell us what you’re building. We’ll reply with a clear plan, timeline and next steps — no jargon, no pressure.',
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="px-5 py-20">
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground md:flex-row md:items-end md:justify-between md:p-14">
        <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative flex max-w-xl flex-col gap-4">
          <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">{title}</h2>
          <p className="leading-relaxed text-primary-foreground/80 text-pretty">{description}</p>
        </div>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: 'lg' }),
            'relative h-12 bg-signal px-6 text-base text-signal-foreground hover:bg-signal/90 [a]:hover:bg-signal/90',
          )}
        >
          Get a free consultation
          <ArrowRight data-icon="inline-end" />
        </Link>
      </div>
    </section>
  )
}
