'use client'; import { useState } from 'react'; import Card from '@/components/ui/Card'; import Badge from '@/components/ui/Badge'; import { MOCK_LEADS } from '@/lib/mock-data'; import { cn } from '@/lib/utils'
const statusVariant: Record<string, 'info' | 'edu' | 'warning' | 'prop' | 'success' | 'danger'> = { New: 'info', Contacted: 'edu', Qualified: 'prop', Negotiating: 'warning', Converted: 'success', Lost: 'danger' }
export default function LeadsPage() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? MOCK_LEADS : MOCK_LEADS.filter(l => l.status.toLowerCase() === filter)
  return (<div className="space-y-6">
    <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Leads</h2><p className="text-gray-500">{MOCK_LEADS.length} leads in pipeline</p></div></div>
    <div className="grid grid-cols-4 gap-4">
      <Card><p className="text-sm text-gray-500">Total Leads</p><p className="text-2xl font-bold text-green-600 mt-1">{MOCK_LEADS.length}</p></Card>
      <Card><p className="text-sm text-gray-500">Qualified</p><p className="text-2xl font-bold text-blue-600 mt-1">{MOCK_LEADS.filter(l => l.status === 'Qualified').length}</p></Card>
      <Card><p className="text-sm text-gray-500">Negotiating</p><p className="text-2xl font-bold text-amber-600 mt-1">{MOCK_LEADS.filter(l => l.status === 'Negotiating').length}</p></Card>
      <Card><p className="text-sm text-gray-500">Converted</p><p className="text-2xl font-bold text-emerald-600 mt-1">{MOCK_LEADS.filter(l => l.status === 'Converted').length}</p></Card>
    </div>
    <div className="flex gap-2 flex-wrap">{['all', 'new', 'contacted', 'qualified', 'negotiating', 'converted', 'lost'].map(s => <button key={s} onClick={() => setFilter(s)} className={cn('px-3 py-1.5 rounded-lg text-sm font-medium', filter === s ? 'bg-green-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400')}>{s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}</button>)}</div>
    <Card padding={false}><div className="overflow-x-auto"><table className="w-full">
      <thead><tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50">
        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Lead</th>
        <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Budget</th>
        <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Score</th>
        <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Agent</th>
        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Source</th>
      </tr></thead>
      <tbody>{filtered.map(l => <tr key={l.id} className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <td className="px-5 py-3.5"><p className="text-sm font-medium text-gray-900 dark:text-white">{l.name}</p><p className="text-xs text-gray-400">{l.email}</p></td>
        <td className="px-5 py-3.5 text-right text-sm font-semibold">${(l.budget / 1e6).toFixed(1)}M</td>
        <td className="px-5 py-3.5 text-center"><div className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${l.score >= 90 ? 'bg-green-100 text-green-700' : l.score >= 70 ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}`}>{l.score}</div></td>
        <td className="px-5 py-3.5 text-center"><Badge variant={statusVariant[l.status]}>{l.status}</Badge></td>
        <td className="px-5 py-3.5 text-sm text-gray-500">{l.agent}</td>
        <td className="px-5 py-3.5 text-sm text-gray-400">{l.source}</td>
      </tr>)}</tbody>
    </table></div></Card>
  </div>)
}
