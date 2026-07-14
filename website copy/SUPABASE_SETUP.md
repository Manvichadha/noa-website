# Supabase Database Setup for BLEUKEI Website

## Tables to Create

Run these SQL commands in your Supabase SQL Editor:

### 1. Contact Leads Table
```sql
create table contact_leads (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  phone text,
  business_name text not null,
  message text not null,
  status text default 'new',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table contact_leads enable row level security;

-- Allow anonymous inserts
create policy "Allow anonymous insert" on contact_leads
  for insert to anon with check (true);

-- Create index for faster queries
create index idx_contact_leads_created_at on contact_leads(created_at desc);
```

### 2. Quiz Results Table
```sql
create table quiz_results (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  answers jsonb not null,
  recommended_package text not null,
  contacted boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table quiz_results enable row level security;

-- Allow anonymous inserts
create policy "Allow anonymous insert" on quiz_results
  for insert to anon with check (true);

-- Create index
create index idx_quiz_results_created_at on quiz_results(created_at desc);
```

### 3. Newsletter Subscribers Table
```sql
create table newsletter_subscribers (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  active boolean default true,
  subscribed_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unsubscribed_at timestamp with time zone
);

-- Enable RLS
alter table newsletter_subscribers enable row level security;

-- Allow anonymous inserts
create policy "Allow anonymous insert" on newsletter_subscribers
  for insert to anon with check (true);

-- Create index
create index idx_newsletter_email on newsletter_subscribers(email);
```

## Environment Variables

Add these to your Cloudflare Pages environment variables (Settings → Environment variables):

```
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-project-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-supabase-service-role-key>
```

Find these in: Supabase dashboard → Project Settings → API

## Testing

After creating the tables, test the forms:
1. Contact form submits to `contact_leads` table
2. Quiz form submits to `quiz_results` table  
3. Newsletter form submits to `newsletter_subscribers` table

Check the Supabase Table Editor to verify data is being stored.
