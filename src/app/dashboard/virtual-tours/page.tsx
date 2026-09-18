import Card, { CardTitle } from '@/components/ui/Card'; import Badge from '@/components/ui/Badge'; import { MOCK_VIRTUAL_TOURS } from '@/lib/mock-data'; import { formatNumber } from '@/lib/utils'
export default function VirtualToursPage() {
  return (<div className="space-y-6">
    <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Virtual Tours</h2><p className="text-gray-500">{MOCK_VIRTUAL_TOURS.length} tours</p></div>
    <div className="space-y-3">{MOCK_VIRTUAL_TOURS.map(v => <Card key={v.id} hover>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4"><span className="text-3xl">🎥</span>
          <div><div className="flex items-center gap-2"><h3 className="text-sm font-semibold text-gray-900 dark:text-white">{v.property}</h3><Badge variant="success" dot>{v.status}</Badge></div>
            <p className="text-xs text-gray-500 mt-1">{v.provider}</p></div></div>
        <div className="flex gap-6 text-center text-sm">
          <div><p className="font-semibold text-gray-900 dark:text-white">{formatNumber(v.views)}</p><p className="text-xs text-gray-400">Views</p></div>
          <div><p className="font-semibold text-gray-900 dark:text-white">{v.avgTime}</p><p className="text-xs text-gray-400">Avg Time</p></div>
          <div><p className="font-semibold text-green-600">{formatNumber(v.leads)}</p><p className="text-xs text-gray-400">Leads</p></div>
        </div>
      </div>
    </Card>)}</div>
  </div>)
}
