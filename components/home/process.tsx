import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    title: 'Discover',
    text: 'We learn your business, audience and goals, then define scope, stack and success metrics.',
  },
  {
    title: 'Design',
    text: 'Wireframes and interface design you review early, so there are no surprises later.',
  },
  {
    title: 'Build',
    text: 'Clean, tested code on WordPress or modern JavaScript frameworks, with weekly progress demos.',
  },
  {
    title: 'Deploy',
    text: 'Secure launch with SSL, security headers, backups and monitoring from day one.',
  },
  {
    title: 'Grow',
    text: 'SEO, local positioning and analytics that turn traffic into measurable results.',
  },
]

export function Process() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          invert
          eyebrow="How we work"
          title="A clear process, node by node."
          description="Each phase hands off cleanly to the next, so your project stays on time, on budget and on target."
        />

        <ol className="relative mt-14 grid gap-10 md:grid-cols-5 md:gap-6">
          <span
            aria-hidden="true"
            className="absolute top-2.5 right-0 left-0 hidden h-px bg-background/15 md:block"
          />
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex flex-col gap-3">
              <span
                aria-hidden="true"
                className={
                  i === steps.length - 1
                    ? 'animate-node relative size-5 rounded-full border-4 border-foreground bg-signal'
                    : 'relative size-5 rounded-full border-4 border-foreground bg-primary'
                }
              />
              <span className="font-mono text-xs text-background/50">
                {`Step ${i + 1}`}
              </span>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-background/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
