import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
  invert?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  invert,
}: SectionHeadingProps) {
  return (
    <div className={cn('flex max-w-2xl flex-col gap-4', className)}>
      <p
        className={cn(
          'inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest',
          invert ? 'text-signal' : 'text-primary',
        )}
      >
        <span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">{title}</h2>
      {description && (
        <p
          className={cn(
            'text-base leading-relaxed text-pretty',
            invert ? 'text-background/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
