import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    
    const { name, email, phone, businessName, message } = data
    
    // Validate required fields
    if (!name || !email || !businessName || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Insert into Supabase
    const { error } = await supabase
      .from('contact_leads')
      .insert([
        {
          name,
          email,
          phone: phone || null,
          business_name: businessName,
          message,
          created_at: new Date().toISOString(),
          status: 'new'
        }
      ])
    
    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to save submission' },
        { status: 500 }
      )
    }
    
    // Send email notification (placeholder for now)
    // TODO: Integrate with Resend or SendGrid
    
    return NextResponse.json(
      { message: 'Submission received successfully' },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
