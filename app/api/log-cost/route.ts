import { logCost } from '@/lib/cost-tracker';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { taskName, model, tokensIn, tokensOut, cost } = await request.json();

    if (!taskName || !model || !tokensIn || !tokensOut || !cost) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }

    await logCost(taskName, model, tokensIn, tokensOut, cost);

    return NextResponse.json({ message: 'Cost logged successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error logging cost:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}