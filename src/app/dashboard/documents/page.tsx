import Card, { CardTitle } from '@/components/ui/Card'; import Badge from '@/components/ui/Badge'; import { MOCK_DOCUMENTS } from '@/lib/mock-data'
const statusVariant: Record<string, 'success' | 'warning' | 'info'> = { Signed: 'success', Pending: 'warning', Complete: 'info' }
export default function DocumentsPage() {
  return (<div className="space-y-6">
    <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Documents</h2><p className="text-gray-500">{MOCK_DOCUMENTS.length} documents</p></div>
      <button className="px-5 py-2.5 bg-green-600 text-white rounded-xl text-sm font-medium">+ Upload</button></div>
    <div className="space-y-3">{MOCK_DOCUMENTS.map(d => <Card key={d.id} hover>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4"><div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-lg">📄</div>
          <div><div className="flex items-center gap-2"><h3 className="text-sm font-semibold text-gray-900 dark:text-white">{d.name}</h3><Badge variant={statusVariant[d.status]}>{d.status}</Badge></div>
            <p className="text-xs text-gray-500 mt-1">{d.property} · {d.type} · {d.size}</p></div></div>
        <span className="text-xs text-gray-400">{d.date}</span>
      </div>
    </Card>)}</div>
  </div>)
}
