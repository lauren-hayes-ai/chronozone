import { NextRequest, NextResponse } from 'next/server';
import { validateApiKey, logUsage } from '@/lib/api-auth';

export async function GET(req: NextRequest) {
  const result = await validateApiKey(req);
  if (result instanceof NextResponse) return result;

  const { key, remaining } = result;

  try {
    const res = await fetch('https://worldtimeapi.org/api/timezone');
    const timezones = await res.json();
    await logUsage(key.id, '/api/v1/timezones');

    return NextResponse.json({
      data: { timezones, count: timezones.length },
      error: null,
      usage: { remaining, limit: key.daily_limit },
    });
  } catch {
    return NextResponse.json({ data: null, error: 'Internal server error' }, { status: 500 });
  }
}
