export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">API Documentation</h1>
      <p className="text-gray-400 mb-10">Everything you need to integrate ChronoZone into your application.</p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-amber-400">Authentication</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <p className="text-sm text-gray-300 mb-4">All API requests require an API key via the <code className="bg-gray-800 px-2 py-0.5 rounded text-amber-300">X-API-Key</code> header.</p>
          <pre className="bg-gray-800 rounded-lg p-4 text-sm overflow-x-auto"><code className="text-gray-300">{`curl -H "X-API-Key: cz_your_key_here" \\
  https://chronozone.vercel.app/api/v1/time/America/New_York`}</code></pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-amber-400">Base URL</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <code className="text-lg font-mono text-amber-300">https://chronozone.vercel.app/api/v1</code>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 text-amber-400">Endpoints</h2>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-500/20 text-green-400 text-xs font-mono px-2 py-1 rounded">GET</span>
            <code className="font-mono text-sm">/api/v1/time/{"{timezone}"}</code>
          </div>
          <p className="text-sm text-gray-300 mb-4">Get current time for a specific timezone (IANA format, use slashes).</p>
          <pre className="bg-gray-800 rounded-lg p-4 text-sm overflow-x-auto"><code className="text-gray-300">{`{
  "data": {
    "timezone": "America/New_York",
    "datetime": "2026-02-28T20:47:00-05:00",
    "utc_datetime": "2026-03-01T01:47:00+00:00",
    "utc_offset": "-05:00",
    "dst": false,
    "abbreviation": "EST",
    "day_of_week": 6,
    "day_of_year": 59,
    "week_number": 9
  },
  "error": null,
  "usage": { "remaining": 49, "limit": 50 }
}`}</code></pre>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-500/20 text-green-400 text-xs font-mono px-2 py-1 rounded">GET</span>
            <code className="font-mono text-sm">/api/v1/time/now</code>
          </div>
          <p className="text-sm text-gray-300">Get current UTC time.</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-500/20 text-green-400 text-xs font-mono px-2 py-1 rounded">GET</span>
            <code className="font-mono text-sm">/api/v1/timezones</code>
          </div>
          <p className="text-sm text-gray-300">List all available IANA timezones.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-amber-400">Error Codes</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-gray-800"><th className="text-left p-4 text-gray-400">Status</th><th className="text-left p-4 text-gray-400">Meaning</th></tr></thead>
            <tbody className="divide-y divide-gray-800">
              <tr><td className="p-4 font-mono">401</td><td className="p-4 text-gray-300">Invalid or missing API key</td></tr>
              <tr><td className="p-4 font-mono">404</td><td className="p-4 text-gray-300">Timezone not found</td></tr>
              <tr><td className="p-4 font-mono">429</td><td className="p-4 text-gray-300">Daily rate limit exceeded</td></tr>
              <tr><td className="p-4 font-mono">500</td><td className="p-4 text-gray-300">Internal server error</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-amber-400">Rate Limits</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-gray-800"><th className="text-left p-4 text-gray-400">Plan</th><th className="text-left p-4 text-gray-400">Daily Limit</th><th className="text-left p-4 text-gray-400">API Keys</th></tr></thead>
            <tbody className="divide-y divide-gray-800">
              <tr><td className="p-4">Free</td><td className="p-4 text-gray-300">50 / day</td><td className="p-4 text-gray-300">1</td></tr>
              <tr><td className="p-4">Starter</td><td className="p-4 text-gray-300">2,000 / day</td><td className="p-4 text-gray-300">5</td></tr>
              <tr><td className="p-4">Pro</td><td className="p-4 text-gray-300">Unlimited</td><td className="p-4 text-gray-300">20</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
