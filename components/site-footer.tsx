import Link from 'next/link'
import { NodexaLogo } from '@/components/nodexa-logo'
import { navLinks, services, siteConfig } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="flex flex-col gap-4 md:col-span-2">
          <NodexaLogo invert />
          <p className="max-w-sm text-sm leading-relaxed text-background/70">
            Web applications, platforms, websites and landing pages — engineered to perform,
            deployed securely and built to be found.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-mono text-sm text-signal underline-offset-4 hover:underline"
          >
            {siteConfig.email}
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-xs uppercase tracking-widest text-background/50">
            Company
          </h2>
          <ul className="flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-background/80 hover:text-background">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-xs uppercase tracking-widest text-background/50">
            Services
          </h2>
          <ul className="flex flex-col gap-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-background/80 hover:text-background"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-background/50 sm:flex-row sm:justify-between">
          <p>
            {'© '}
            {new Date().getFullYear()} Nodexa Code. All rights reserved.
          </p>
          <p className="font-mono">Built secure. Deployed fast.</p>
        </div>
      </div>
    </footer>
  )
}
