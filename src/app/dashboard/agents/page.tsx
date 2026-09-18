import Card from '@/components/ui/Card'; import Avatar from '@/components/ui/Avatar'; import { MOCK_AGENTS } from '@/lib/mock-data'; import { formatCurrency, formatNumber } from '@/lib/utils'
export default function AgentsPage() {
  return (<div className="space-y-6">
    <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Agents</h2><p className="text-gray-500">{MOCK_AGENTS.length} agents</p></div>
      <button className="px-5 py-2.5 bg-green-600 text-white rounded-xl text-sm font-medium">+ Invite Agent</button></div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {MOCK_AGENTS.map(a => <Card key={a.id} hover>
        <div className="flex items-start gap-4"><Avatar name={a.name} size="lg" />
          <div className="flex-1 min-w-0"><h3 className="text-base font-semibold text-gray-900 dark:text-white">{a.name}</h3><p className="text-xs text-gray-500">{a.email}</p><p className="text-xs text-gray-400 mt-0.5">{a.specialization}</p></div></div>
        <div className="grid grid-cols-3 gap-4 mt-4 pt-3 border-t border-gray-50 dark:border-gray-800/50 text-center">
          <div><p className="text-lg font-bold text-gray-900 dark:text-white">{a.listings}</p><p className="text-xs text-gray-400">Listings</p></div>
          <div><p className="text-lg font-bold text-green-600">{a.sales}</p><p className="text-xs text-gray-400">Sales</p></div>
          <div><p className="text-lg font-bold text-gray-900 dark:text-white">{formatCurrency(a.revenue)}</p><p className="text-xs text-gray-400">Revenue</p></div>
        </div>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50 dark:border-gray-800/50">
          <span className="text-xs text-gray-400">⭐ {a.rating} · {a.reviews} reviews</span><span className="text-xs text-gray-400">Avg {a.avgDaysOnMarket} days</span>
        </div>
      </Card>)}
    </div>
  </div>)
}
