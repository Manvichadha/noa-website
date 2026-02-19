import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database types for type safety
export interface ContactLead {
  id?: string
  created_at?: string
  name: string
  email: string
  company?: string
  package_interest?: string
  message: string
  status?: 'new' | 'contacted' | 'qualified' | 'closed'
}

export interface QuizResult {
  id?: string
  created_at?: string
  answers: Record<string, any>
  result_package: string
  email?: string
}

export interface NewsletterSubscriber {
  id?: string
  created_at?: string
  email: string
  source: string
}
