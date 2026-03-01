import Link from "next/link";

const S = {
  page: { background: '#030712', minHeight: '100vh', color: '#f1f5f9', fontFamily: 'Inter, system-ui, sans-serif' } as React.CSSProperties,
  section: { maxWidth: 1100, margin: '0 auto', padding: '80px 32px' } as React.CSSProperties,
  badge: { display: 'inline-block', padding: '4px 14px', borderRadius: 999, background: 'rgba(251,191,36,0.1)', color: '#fcd34d', fontSize: 13, border: '1px solid rgba(251,191,36,0.2)', marginBottom: 24 } as React.CSSProperties,
  h1: { fontSize: 52, fontWeight: 700, lineHeight: 1.15, margin: '0 0 20px', color: '#ffffff' } as React.CSSProperties,
  lead: { fontSize: 19, color: '#94a3b8', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.65 } as React.CSSProperties,
  btnPrimary: { display: 'inline-block', background: '#d97706', color: '#ffffff', padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none' } as React.CSSProperties,
  btnSecondary: { display: 'inline-block', border: '1px solid #334155', color: '#e2e8f0', padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none' } as React.CSSProperties,
  codeBox: { background: '#0f172a', border: '1px solid #1e293b', borderRadius: 10, padding: '24px', marginTop: 48, maxWidth: 660, marginLeft: 'auto', marginRight: 'auto', textAlign: 'left' } as React.CSSProperties,
  pre: { fontSize: 13, fontFamily: 'ui-monospace, monospace', whiteSpace: 'pre', overflowX: 'auto', margin: 0, lineHeight: 1.6 } as React.CSSProperties,
  grid4: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 } as React.CSSProperties,
  grid3: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 } as React.CSSProperties,
  card: { background: '#0f172a', border: '1px solid #1e293b', borderRadius: 10, padding: '24px' } as React.CSSProperties,
};

export default function Home() {
  return (
    <div style={S.page}>
      {/* Hero */}
      <div style={{ ...S.section, textAlign: 'center' }}>
        <div style={S.badge}>Now in public beta</div>
        <h1 style={S.h1}>Time Zone &<br />World Clock API</h1>
        <p style={S.lead}>
          Current time, DST info, and UTC offsets for any timezone.<br />Built for scheduling apps, global SaaS, and agent orchestration.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <Link href="/dashboard" style={S.btnPrimary}>Get Started Free</Link>
          <Link href="/docs" style={S.btnSecondary}>View Docs →</Link>
        </div>
        <div style={S.codeBox}>
          <div style={{ fontSize: 12, color: '#475569', marginBottom: 8 }}>Try it</div>
          <pre style={{ ...S.pre, color: '#94a3b8' }}>{`curl -H "X-API-Key: cz_your_key_here" \\
  https://chronozone-indol.vercel.app/api/v1/time/America/New_York`}</pre>
          <pre style={{ ...S.pre, color: '#fcd34d', marginTop: 16 }}>{`{
  "data": {
    "timezone": "America/New_York",
    "datetime": "2026-03-01T09:00:00-05:00",
    "utc_offset": "-05:00",
    "dst": false,
    "abbreviation": "EST"
  },
  "usage": { "remaining": 49, "limit": 50 }
}`}</pre>
        </div>
      </div>

      {/* Features */}
      <div style={{ ...S.section, paddingTop: 0 }}>
        <div style={{ fontSize: 30, fontWeight: 700, color: '#ffffff', marginBottom: 12, textAlign: 'center' }}>Everything you need</div>
        <div style={{ fontSize: 15, color: '#64748b', textAlign: 'center', marginBottom: 48 }}>Simple API, comprehensive timezone data.</div>
        <div style={S.grid4}>
          {[
            { icon: '🌐', title: 'Any Timezone', desc: 'Current time for 300+ IANA timezones worldwide.' },
            { icon: '🔄', title: 'DST Aware', desc: 'Automatic daylight saving time detection and UTC offset.' },
            { icon: '⏱️', title: 'Time Conversion', desc: 'Convert datetime between any two timezones instantly.' },
            { icon: '🔌', title: 'Simple Integration', desc: 'RESTful JSON API with API key auth. Ship in minutes.' },
          ].map(f => (
            <div key={f.title} style={S.card}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 6 }}>{f.title}</div>
              <div style={{ fontSize: 14, color: '#64748b', lineHeight: 1.55 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div style={{ ...S.section, paddingTop: 0 }}>
        <div style={{ fontSize: 30, fontWeight: 700, color: '#ffffff', marginBottom: 12, textAlign: 'center' }}>Simple, transparent pricing</div>
        <div style={{ fontSize: 15, color: '#64748b', textAlign: 'center', marginBottom: 48 }}>Start free, upgrade when you need more.</div>
        <div style={S.grid3}>
          {[
            { name: 'Free', price: '$0', period: '/forever', features: ['50 requests/day', '1 API key', 'Community support'], cta: 'Get Started', highlight: false },
            { name: 'Starter', price: '$9', period: '/month', features: ['2,000 requests/day', '5 API keys', 'Email support', 'Conversion endpoint'], cta: 'Start Trial', highlight: true },
            { name: 'Pro', price: '$29', period: '/month', features: ['Unlimited requests', '20 API keys', 'Priority support', 'SLA guarantee', 'Batch queries'], cta: 'Go Pro', highlight: false },
          ].map(t => (
            <div key={t.name} style={{ ...S.card, border: t.highlight ? '1px solid #d97706' : '1px solid #1e293b', background: t.highlight ? '#1c1007' : '#0f172a' }}>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#e2e8f0', marginBottom: 8 }}>{t.name}</div>
              <div style={{ fontSize: 38, fontWeight: 700, color: '#ffffff', marginBottom: 4 }}>{t.price}<span style={{ fontSize: 14, color: '#64748b', fontWeight: 400 }}>{t.period}</span></div>
              <div style={{ margin: '20px 0' }}>
                {t.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#94a3b8', marginBottom: 8 }}>
                    <span style={{ color: '#fbbf24' }}>✓</span>{f}
                  </div>
                ))}
              </div>
              <Link href="/dashboard" style={{ display: 'block', textAlign: 'center', padding: '10px', borderRadius: 8, background: t.highlight ? '#d97706' : 'transparent', border: t.highlight ? 'none' : '1px solid #334155', color: '#ffffff', textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid #1e293b' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#475569' }}>
          <span>© 2026 ChronoZone. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/docs" style={{ color: '#475569', textDecoration: 'none' }}>Docs</Link>
            <Link href="/#pricing" style={{ color: '#475569', textDecoration: 'none' }}>Pricing</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
