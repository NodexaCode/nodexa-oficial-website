import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { DeployConsole } from '@/components/home/deploy-console'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 text-foreground [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="animate-node size-1.5 rounded-full bg-signal" aria-hidden="true" />
            Web development & search growth agency
          </p>
          <h1
            className="animate-rise text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '80ms' }}
          >
            We build the web. <span className="text-primary">Then we make it rank.</span>
          </h1>
          <p
            className="animate-rise max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty"
            style={{ animationDelay: '160ms' }}
          >
            Nodexa Code designs and engineers custom web applications, platforms, websites and
            landing pages — then grows them with local SEO, web positioning and analytics you can
            act on.
          </p>
          <div
            className="animate-rise flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: '240ms' }}
          >
            <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }), 'h-12 px-6 text-base')}>
              Start your project
              <ArrowRight data-icon="inline-end" />
            </Link>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-12 px-6 text-base')}
            >
              Explore services
            </Link>
          </div>
          <p
            className="animate-rise font-mono text-xs text-muted-foreground"
            style={{ animationDelay: '320ms' }}
          >
            WordPress · React · Next.js · Vue · Node.js · Secure cloud deployments
          </p>
        </div>

        <div className="animate-rise" style={{ animationDelay: '200ms' }}>
          <DeployConsole />
        </div>
      </div>
    </section>
  )
}
