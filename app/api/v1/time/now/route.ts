import { NextRequest, NextResponse } from 'next/server';
import { validateApiKey, logUsage } from '@/lib/api-auth';

export async function GET(req: NextRequest) {
  const result = await validateApiKey(req);
  if (result instanceof NextResponse) return result;

  const { key, remaining } = result;

  try {
    const res = await fetch('https://worldtimeapi.org/api/timezone/Etc/UTC');
    const raw = await res.json();
    await logUsage(key.id, '/api/v1/time/now');

    return NextResponse.json({
      data: {
        timezone: 'Etc/UTC',
        datetime: raw.datetime,
        utc_datetime: raw.utc_datetime,
        utc_offset: '+00:00',
        dst: false,
        abbreviation: 'UTC',
        day_of_week: raw.day_of_week,
        day_of_year: raw.day_of_year,
      },
      error: null,
      usage: { remaining, limit: key.daily_limit },
    });
  } catch {
    return NextResponse.json({ data: null, error: 'Internal server error' }, { status: 500 });
  }
}
