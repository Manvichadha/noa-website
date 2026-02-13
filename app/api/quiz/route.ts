import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    
    const { email, answers, package: recommendedPackage } = data
    
    // Validate required fields
    if (!email || !answers || !recommendedPackage) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Insert into Supabase
    const { error } = await supabase
      .from('quiz_results')
      .insert([
        {
          email,
          answers,
          recommended_package: recommendedPackage,
          created_at: new Date().toISOString(),
          contacted: false
        }
      ])
    
    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to save quiz result' },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { message: 'Quiz submitted successfully' },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Quiz form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
