import { formSchema } from './formSchema'
import { z } from 'zod'

export type formData = z.infer<typeof formSchema>

export type Data = Omit<z.infer<typeof formSchema>, 'description'> & {
  prompt: string
}

export type Placeholder = {
  [key: string]: string
}
