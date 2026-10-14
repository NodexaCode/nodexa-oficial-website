import { Check, ShieldCheck } from 'lucide-react'

const pipeline = [
  { label: 'Design system approved', detail: 'ui/tokens' },
  { label: 'Build & type-check passed', detail: 'next build' },
  { label: 'Security headers + SSL', detail: 'A+ rating' },
  { label: 'Deployed to edge network', detail: '42 regions' },
  { label: 'Schema & sitemap indexed', detail: 'search console' },
]

const vitals = [
  { label: 'Performance', value: 98 },
  { label: 'SEO', value: 100 },
  { label: 'Accessibility', value: 96 },
]

export function DeployConsole() {
  return (
    <div
      role="img"
      aria-label="Illustration of a secure deployment pipeline with performance and SEO scores"
      className="relative w-full overflow-hidden rounded-xl bg-foreground text-background shadow-2xl shadow-foreground/20"
    >
      <div className="flex items-center justify-between border-b border-background/10 px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-background/20" />
          <span className="size-2.5 rounded-full bg-background/20" />
          <span className="size-2.5 rounded-full bg-signal" />
        </div>
        <p className="font-mono text-xs text-background/50">nodexa ~ deploy --secure</p>
        <ShieldCheck className="size-4 text-signal" aria-hidden="true" />
      </div>

      <ol className="flex flex-col gap-3 px-5 py-5 font-mono text-sm">
        {pipeline.map((step, i) => (
          <li
            key={step.label}
            className="animate-rise flex items-center justify-between gap-4"
            style={{ animationDelay: `${300 + i * 220}ms` }}
          >
            <span className="flex items-center gap-3">
              <span className="flex size-5 items-center justify-center rounded-full bg-primary">
                <Check className="size-3 text-primary-foreground" aria-hidden="true" />
              </span>
              <span className="text-background/90">{step.label}</span>
            </span>
            <span className="hidden text-xs text-background/40 sm:inline">{step.detail}</span>
          </li>
        ))}
        <li
          className="animate-rise flex items-center gap-3 pt-1"
          style={{ animationDelay: `${300 + pipeline.length * 220}ms` }}
        >
          <span className="animate-node size-2 rounded-full bg-signal" aria-hidden="true" />
          <span className="text-signal">Live at yourbrand.com</span>
        </li>
      </ol>

      <div className="grid grid-cols-3 border-t border-background/10">
        {vitals.map((v, i) => (
          <div
            key={v.label}
            className="flex flex-col gap-2 border-r border-background/10 px-4 py-4 last:border-r-0"
          >
            <span className="font-mono text-[11px] uppercase tracking-wider text-background/50">
              {v.label}
            </span>
            <span className="text-2xl font-semibold">{v.value}</span>
            <span className="h-1 w-full overflow-hidden rounded-full bg-background/10">
              <span
                className="animate-fill block h-full rounded-full bg-primary"
                style={{ width: `${v.value}%`, animationDelay: `${1700 + i * 150}ms` }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
