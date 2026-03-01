import { NextRequest, NextResponse } from 'next/server';
import { validateApiKey, logUsage } from '@/lib/api-auth';

export async function GET(req: NextRequest, { params }: { params: Promise<{ timezone: string }> }) {
  const result = await validateApiKey(req);
  if (result instanceof NextResponse) return result;

  const { timezone } = await params;
  const { key, remaining } = result;

  // WorldTimeAPI uses Area/Location format — the timezone param is just the first part
  // We need to get the full timezone from the URL path
  const url = new URL(req.url);
  const pathParts = url.pathname.split('/api/v1/time/');
  const fullTimezone = pathParts[1] ? decodeURIComponent(pathParts[1]) : timezone;

  try {
    const res = await fetch(`https://worldtimeapi.org/api/timezone/${fullTimezone}`);
    if (!res.ok) {
      return NextResponse.json({ data: null, error: 'Timezone not found', usage: { remaining, limit: key.daily_limit } }, { status: 404 });
    }

    const raw = await res.json();
    await logUsage(key.id, `/api/v1/time/${fullTimezone}`);

    return NextResponse.json({
      data: {
        timezone: raw.timezone,
        datetime: raw.datetime,
        utc_datetime: raw.utc_datetime,
        utc_offset: raw.utc_offset,
        dst: raw.dst,
        abbreviation: raw.abbreviation,
        day_of_week: raw.day_of_week,
        day_of_year: raw.day_of_year,
        week_number: raw.week_number,
      },
      error: null,
      usage: { remaining, limit: key.daily_limit },
    });
  } catch {
    return NextResponse.json({ data: null, error: 'Internal server error' }, { status: 500 });
  }
}
