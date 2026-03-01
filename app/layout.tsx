import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ChronoZone — Time Zone & World Clock API",
  description: "Time zone data, current time, DST info, and UTC offsets for any timezone.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#030712', color: '#f1f5f9', fontFamily: 'Inter, system-ui, sans-serif' }}>
        <nav style={{ borderBottom: '1px solid #1e293b', background: 'rgba(3,7,18,0.95)', position: 'sticky', top: 0, zIndex: 50 }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" style={{ fontSize: 18, fontWeight: 700, color: '#fbbf24', textDecoration: 'none' }}>ChronoZone</Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <Link href="/docs" style={{ fontSize: 14, color: '#64748b', textDecoration: 'none' }}>Docs</Link>
              <Link href="/#pricing" style={{ fontSize: 14, color: '#64748b', textDecoration: 'none' }}>Pricing</Link>
              <Link href="/dashboard" style={{ fontSize: 14, color: '#64748b', textDecoration: 'none' }}>Dashboard</Link>
              <span style={{ fontSize: 14, color: '#475569', padding: '7px 18px', background: '#1e293b', borderRadius: 7 }}>Stytch pending</span>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
