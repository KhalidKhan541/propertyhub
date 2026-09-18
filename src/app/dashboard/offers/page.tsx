import Card, { CardTitle } from '@/components/ui/Card'; import Badge from '@/components/ui/Badge'; import { MOCK_OFFERS } from '@/lib/mock-data'; import { formatCurrency } from '@/lib/utils'
const statusVariant: Record<string, 'warning' | 'info' | 'success' | 'prop'> = { Negotiating: 'warning', Submitted: 'info', Accepted: 'success', Rejected: 'danger' as any, Countered: 'prop' }
export default function OffersPage() {
  return (<div className="space-y-6">
    <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Offers</h2><p className="text-gray-500">{MOCK_OFFERS.length} offers</p></div></div>
    <div className="space-y-3">{MOCK_OFFERS.map(o => <Card key={o.id} hover glow>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-xl">🤝</div>
          <div><div className="flex items-center gap-2"><h3 className="text-sm font-semibold text-gray-900 dark:text-white">{o.property}</h3><Badge variant={statusVariant[o.status]}>{o.status}</Badge></div>
            <p className="text-xs text-gray-500 mt-1">Buyer: {o.buyer} · Agent: {o.agent}</p></div></div>
        <div className="flex gap-6 text-center text-sm">
          <div><p className="font-semibold text-green-600">{formatCurrency(o.offer)}</p><p className="text-xs text-gray-400">Offer</p></div>
          <div><p className="text-gray-500">{formatCurrency(o.listPrice)}</p><p className="text-xs text-gray-400">List Price</p></div>
          <div><p className={`font-semibold ${o.percent >= 97 ? 'text-green-600' : 'text-amber-600'}`}>{o.percent}%</p><p className="text-xs text-gray-400">Of List</p></div>
          <div><Badge variant="default">{o.financing}</Badge></div>
        </div>
      </div>
    </Card>)}</div>
  </div>)
}
