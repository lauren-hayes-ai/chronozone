import Link from "next/link";

const features = [
  { title: "Any Timezone", desc: "Current time for 300+ IANA timezones worldwide.", icon: "🌐" },
  { title: "DST Aware", desc: "Automatic daylight saving time detection and UTC offset.", icon: "🔄" },
  { title: "Time Conversion", desc: "Convert datetime between any two timezones instantly.", icon: "⏱️" },
  { title: "Simple Integration", desc: "RESTful JSON API with API key auth. Ship in minutes.", icon: "🔌" },
];

const tiers = [
  { name: "Free", price: "$0", period: "/forever", features: ["50 requests/day", "1 API key", "Community support"], cta: "Get Started", highlight: false },
  { name: "Starter", price: "$9", period: "/month", features: ["2,000 requests/day", "5 API keys", "Email support", "Conversion endpoint"], cta: "Start Trial", highlight: true },
  { name: "Pro", price: "$29", period: "/month", features: ["Unlimited requests", "20 API keys", "Priority support", "SLA guarantee", "Batch queries"], cta: "Go Pro", highlight: false },
];

export default function Home() {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-4 py-24 text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm mb-6 border border-amber-500/20">
          Now in public beta
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Time Zone &<br />World Clock API
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Current time, DST info, and UTC offsets for any timezone. Built for scheduling apps, global SaaS, and agent orchestration.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/dashboard" className="bg-amber-600 hover:bg-amber-500 px-6 py-3 rounded-lg font-medium transition">
            Get Started Free
          </Link>
          <Link href="/docs" className="border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-lg font-medium transition">
            View Docs →
          </Link>
        </div>
        <div className="mt-16 max-w-2xl mx-auto text-left bg-gray-900 rounded-xl border border-gray-800 p-6 overflow-x-auto">
          <div className="text-sm text-gray-500 mb-2">Try it</div>
          <pre className="text-sm"><code className="text-gray-300">{`curl -H "X-API-Key: cz_your_key_here" \\
  https://chronozone.vercel.app/api/v1/time/America/New_York`}</code></pre>
          <pre className="text-sm mt-4"><code className="text-amber-300">{`{
  "data": {
    "timezone": "America/New_York",
    "datetime": "2026-02-28T20:47:00-05:00",
    "utc_offset": "-05:00",
    "dst": false,
    "abbreviation": "EST",
    "day_of_week": 6
  },
  "usage": { "remaining": 49, "limit": 50 }
}`}</code></pre>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Everything you need</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-amber-500/30 transition">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Simple, transparent pricing</h2>
        <p className="text-gray-400 text-center mb-12">Start free, upgrade when you need more.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-xl p-8 border ${t.highlight ? 'border-amber-500 bg-amber-500/5' : 'border-gray-800 bg-gray-900'}`}>
              <h3 className="text-lg font-semibold mb-2">{t.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{t.price}</span>
                <span className="text-gray-400">{t.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-amber-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/dashboard" className={`block text-center py-2.5 rounded-lg font-medium transition ${t.highlight ? 'bg-amber-600 hover:bg-amber-500' : 'border border-gray-700 hover:border-gray-500 text-white'}`}>
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-8 flex justify-between items-center text-sm text-gray-500">
          <span>© 2026 ChronoZone. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/docs" className="hover:text-white transition">Docs</Link>
            <Link href="/#pricing" className="hover:text-white transition">Pricing</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
