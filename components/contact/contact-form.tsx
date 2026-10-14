'use client'

import { ArrowRight, CircleCheck, LoaderCircle } from 'lucide-react'
import { useActionState } from 'react'
import { type ContactState, submitContact } from '@/app/contact/actions'
import { Button } from '@/components/ui/button'
import { services } from '@/lib/site'
import { cn } from '@/lib/utils'

const initialState: ContactState = { status: 'idle' }

const budgets = ['Under $2,500', '$2,500 – $7,500', '$7,500 – $20,000', '$20,000+', 'Not sure yet']

const inputClass =
  'w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-destructive'

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string
  label: string
  error?: string
  optional?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {optional && <span className="font-normal text-muted-foreground"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState)

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-8"
      >
        <CircleCheck className="size-8 text-primary" aria-hidden="true" />
        <h2 className="text-2xl font-semibold">Message received</h2>
        <p className="leading-relaxed text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  const errors = state.errors ?? {}

  return (
    <form
      action={formAction}
      noValidate
      className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            className={inputClass}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
        </Field>
      </div>

      <Field id="company" label="Company or website" optional>
        <input id="company" name="company" autoComplete="organization" className={inputClass} />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="service" label="Service needed" error={errors.service}>
          <select
            id="service"
            name="service"
            defaultValue=""
            required
            className={cn(inputClass, 'appearance-none')}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? 'service-error' : undefined}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Something else</option>
          </select>
        </Field>
        <Field id="budget" label="Estimated budget" optional>
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className={cn(inputClass, 'appearance-none')}
          >
            <option value="">Select a range</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="message" label="Tell us about your project" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Goals, timeline, current website, anything that helps us understand."
          className={cn(inputClass, 'resize-y leading-relaxed')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
      </Field>

      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === 'error' && state.message && (
        <p role="alert" className="text-sm text-destructive">
          {state.message}
        </p>
      )}

      <Button type="submit" disabled={pending} className="h-12 px-6 text-base sm:self-start">
        {pending ? (
          <>
            <LoaderCircle className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Send message
            <ArrowRight data-icon="inline-end" aria-hidden="true" />
          </>
        )}
      </Button>
    </form>
  )
}
