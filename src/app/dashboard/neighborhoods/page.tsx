import Card, { CardTitle } from '@/components/ui/Card'; import Badge from '@/components/ui/Badge'; import { MOCK_NEIGHBORHOODS } from '@/lib/mock-data'; import { formatCurrency, formatNumber } from '@/lib/utils'
const trendIcon: Record<string, string> = { up: '📈', stable: '➡️', down: '📉' }
export default function NeighborhoodsPage() {
  return (<div className="space-y-6">
    <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Neighborhoods</h2><p className="text-gray-500">{MOCK_NEIGHBORHOODS.length} markets tracked</p></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {MOCK_NEIGHBORHOODS.map(n => <Card key={n.id} hover glow>
        <div className="flex items-center justify-between mb-3"><div><h3 className="text-base font-semibold text-gray-900 dark:text-white">{n.name}</h3><p className="text-xs text-gray-500">{n.city}</p></div>
          <div className="flex items-center gap-2"><span className="text-lg">{trendIcon[n.trend]}</span><Badge variant={n.trend === 'up' ? 'success' : n.trend === 'down' ? 'danger' : 'default'}>{n.trend}</Badge></div></div>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg"><p className="text-lg font-bold text-green-600">{formatCurrency(n.medianPrice)}</p><p className="text-xs text-gray-400">Median Price</p></div>
          <div className="p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg"><p className="text-lg font-bold text-gray-900 dark:text-white">{n.avgDaysOnMarket}</p><p className="text-xs text-gray-400">Avg Days</p></div>
          <div className="p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg"><p className="text-lg font-bold text-gray-900 dark:text-white">{n.activeListings}</p><p className="text-xs text-gray-400">Active</p></div>
          <div className="p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg"><p className="text-lg font-bold text-gray-900 dark:text-white">{formatCurrency(n.pricePerSqft)}</p><p className="text-xs text-gray-400">$/sqft</p></div>
        </div>
        <div className="flex justify-between mt-3 pt-3 border-t border-gray-50 dark:border-gray-800/50 text-xs text-gray-400">
          <span>🏫 Schools: {n.schoolRating}/10</span><span>🚶 Walk: {n.walkScore}</span><span>🛡️ Crime: {n.crimeRate}</span>
        </div>
      </Card>)}
    </div>
  </div>)
}
