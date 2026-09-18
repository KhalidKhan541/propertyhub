import Card from '@/components/ui/Card'; import Badge from '@/components/ui/Badge'; import Avatar from '@/components/ui/Avatar'; import { MOCK_CLIENTS } from '@/lib/mock-data'; import { formatCurrency } from '@/lib/utils'
export default function ClientsPage() {
  return (<div className="space-y-6">
    <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Clients</h2><p className="text-gray-500">{MOCK_CLIENTS.length} clients</p></div></div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {MOCK_CLIENTS.map(c => <Card key={c.id} hover><div className="flex items-start gap-4">
        <Avatar name={c.name} size="lg" />
        <div className="flex-1 min-w-0"><div className="flex items-center gap-2"><h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">{c.name}</h3><Badge variant={c.type === 'Buyer' ? 'prop' : 'info'}>{c.type}</Badge></div>
          <p className="text-xs text-gray-500">{c.email}</p></div>
        <Badge variant={c.status === 'active' ? 'success' : c.status === 'closed' ? 'prop' : 'default'} dot>{c.status}</Badge>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4 pt-3 border-t border-gray-50 dark:border-gray-800/50 text-center">
        <div><p className="text-lg font-bold text-gray-900 dark:text-white">{formatCurrency(c.budget)}</p><p className="text-xs text-gray-400">Budget</p></div>
        <div><p className="text-lg font-bold text-green-600">{c.properties}</p><p className="text-xs text-gray-400">Properties</p></div>
        <div><p className="text-lg font-bold text-gray-900 dark:text-white">{c.tours}</p><p className="text-xs text-gray-400">Tours</p></div>
      </div></Card>)}
    </div>
  </div>)
}
