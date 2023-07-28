import { formSchema } from './formSchema'
import { DocumentData } from 'firebase/firestore'
import { z } from 'zod'

export type formData = z.infer<typeof formSchema>

export type Data = Omit<z.infer<typeof formSchema>, 'description'> & {
  prompt: string
  uid: string
}

export type PlaceholderObj = {
  [key: string]: string
}

export type InsightProps = {
  count: number
  usersList: DocumentData[]
}
