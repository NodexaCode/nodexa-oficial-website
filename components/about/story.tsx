import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

export function Story() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-2">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
        <Image
          src="/images/about-team.png"
          alt="The Nodexa Code team collaborating on a web project in their studio"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col gap-6">
        <SectionHeading
          eyebrow="Our story"
          title="Engineers who think like marketers."
        />
        <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
          <p>
            Nodexa Code started with a simple observation: too many businesses had beautiful
            websites nobody could find, or high-traffic sites that were slow, insecure and
            impossible to maintain.
          </p>
          <p>
            We built our agency to close that gap. Every project we take on connects solid
            engineering with search visibility and real analytics — so what we build doesn’t just
            work, it performs.
          </p>
          <p>
            Today we partner with startups, local businesses and growing companies to design,
            build, deploy and grow web products on WordPress and modern JavaScript frameworks.
          </p>
        </div>
      </div>
    </section>
  )
}
