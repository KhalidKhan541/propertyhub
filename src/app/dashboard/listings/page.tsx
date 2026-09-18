'use client'; import { useState } from 'react'; import Card from '@/components/ui/Card'; import Badge from '@/components/ui/Badge'; import Button from '@/components/ui/Button'; import { MOCK_PROPERTIES } from '@/lib/mock-data'; import { formatCurrency, cn } from '@/lib/utils'
const statusVariant: Record<string, 'success' | 'warning' | 'prop' | 'danger' | 'default'> = { Active: 'success', Pending: 'warning', Sold: 'prop', Withdrawn: 'danger', Expired: 'default' }
export default function ListingsPage() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? MOCK_PROPERTIES : MOCK_PROPERTIES.filter(p => p.status.toLowerCase() === filter)
  return (<div className="space-y-6">
    <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Listings</h2><p className="text-gray-500">{MOCK_PROPERTIES.length} properties</p></div><Button variant="gradient">+ Add Listing</Button></div>
    <div className="grid grid-cols-4 gap-4">
      <Card><p className="text-sm text-gray-500">Active</p><p className="text-2xl font-bold text-green-600 mt-1">{MOCK_PROPERTIES.filter(p => p.status === 'Active').length}</p></Card>
      <Card><p className="text-sm text-gray-500">Pending</p><p className="text-2xl font-bold text-amber-600 mt-1">{MOCK_PROPERTIES.filter(p => p.status === 'Pending').length}</p></Card>
      <Card><p className="text-sm text-gray-500">Total Value</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{formatCurrency(MOCK_PROPERTIES.reduce((s, p) => s + p.price, 0))}</p></Card>
      <Card><p className="text-sm text-gray-500">Avg Price</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{formatCurrency(Math.round(MOCK_PROPERTIES.reduce((s, p) => s + p.price, 0) / MOCK_PROPERTIES.length))}</p></Card>
    </div>
    <div className="flex gap-2">{['all', 'active', 'pending', 'sold'].map(s => <button key={s} onClick={() => setFilter(s)} className={cn('px-3 py-1.5 rounded-lg text-sm font-medium', filter === s ? 'bg-green-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400')}>{s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}</button>)}</div>
    <div className="space-y-3">{filtered.map(p => <Card key={p.id} hover>
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-500/20 dark:to-emerald-500/20 rounded-xl flex items-center justify-center text-3xl shrink-0">{p.image}</div>
        <div className="flex-1 min-w-0"><div className="flex items-center gap-2"><h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">{p.title}</h3><Badge variant={statusVariant[p.status]}>{p.status}</Badge></div>
          <p className="text-xs text-gray-500 mt-1">{p.address}</p>
          <div className="flex gap-4 mt-2 text-xs text-gray-500"><span>{p.beds} bed · {p.baths} bath · {p.sqft.toLocaleString()} sqft</span><span>{p.beds} days on market</span></div>
          <div className="flex gap-4 mt-1 text-xs text-gray-500"><span>👁️ {p.views.toLocaleString()}</span><span>❤️ {p.saves}</span><span>🤝 {p.offers} offers</span></div>
        </div>
        <div className="text-right"><p className="text-xl font-bold text-green-600">{formatCurrency(p.price)}</p><p className="text-xs text-gray-400 mt-1">Agent: {p.agent}</p></div>
      </div>
    </Card>)}</div>
  </div>)
}
