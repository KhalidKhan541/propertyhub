import Link from 'next/link'
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2"><div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold">🏠</div><span className="text-xl font-bold text-gray-900">PropertyHub</span></div>
        <div className="flex items-center gap-4"><Link href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900 font-medium">Demo</Link><Link href="/dashboard" className="px-5 py-2.5 bg-green-600 text-white rounded-xl text-sm font-medium">Get Started →</Link></div>
      </nav>
      <section className="text-center px-6 pt-24 pb-28 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">Sell more homes,<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">close faster</span></h1>
        <p className="text-xl text-gray-500 mt-6 max-w-2xl mx-auto">Complete real estate platform with listings, lead management, tours, offers, agent management, and analytics.</p>
        <div className="flex items-center justify-center gap-4 mt-10"><Link href="/dashboard" className="px-8 py-3.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold shadow-lg">Start Free Trial →</Link><Link href="#pricing" className="px-8 py-3.5 border border-gray-200 rounded-xl font-semibold text-gray-700">View Pricing</Link></div>
      </section>
      <section className="px-6 py-20 bg-gray-50"><div className="max-w-6xl mx-auto text-center"><h2 className="text-3xl font-bold text-gray-900">Everything you need to sell</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[{ i: '🏠', t: 'Listings' }, { i: '🎯', t: 'Lead CRM' }, { i: '🗓️', t: 'Tour Scheduling' }, { i: '🤝', t: 'Offers' }, { i: '👨‍💼', t: 'Agent Management' }, { i: '🏘️', t: 'Neighborhoods' }, { i: '📊', t: 'Analytics' }, { i: '💵', t: 'Commissions' }].map(f => (
            <div key={f.t} className="p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all text-center"><span className="text-3xl">{f.i}</span><h3 className="text-sm font-semibold text-gray-900 mt-3">{f.t}</h3></div>
          ))}</div></div>
      </section>
      <section className="px-6 py-24" id="pricing"><div className="max-w-5xl mx-auto text-center"><h2 className="text-3xl font-bold text-gray-900">Simple pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {[{ n: 'Starter', p: 29, f: ['10 listings', '1 agent'] }, { n: 'Pro', p: 79, f: ['50 listings', '5 agents', 'MLS'], pop: false }, { n: 'Business', p: 149, f: ['Unlimited', '20 agents', 'API'], pop: true }, { n: 'Enterprise', p: 399, f: ['Everything', 'SSO', 'SLA'] }].map(p => (
            <div key={p.n} className={`p-6 rounded-2xl border text-left ${p.pop ? 'border-green-500 shadow-lg' : 'border-gray-200'} relative`}>
              {p.pop && <div className="absolute -top-3 left-6 px-3 py-0.5 bg-green-600 text-white text-xs font-semibold rounded-full">Popular</div>}
              <h3 className="text-base font-bold text-gray-900">{p.n}</h3>
              <p className="text-3xl font-bold mt-2">${p.p}<span className="text-sm text-gray-400">/mo</span></p>
              <ul className="mt-4 space-y-2">{p.f.map(f => <li key={f} className="flex items-center gap-2 text-xs text-gray-600"><span className="text-emerald-500">✓</span>{f}</li>)}</ul>
              <Link href="/dashboard" className={`block mt-5 text-center py-2.5 rounded-xl text-sm font-medium ${p.pop ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>Get Started</Link>
            </div>
          ))}</div></div>
      </section>
      <footer className="border-t border-gray-100 px-6 py-8 text-center text-sm text-gray-400"><p>© 2026 PropertyHub. Built by <a href="https://github.com/KhalidKhan541" className="text-green-600">KhalidKhan541</a></p></footer>
    </div>
  )
}
