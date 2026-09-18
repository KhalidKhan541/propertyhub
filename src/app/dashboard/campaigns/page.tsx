import Card, { CardTitle } from '@/components/ui/Card'; import Badge from '@/components/ui/Badge'; import { MOCK_CAMPAIGNS } from '@/lib/mock-data'; import { formatCurrency, formatNumber } from '@/lib/utils'
const statusVariant: Record<string, 'prop' | 'success' | 'info'> = { Active: 'prop', Completed: 'success', Scheduled: 'info' }
export default function CampaignsPage() {
  return (<div className="space-y-6">
    <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Campaigns</h2><p className="text-gray-500">{MOCK_CAMPAIGNS.length} campaigns</p></div>
      <button className="px-5 py-2.5 bg-green-600 text-white rounded-xl text-sm font-medium">+ New Campaign</button></div>
    <div className="space-y-3">{MOCK_CAMPAIGNS.map(c => <Card key={c.id} hover>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-xl">📢</div>
          <div><div className="flex items-center gap-2"><h3 className="text-sm font-semibold text-gray-900 dark:text-white">{c.name}</h3><Badge variant={statusVariant[c.status]}>{c.status}</Badge></div>
            <p className="text-xs text-gray-500 mt-1">{c.type}</p></div></div>
        <div className="flex gap-6 text-center text-sm">
          <div><p className="font-semibold text-gray-900 dark:text-white">{c.sent > 0 ? formatNumber(c.sent) : '-'}</p><p className="text-xs text-gray-400">Sent</p></div>
          <div><p className="font-semibold text-gray-900 dark:text-white">{c.conversions > 0 ? c.conversions.toString() : '-'}</p><p className="text-xs text-gray-400">Conv.</p></div>
          <div><p className="font-semibold text-green-600">{c.revenue > 0 ? formatCurrency(c.revenue) : '-'}</p><p className="text-xs text-gray-400">Revenue</p></div>
          <div><p className="font-semibold text-gray-900 dark:text-white">{formatCurrency(c.budget)}</p><p className="text-xs text-gray-400">Budget</p></div>
        </div>
      </div>
    </Card>)}</div>
  </div>)
}
