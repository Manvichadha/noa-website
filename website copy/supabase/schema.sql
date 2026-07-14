-- Supabase Schema for BLEUKEI Website
-- Run this in Supabase SQL Editor

-- Contact Form Submissions
CREATE TABLE IF NOT EXISTS contact_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  package_interest TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed'))
);

-- Quiz Results
CREATE TABLE IF NOT EXISTS quiz_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  answers JSONB NOT NULL,
  result_package TEXT NOT NULL,
  email TEXT
);

-- Newsletter Subscribers
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email TEXT UNIQUE NOT NULL,
  source TEXT DEFAULT 'website'
);

-- Row Level Security (RLS) Policies
ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for forms)
CREATE POLICY "Allow anonymous inserts" ON contact_leads
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts" ON quiz_results
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts" ON newsletter_subscribers
  FOR INSERT TO anon WITH CHECK (true);

-- Only authenticated users can read
CREATE POLICY "Allow authenticated read" ON contact_leads
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated read" ON quiz_results
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated read" ON newsletter_subscribers
  FOR SELECT TO authenticated USING (true);
