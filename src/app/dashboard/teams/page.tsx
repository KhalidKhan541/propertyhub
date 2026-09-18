import Card from '@/components/ui/Card'; import Avatar from '@/components/ui/Avatar'; import { MOCK_TEAM } from '@/lib/mock-data'
export default function TeamsPage() {
  return (<div className="space-y-6">
    <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Teams</h2><p className="text-gray-500">{MOCK_TEAM.length} team members</p></div></div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {MOCK_TEAM.map(m => <Card key={m.id} hover><div className="flex items-center gap-4">
        <Avatar name={m.name} size="lg" />
        <div className="flex-1 min-w-0"><div className="flex items-center gap-2"><h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">{m.name}</h3><span className="px-2 py-0.5 bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 rounded-full text-xs">{m.role}</span></div>
          <p className="text-xs text-gray-500">{m.email}</p><p className="text-xs text-gray-400">{m.department}</p></div>
        {m.listings !== undefined && <div className="text-right text-sm"><p className="font-semibold text-gray-900 dark:text-white">{m.listings} listings</p><p className="text-xs text-gray-400">{m.sales} sales</p></div>}
      </div></Card>)}
    </div>
  </div>)
}
