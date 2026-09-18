import Card from '@/components/ui/Card'; import Badge from '@/components/ui/Badge'; import { MOCK_TOURS } from '@/lib/mock-data'
const statusVariant: Record<string, 'prop' | 'info' | 'success'> = { Scheduled: 'info', Completed: 'success', Cancelled: 'danger' as any }
export default function ToursPage() {
  return (<div className="space-y-6">
    <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tours</h2><p className="text-gray-500">{MOCK_TOURS.length} tours</p></div>
      <button className="px-5 py-2.5 bg-green-600 text-white rounded-xl text-sm font-medium">+ Schedule Tour</button></div>
    <div className="space-y-3">{MOCK_TOURS.map(t => <Card key={t.id} hover>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-xl">🗓️</div>
          <div><div className="flex items-center gap-2"><h3 className="text-sm font-semibold text-gray-900 dark:text-white">{t.property}</h3><Badge variant={statusVariant[t.status] || 'default'}>{t.status}</Badge></div>
            <p className="text-xs text-gray-500 mt-1">Client: {t.client} · Agent: {t.agent}</p></div></div>
        <div className="flex gap-6 text-center text-sm">
          <div><p className="font-semibold text-gray-900 dark:text-white">{t.date}</p><p className="text-xs text-gray-400">Date</p></div>
          <div><p className="font-semibold text-gray-900 dark:text-white">{t.time}</p><p className="text-xs text-gray-400">Time</p></div>
          <div><Badge variant={t.type === 'Virtual' ? 'info' : 'prop'}>{t.type}</Badge></div>
        </div>
      </div>
    </Card>)}</div>
  </div>)
}
