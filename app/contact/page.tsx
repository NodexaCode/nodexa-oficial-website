import type { Metadata } from 'next'
import { ContactDetails } from '@/components/contact/contact-details'
import { ContactForm } from '@/components/contact/contact-form'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start your project with Nodexa Code. Tell us about your web app, website, landing page or SEO goals and get a free consultation.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your project."
        description="Share a few details and we’ll get back to you with ideas, questions and a clear path forward. Consultations are always free."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
        <div className="lg:col-span-5">
          <ContactDetails />
        </div>
      </section>
    </>
  )
}
