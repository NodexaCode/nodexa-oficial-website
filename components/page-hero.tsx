export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 text-foreground [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-5 px-5 py-16 md:py-24">
        <p className="animate-rise inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />
          {eyebrow}
        </p>
        <h1
          className="animate-rise max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-balance md:text-6xl"
          style={{ animationDelay: '80ms' }}
        >
          {title}
        </h1>
        <p
          className="animate-rise max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty"
          style={{ animationDelay: '160ms' }}
        >
          {description}
        </p>
      </div>
    </section>
  )
}
