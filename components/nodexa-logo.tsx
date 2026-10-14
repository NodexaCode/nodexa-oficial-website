import Image from 'next/image'
import { cn } from '@/lib/utils'

export function NodexaLogo({ className, invert }: { className?: string; invert?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <Image
        src="/images/nodexa-mark.png"
        alt=""
        width={34}
        height={34}
        className={cn('size-8 object-contain', invert && 'invert')}
        aria-hidden="true"
      />
      <span className="text-lg font-semibold tracking-tight">
        Nodexa<span className={invert ? 'text-signal' : 'text-primary'}> Code</span>
      </span>
    </span>
  )
}
