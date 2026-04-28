'use client'

import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useForm } from '@tanstack/react-form'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contactFormSchema, formatPhoneNumber } from '@/lib/contact'
import { normalizeFieldErrors } from '@/forms/field-components/normalize-field-errors'

export function MarketingContactForm() {
  const [submissionError, setSubmissionError] = useState<string>()
  const [successMessage, setSuccessMessage] = useState<string>()

  const form = useForm({
    defaultValues: {
      email: '',
      message: '',
      name: '',
      phone: '',
    },
    validators: {
      onSubmit: contactFormSchema,
    },
    onSubmit: async ({ value, formApi }) => {
      setSubmissionError(undefined)
      setSuccessMessage(undefined)

      const response = await fetch('/api/contact', {
        body: JSON.stringify(value),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      const payload = (await response.json()) as { error?: string; message?: string }

      if (!response.ok) {
        setSubmissionError(payload.error || 'Something went wrong while sending the inquiry.')
        return
      }

      formApi.reset()
      setSuccessMessage("We'll be getting back with you shortly.")
    },
  })

  if (successMessage) {
    return <MarketingContactThankYou message={successMessage} />
  }

  return (
    <form
      className="flex flex-col gap-6"
      noValidate
      onSubmit={(event) => {
        event.preventDefault()
        event.stopPropagation()
        void form.handleSubmit()
      }}
    >
      <FieldGroup className="gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          <form.Field name="name">
            {(field) => {
              const normalizedErrors = normalizeFieldErrors(field.state.meta.errors as unknown[])
              const isInvalid =
                (field.state.meta.isTouched || form.state.submissionAttempts > 0) &&
                !field.state.meta.isValid

              return (
                <Field data-invalid={isInvalid || undefined}>
                  <FieldLabel htmlFor="contact-name">Full Name</FieldLabel>
                  <Input
                    id="contact-name"
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => {
                      setSubmissionError(undefined)
                      field.handleChange(event.target.value)
                    }}
                    autoComplete="name"
                    aria-invalid={isInvalid}
                    className="h-12 rounded-[8px] border-[#f0c6e1] bg-white px-4 text-base text-(--marketing-ink) shadow-sm placeholder:text-(--marketing-copy)"
                    placeholder="Jane Sweet"
                  />
                  {isInvalid ? <FieldError errors={normalizedErrors} /> : null}
                </Field>
              )
            }}
          </form.Field>

          <form.Field name="email">
            {(field) => {
              const normalizedErrors = normalizeFieldErrors(field.state.meta.errors as unknown[])
              const isInvalid =
                (field.state.meta.isTouched || form.state.submissionAttempts > 0) &&
                !field.state.meta.isValid

              return (
                <Field data-invalid={isInvalid || undefined}>
                  <FieldLabel htmlFor="contact-email">Email Address</FieldLabel>
                  <Input
                    id="contact-email"
                    name={field.name}
                    type="email"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => {
                      setSubmissionError(undefined)
                      field.handleChange(event.target.value)
                    }}
                    autoComplete="email"
                    aria-invalid={isInvalid}
                    className="h-12 rounded-[8px] border-[#f0c6e1] bg-white px-4 text-base text-(--marketing-ink) shadow-sm placeholder:text-(--marketing-copy)"
                    placeholder="jane@email.com"
                  />
                  {isInvalid ? <FieldError errors={normalizedErrors} /> : null}
                </Field>
              )
            }}
          </form.Field>
        </div>

        <form.Field name="phone">
          {(field) => {
            const normalizedErrors = normalizeFieldErrors(field.state.meta.errors as unknown[])
            const isInvalid =
              (field.state.meta.isTouched || form.state.submissionAttempts > 0) &&
              !field.state.meta.isValid

            return (
              <Field data-invalid={isInvalid || undefined}>
                <FieldLabel htmlFor="contact-phone">Phone Number</FieldLabel>
                <Input
                  id="contact-phone"
                  name={field.name}
                  type="tel"
                  value={field.state.value}
                  onBlur={() => {
                    field.handleChange(formatPhoneNumber(field.state.value))
                    field.handleBlur()
                  }}
                  onChange={(event) => {
                    setSubmissionError(undefined)
                    field.handleChange(event.target.value)
                  }}
                  autoComplete="tel"
                  aria-invalid={isInvalid}
                  className="h-12 rounded-[8px] border-[#f0c6e1] bg-white px-4 text-base text-(--marketing-ink) shadow-sm placeholder:text-(--marketing-copy)"
                  placeholder="(555) 123-4567"
                />
                {isInvalid ? <FieldError errors={normalizedErrors} /> : null}
              </Field>
            )
          }}
        </form.Field>

        <form.Field name="message">
          {(field) => {
            const normalizedErrors = normalizeFieldErrors(field.state.meta.errors as unknown[])
            const isInvalid =
              (field.state.meta.isTouched || form.state.submissionAttempts > 0) &&
              !field.state.meta.isValid

            return (
              <Field data-invalid={isInvalid || undefined}>
                <FieldLabel htmlFor="contact-message">Message</FieldLabel>
                <Textarea
                  id="contact-message"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => {
                    setSubmissionError(undefined)
                    field.handleChange(event.target.value)
                  }}
                  aria-invalid={isInvalid}
                  className="min-h-40 rounded-[8px] border-[#f0c6e1] bg-white px-4 py-4 text-base text-(--marketing-ink) shadow-sm placeholder:text-(--marketing-copy)"
                  placeholder="Tell us the occasion, date, treats, colors, drizzle style, sprinkles, and any theme details."
                />
                {isInvalid ? <FieldError errors={normalizedErrors} /> : null}
              </Field>
            )
          }}
        </form.Field>
      </FieldGroup>

      {submissionError ? <FieldError>{submissionError}</FieldError> : null}

      <div className="flex justify-end">
        <form.Subscribe selector={(state) => state.isSubmitting}>
          {(isSubmitting) => (
            <Button
              type="submit"
              className="h-12 rounded-[6px] px-6 text-xs font-black uppercase tracking-[0.1em] shadow-none [--primary:var(--marketing-gold-strong)] [--primary-foreground:var(--marketing-gold-foreground)]"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Order Inquiry'}
              <ArrowRight data-icon="inline-end" />
            </Button>
          )}
        </form.Subscribe>
      </div>
    </form>
  )
}

function MarketingContactThankYou({ message }: { message: string }) {
  return (
    <div className="flex min-h-[420px] flex-col justify-center rounded-[8px] border border-[#f0c6e1] bg-white px-6 py-10 text-center shadow-[0_16px_42px_rgba(80,52,93,0.12)] sm:px-10">
      <CheckCircle2 className="mx-auto size-14 text-(--marketing-sky)" />
      <h3 className="mt-6 font-heading text-4xl font-black uppercase tracking-[0.08em] text-(--marketing-sky)">
        Thank you
      </h3>
      <p className="mt-4 text-base leading-8 text-(--marketing-copy)">
        {message}
      </p>
    </div>
  )
}
