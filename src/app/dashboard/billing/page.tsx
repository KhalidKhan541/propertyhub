import Card, { CardTitle } from '@/components/ui/Card'; import Badge from '@/components/ui/Badge'; import Button from '@/components/ui/Button'; import { MOCK_BILLING } from '@/lib/mock-data'; import { formatCurrency } from '@/lib/utils'
const plans = [
  { name: 'Starter', price: 29, features: ['10 listings', '1 agent', 'Basic analytics'] },
  { name: 'Pro', price: 79, features: ['50 listings', '5 agents', 'Advanced analytics', 'MLS feed'], popular: false },
  { name: 'Business', price: 149, features: ['Unlimited listings', '20 agents', 'Custom branding', 'API access'], popular: true },
  { name: 'Enterprise', price: 399, features: ['Unlimited', 'Unlimited', 'White-label', 'SSO', 'SLA'] },
]
export default function BillingPage() {
  const u = MOCK_BILLING.usage
  return (<div className="space-y-6">
    <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Billing</h2><p className="text-gray-500">Manage subscription</p></div>
    <Card className="bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 text-white border-0">
      <div className="flex items-center justify-between"><div><Badge className="bg-white/20 text-white">Current Plan</Badge><h3 className="text-3xl font-bold mt-3">Business</h3><p className="text-white/70 mt-1">Next renewal: Oct 1, 2026</p></div>
        <div className="text-right"><p className="text-4xl font-bold">$149<span className="text-base font-normal text-white/60">/mo</span></p></div></div>
    </Card>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {plans.map(p => <Card key={p.name} className={p.popular ? 'ring-2 ring-green-500' : ''}>
        {p.popular && <div className="text-center mb-2"><Badge variant="prop">Current</Badge></div>}
        <h3 className="text-base font-bold text-gray-900 dark:text-white">{p.name}</h3>
        <p className="text-2xl font-bold mt-2">{formatCurrency(p.price)}<span className="text-sm text-gray-500">/mo</span></p>
        <ul className="mt-4 space-y-2">{p.features.map(f => <li key={f} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"><span className="text-emerald-500">✓</span>{f}</li>)}</ul>
      </Card>)}
    </div>
    <Card><CardTitle className="mb-3">Revenue History</CardTitle><div className="space-y-2">
      {MOCK_BILLING.invoices.map(inv => <div key={inv.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50">
        <div className="flex items-center gap-4"><span className="text-sm font-mono font-medium text-gray-900 dark:text-white">{inv.id}</span><span className="text-sm text-gray-500">{inv.date}</span></div>
        <div className="flex items-center gap-4"><Badge variant="success">{inv.status}</Badge><span className="text-sm font-semibold">{formatCurrency(inv.amount)}</span></div>
      </div>)}</div></Card>
  </div>)
}
