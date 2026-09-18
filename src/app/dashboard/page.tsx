'use client'; import Card, { CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'; import MetricCard from '@/components/ui/MetricCard'; import Badge from '@/components/ui/Badge'; import { MOCK_USER, MOCK_REVENUE, MOCK_ACTIVITY, MOCK_PROPERTIES } from '@/lib/mock-data'; import { formatCurrency, formatNumber } from '@/lib/utils'; import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
export default function DashboardPage() {
  return (<div className="space-y-6">
    <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Brokerage Overview</h2><p className="text-gray-500">Welcome back, Khalid. Here is your real estate dashboard.</p></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard label="Revenue (YTD)" value={formatCurrency(MOCK_USER.revenue)} change="+22% vs last year" positive icon="💰" />
      <MetricCard label="Active Listings" value={MOCK_USER.listings} change="+8 this month" positive icon="🏠" />
      <MetricCard label="Closed Deals" value={MOCK_USER.closedDeals} change="+12 this quarter" positive icon="🤝" />
      <MetricCard label="Avg Days on Market" value={MOCK_USER.avgDaysOnMarket} change="-4 days" positive icon="📅" />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader><div><CardTitle>Revenue Trend</CardTitle><CardDescription>Monthly brokerage revenue</CardDescription></div></CardHeader>
        <ResponsiveContainer width="100%" height={300}><AreaChart data={MOCK_REVENUE}>
          <defs><linearGradient id="rg" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} /><stop offset="95%" stopColor="#22c55e" stopOpacity={0} /></linearGradient></defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" /><XAxis dataKey="month" tick={{ fontSize: 12, fill: '#9ca3af' }} /><YAxis tick={{ fontSize: 12, fill: '#9ca3af' }} tickFormatter={v => `$${v/1000}k`} />
          <Tooltip contentStyle={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px' }} formatter={(v: number) => [formatCurrency(v), 'Revenue']} />
          <Area type="monotone" dataKey="revenue" stroke="#22c55e" fillOpacity={1} fill="url(#rg)" strokeWidth={2} />
        </AreaChart></ResponsiveContainer>
      </Card>
      <Card>
        <CardTitle className="mb-4">Top Properties</CardTitle>
        <div className="space-y-3">
          {MOCK_PROPERTIES.slice(0, 4).map(p => <div key={p.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50">
            <span className="text-2xl">{p.image}</span><div className="flex-1 min-w-0"><p className="text-xs font-medium text-gray-900 dark:text-white truncate">{p.title}</p><p className="text-[10px] text-gray-400">{formatCurrency(p.price)}</p></div>
            <Badge variant={p.status === 'Active' ? 'success' : p.status === 'Pending' ? 'warning' : 'prop'}>{p.status}</Badge></div>)}
        </div>
      </Card>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card><CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
        <div className="space-y-2">{MOCK_ACTIVITY.map(a => <div key={a.id} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50">
          <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-sm">{a.type === 'lead' ? '🎯' : a.type === 'offer' ? '🤝' : a.type === 'tour' ? '🗓️' : a.type === 'document' ? '📄' : a.type === 'listing' ? '🏠' : a.type === 'commission' ? '💵' : a.type === 'campaign' ? '📢' : '💰'}</div>
          <div className="flex-1 min-w-0"><p className="text-sm text-gray-700 dark:text-gray-300 truncate">{a.action}</p><p className="text-xs text-gray-400">{a.time}</p></div>
        </div>)}</div>
      </Card>
      <Card><CardHeader><CardTitle>Upcoming Tours</CardTitle></CardHeader>
        <div className="space-y-3">{[{ prop: 'Waterfront Villa', client: 'Robert Martinez', date: 'Sep 18', type: 'In-Person' }, { prop: 'Luxury Penthouse', client: 'Jennifer Adams', date: 'Sep 17', type: 'Virtual' }, { prop: 'Urban Loft', client: 'Lisa Thompson', date: 'Sep 20', type: 'In-Person' }].map((t, i) => <div key={i} className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
          <div className="flex items-center justify-between"><p className="text-sm font-medium text-gray-900 dark:text-white">{t.prop}</p><Badge variant={t.type === 'Virtual' ? 'info' : 'prop'}>{t.type}</Badge></div>
          <p className="text-xs text-gray-500 mt-1">{t.client} · {t.date}</p>
        </div>)}</div>
      </Card>
    </div>
  </div>)
}
