import Card from '@/components/ui/Card'; import Badge from '@/components/ui/Badge'; import { MOCK_COMMISSIONS } from '@/lib/mock-data'; import { formatCurrency } from '@/lib/utils'
export default function CommissionsPage() {
  return (<div className="space-y-6">
    <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Commissions</h2><p className="text-gray-500">{MOCK_COMMISSIONS.length} commission records</p></div>
    <div className="grid grid-cols-4 gap-4">
      <Card><p className="text-sm text-gray-500">Total Earned</p><p className="text-2xl font-bold text-green-600 mt-1">{formatCurrency(MOCK_COMMISSIONS.reduce((s, c) => s + c.earned, 0))}</p></Card>
      <Card><p className="text-sm text-gray-500">Pending</p><p className="text-2xl font-bold text-amber-600 mt-1">{formatCurrency(MOCK_COMMISSIONS.filter(c => c.status === 'Pending').reduce((s, c) => s + c.earned, 0))}</p></Card>
      <Card><p className="text-sm text-gray-500">Paid</p><p className="text-2xl font-bold text-emerald-600 mt-1">{formatCurrency(MOCK_COMMISSIONS.filter(c => c.status === 'Paid').reduce((s, c) => s + c.earned, 0))}</p></Card>
      <Card><p className="text-sm text-gray-500">Avg Rate</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{(MOCK_COMMISSIONS.reduce((s, c) => s + c.rate, 0) / MOCK_COMMISSIONS.length).toFixed(1)}%</p></Card>
    </div>
    <Card padding={false}><div className="overflow-x-auto"><table className="w-full">
      <thead><tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50">
        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Agent</th>
        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Property</th>
        <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Sale Price</th>
        <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Commission</th>
        <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Your Split</th>
        <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
      </tr></thead>
      <tbody>{MOCK_COMMISSIONS.map(c => <tr key={c.id} className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <td className="px-5 py-3.5 text-sm font-medium text-gray-900 dark:text-white">{c.agent}</td>
        <td className="px-5 py-3.5 text-sm text-gray-500">{c.property}</td>
        <td className="px-5 py-3.5 text-right text-sm font-semibold">{formatCurrency(c.salePrice)}</td>
        <td className="px-5 py-3.5 text-right text-sm text-gray-900 dark:text-white">{formatCurrency(c.commission)}</td>
        <td className="px-5 py-3.5 text-right text-sm font-semibold text-green-600">{formatCurrency(c.earned)} ({c.split}%)</td>
        <td className="px-5 py-3.5 text-center"><Badge variant={c.status === 'Paid' ? 'success' : 'warning'}>{c.status}</Badge></td>
      </tr>)}</tbody>
    </table></div></Card>
  </div>)
}
