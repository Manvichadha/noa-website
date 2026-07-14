import { createClient } from '@supabase/supabase-js'

// Server-side Supabase client (uses service role for full access)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey)

interface CostLog {
  timestamp: string
  task_id: string
  task_type: string
  model: string
  input_tokens: number
  output_tokens: number
  cost_usd: number
  session_id?: string
}

export async function logCost(
  taskName: string,
  model: string,
  tokensIn: number,
  tokensOut: number,
  cost: number,
  taskType: string = 'general',
  sessionId?: string
): Promise<void> {
  const logEntry: CostLog = {
    timestamp: new Date().toISOString(),
    task_id: taskName,
    task_type: taskType,
    model: model,
    input_tokens: tokensIn,
    output_tokens: tokensOut,
    cost_usd: cost,
    session_id: sessionId || 'default'
  }

  const { error } = await supabaseAdmin
    .from('cost_logs')
    .insert(logEntry)

  if (error) {
    console.error('Failed to log cost to Supabase:', error)
    throw error
  }
}

export async function getTodayCosts(): Promise<{ total: number; count: number }> {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const { data, error } = await supabaseAdmin
    .from('cost_logs')
    .select('cost_usd')
    .gte('timestamp', today.toISOString())

  if (error) {
    console.error('Failed to fetch today costs:', error)
    return { total: 0, count: 0 }
  }

  const total = data?.reduce((sum, log) => sum + (log.cost_usd || 0), 0) || 0
  return { total, count: data?.length || 0 }
}

export async function getRecentTasks(limit: number = 10): Promise<CostLog[]> {
  const { data, error } = await supabaseAdmin
    .from('cost_logs')
    .select('*')
    .order('timestamp', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Failed to fetch recent tasks:', error)
    return []
  }

  return data || []
}
