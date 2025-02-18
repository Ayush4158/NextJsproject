import {z} from 'zod'

export const verifySchemaValidation = z.object({
  code: z.string().length(6, "Verification must be 6 digits")
})