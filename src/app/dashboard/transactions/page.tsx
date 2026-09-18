import Card from '@/components/ui/Card'; import Badge from '@/components/ui/Badge'; import { MOCK_TRANSACTIONS } from '@/lib/mock-data'; import { formatCurrency } from '@/lib/utils'
const statusVariant: Record<string, 'success' | 'prop' | 'warning'> = { Closed: 'success', 'In Progress': 'prop', Pending: 'warning' }
export default function TransactionsPage() {
  return (<div className="space-y-6">
    <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Transactions</h2><p className="text-gray-500">{MOCK_TRANSACTIONS.length} transactions</p></div>
    <div className="grid grid-cols-4 gap-4">
      <Card><p className="text-sm text-gray-500">Total Volume</p><p className="text-2xl font-bold text-green-600 mt-1">{formatCurrency(MOCK_TRANSACTIONS.reduce((s, t) => s + t.price, 0))}</p></Card>
      <Card><p className="text-sm text-gray-500">Total Commission</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{formatCurrency(MOCK_TRANSACTIONS.reduce((s, t) => s + t.commission, 0))}</p></Card>
      <Card><p className="text-sm text-gray-500">Closed</p><p className="text-2xl font-bold text-emerald-600 mt-1">{MOCK_TRANSACTIONS.filter(t => t.status === 'Closed').length}</p></Card>
      <Card><p className="text-sm text-gray-500">In Progress</p><p className="text-2xl font-bold text-amber-600 mt-1">{MOCK_TRANSACTIONS.filter(t => t.status === 'In Progress').length}</p></Card>
    </div>
    <Card padding={false}><div className="overflow-x-auto"><table className="w-full">
      <thead><tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50">
        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Property</th>
        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Buyer</th>
        <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Price</th>
        <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Commission</th>
        <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Agent</th>
      </tr></thead>
      <tbody>{MOCK_TRANSACTIONS.map(t => <tr key={t.id} className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <td className="px-5 py-3.5 text-sm font-medium text-gray-900 dark:text-white">{t.property}</td>
        <td className="px-5 py-3.5 text-sm text-gray-500">{t.buyer}</td>
        <td className="px-5 py-3.5 text-right text-sm font-semibold text-green-600">{formatCurrency(t.price)}</td>
        <td className="px-5 py-3.5 text-right text-sm font-medium">{formatCurrency(t.commission)}</td>
        <td className="px-5 py-3.5 text-center"><Badge variant={statusVariant[t.status]}>{t.status}</Badge></td>
        <td className="px-5 py-3.5 text-sm text-gray-500">{t.agent}</td>
      </tr>)}</tbody>
    </table></div></Card>
  </div>)
}
