'use client'; import { useState } from 'react'; import Card, { CardTitle } from '@/components/ui/Card'; import Badge from '@/components/ui/Badge'; import Button from '@/components/ui/Button'; import { MOCK_API_KEYS } from '@/lib/mock-data'
export default function APIPage() {
  const [showNew, setShowNew] = useState(false)
  return (<div className="space-y-6">
    <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">API Access</h2><p className="text-gray-500">MLS and API integrations</p></div><Button onClick={() => setShowNew(!showNew)}>Generate Key</Button></div>
    <Card><CardTitle>Quick Start</CardTitle>
      <div className="bg-gray-900 rounded-xl p-4 mt-3 font-mono text-sm text-green-400 overflow-x-auto">
        <p className="text-gray-500"># Search listings</p>
        <p>curl -X GET https://api.propertyhub.io/v1/listings \</p>
        <p className="pl-4">-H "Authorization: Bearer ph_prod_..."</p>
      </div></Card>
    <div className="grid grid-cols-3 gap-4">
      {[{ l: 'Rate Limit', v: '1,000 req/min', i: '⚡' }, { l: 'MLS Feed', v: 'Connected', i: '🏠' }, { l: 'Total Requests', v: '5.8M', i: '📊' }].map(r => (
        <Card key={r.l}><div className="flex items-center gap-3"><span className="text-2xl">{r.i}</span><div><p className="text-sm text-gray-500">{r.l}</p><p className="text-xl font-bold text-gray-900 dark:text-white">{r.v}</p></div></div></Card>
      ))}
    </div>
    {showNew && <Card className="border-green-200 dark:border-green-800"><h3 className="text-sm font-semibold mb-3">New API Key</h3><div className="flex gap-3"><input placeholder="Key name" className="flex-1 px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-green-500 outline-none" /><Button>Generate</Button><Button variant="ghost" onClick={() => setShowNew(false)}>Cancel</Button></div></Card>}
    <div className="space-y-3">{MOCK_API_KEYS.map(k => <Card key={k.id}><div className="flex items-center justify-between">
      <div className="flex items-center gap-4"><div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-lg">🔑</div>
        <div><div className="flex items-center gap-2"><p className="text-sm font-semibold text-gray-900 dark:text-white">{k.name}</p><Badge variant={k.status === 'active' ? 'success' : 'default'} dot>{k.status}</Badge></div><p className="text-xs text-gray-500 font-mono">{k.prefix}</p></div></div>
      <div className="text-right text-sm text-gray-500"><p>{k.requests.toLocaleString()} requests</p><p className="text-xs text-gray-400">Last: {k.lastUsed}</p></div>
    </div></Card>)}</div>
  </div>)
}
