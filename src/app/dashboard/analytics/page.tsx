'use client'; import Card, { CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'; import { MOCK_REVENUE, MOCK_USER, MOCK_PROPERTIES } from '@/lib/mock-data'; import { formatNumber, formatCurrency } from '@/lib/utils'; import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
const typeData = [{ name: 'Single Family', value: 4, color: '#22c55e' }, { name: 'Condo', value: 2, color: '#3b82f6' }, { name: 'Townhouse', value: 1, color: '#8b5cf6' }, { name: 'Multi-Family', value: 1, color: '#f59e0b' }]
export default function AnalyticsPage() {
  return (<div className="space-y-6">
    <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h2><p className="text-gray-500">Brokerage performance overview</p></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[{ l: 'Total Revenue', v: formatCurrency(MOCK_USER.revenue), c: '+22%', i: '💰' }, { l: 'Avg Sale Price', v: formatCurrency(Math.round(MOCK_USER.revenue / MOCK_USER.closedDeals)), c: '+8%', i: '🏠' }, { l: 'Active Leads', v: '280', c: '+12%', i: '🎯' }, { l: 'Conversion Rate', v: '24%', c: '+3%', i: '📈' }].map(m => <Card key={m.l}><p className="text-sm text-gray-500">{m.l}</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{m.v}</p><p className="text-xs font-semibold mt-1 text-emerald-600">{m.c}</p></Card>)}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2"><CardHeader><div><CardTitle>Revenue Trend</CardTitle></div></CardHeader>
        <ResponsiveContainer width="100%" height={300}><AreaChart data={MOCK_REVENUE}>
          <defs><linearGradient id="rg2" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} /><stop offset="95%" stopColor="#22c55e" stopOpacity={0} /></linearGradient></defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" /><XAxis dataKey="month" tick={{ fontSize: 12, fill: '#9ca3af' }} /><YAxis tick={{ fontSize: 12, fill: '#9ca3af' }} tickFormatter={v => `$${v/1000}k`} />
          <Tooltip contentStyle={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px' }} />
          <Area type="monotone" dataKey="revenue" stroke="#22c55e" fillOpacity={1} fill="url(#rg2)" strokeWidth={2} />
        </AreaChart></ResponsiveContainer></Card>
      <Card><CardTitle className="mb-4">By Property Type</CardTitle>
        <ResponsiveContainer width="100%" height={180}><PieChart><Pie data={typeData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={4} dataKey="value">
          {typeData.map((e, i) => <Cell key={i} fill={e.color} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer>
        <div className="space-y-2 mt-4">{typeData.map(s => <div key={s.name} className="flex items-center justify-between text-sm"><span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} /><span className="text-gray-600 dark:text-gray-400">{s.name}</span></span><span className="font-medium">{s.value}</span></div>)}</div>
      </Card>
    </div>
    <Card><CardTitle className="mb-3">Monthly Performance</CardTitle>
      <div className="space-y-2">{MOCK_REVENUE.map(r => <div key={r.month} className="flex items-center gap-4 p-2.5 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <span className="text-sm font-medium text-gray-900 dark:text-white w-8">{r.month}</span>
        <div className="flex-1 h-6 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" style={{ width: `${(r.revenue / 500000) * 100}%` }} /></div>
        <div className="flex gap-4 text-sm text-gray-500 w-48"><span>{r.deals} deals</span><span className="font-semibold text-gray-900 dark:text-white">{formatCurrency(r.revenue)}</span></div>
      </div>)}</div>
    </Card>
  </div>)
}
