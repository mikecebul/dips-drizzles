import { z } from 'zod'

const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

export const formatPhoneNumber = (value: string) => {
  const trimmedValue = value.trim()

  if (!phonePattern.test(trimmedValue)) {
    return trimmedValue
  }

  return trimmedValue.replace(phonePattern, '($1) $2-$3')
}

export const contactFormSchema = z.object({
  email: z.string().trim().email('Enter a valid email address.'),
  message: z
    .string()
    .trim()
    .min(10, 'Share a little more detail about your order.')
    .max(800, 'Keep the message under 800 characters.'),
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your full name.')
    .max(80, 'Please keep your name under 80 characters.'),
  phone: z
    .string()
    .trim()
    .regex(phonePattern, 'Enter a valid phone number.')
    .transform(formatPhoneNumber),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
