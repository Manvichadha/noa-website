-- Supabase Schema for BLEUKEI Website
-- Run this in Supabase SQL Editor

-- Cost tracking table
CREATE TABLE IF NOT EXISTS cost_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  task_id TEXT NOT NULL,
  task_type TEXT NOT NULL,
  model TEXT NOT NULL,
  input_tokens INTEGER,
  output_tokens INTEGER,
  cost_usd DECIMAL(10, 6),
  session_id TEXT,
  metadata JSONB
);

-- Client sites table (for multi-tenant system)
CREATE TABLE IF NOT EXISTS client_sites (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  subdomain TEXT UNIQUE NOT NULL,
  business_name TEXT NOT NULL,
  owner_email TEXT NOT NULL,
  plan_type TEXT NOT NULL,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  settings JSONB DEFAULT '{}'::jsonb
);

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  business_name TEXT,
  package_interest TEXT,
  message TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'new'
);

-- Quiz results
CREATE TABLE IF NOT EXISTS quiz_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT,
  answers JSONB NOT NULL,
  result_type TEXT NOT NULL,
  recommendations JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_cost_logs_timestamp ON cost_logs(timestamp);
CREATE INDEX IF NOT EXISTS idx_cost_logs_task_id ON cost_logs(task_id);
CREATE INDEX IF NOT EXISTS idx_client_sites_subdomain ON client_sites(subdomain);

-- Enable Row Level Security (RLS)
ALTER TABLE cost_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_sites ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;

-- Create policies (allow all for now, restrict later)
CREATE POLICY "Allow all" ON cost_logs FOR ALL USING (true);
CREATE POLICY "Allow all" ON client_sites FOR ALL USING (true);
CREATE POLICY "Allow all" ON contact_submissions FOR ALL USING (true);
CREATE POLICY "Allow all" ON quiz_results FOR ALL USING (true);
