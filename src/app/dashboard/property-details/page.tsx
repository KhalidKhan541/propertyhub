import Card, { CardTitle } from '@/components/ui/Card'; import Badge from '@/components/ui/Badge'; import { MOCK_PROPERTIES } from '@/lib/mock-data'; import { formatCurrency } from '@/lib/utils'
const p = MOCK_PROPERTIES[0]
export default function PropertyDetailsPage() {
  return (<div className="space-y-6">
    <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">{p.title}</h2><p className="text-gray-500">{p.address}</p></div>
      <div className="flex gap-2"><Badge variant="success" dot>{p.status}</Badge><button className="px-4 py-2 bg-green-600 text-white rounded-xl text-sm font-medium">Edit Listing</button></div></div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <Card><div className="w-full h-64 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-500/20 dark:to-emerald-500/20 rounded-xl flex items-center justify-center text-6xl">{p.image}</div></Card>
        <Card><CardTitle>Property Details</CardTitle>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[{ l: 'Price', v: formatCurrency(p.price) }, { l: 'Type', v: p.type }, { l: 'Bedrooms', v: p.beds.toString() }, { l: 'Bathrooms', v: p.baths.toString() }, { l: 'Sq Ft', v: p.sqft.toLocaleString() }, { l: 'Lot Size', v: p.lot > 0 ? `${p.lot.toLocaleString()} sqft` : 'N/A' }, { l: 'Year Built', v: p.yearBuilt.toString() }, { l: 'Days on Market', v: p.daysOnMarket.toString() }].map(d => <div key={d.l}><p className="text-xs text-gray-500">{d.l}</p><p className="text-sm font-semibold text-gray-900 dark:text-white mt-0.5">{d.v}</p></div>)}
          </div>
        </Card>
        <Card><CardTitle>Features</CardTitle>
          <div className="flex flex-wrap gap-2 mt-3">{p.features.map(f => <span key={f} className="px-3 py-1 bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">{f}</span>)}</div>
        </Card>
      </div>
      <div className="space-y-4">
        <Card><CardTitle>Quick Stats</CardTitle>
          <div className="space-y-3 mt-3">
            {[{ l: 'Views', v: p.views.toLocaleString() }, { l: 'Saves', v: p.saves.toString() }, { l: 'Offers', v: p.offers.toString() }, { l: 'Agent', v: p.agent }].map(s => <div key={s.l} className="flex items-center justify-between"><span className="text-sm text-gray-500">{s.l}</span><span className="text-sm font-semibold text-gray-900 dark:text-white">{s.v}</span></div>)}
          </div>
        </Card>
        <Card><CardTitle>Agent</CardTitle>
          <div className="flex items-center gap-3 mt-3"><div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold">{p.agent.split(' ').map((n: string) => n[0]).join('')}</div><div><p className="text-sm font-medium text-gray-900 dark:text-white">{p.agent}</p><p className="text-xs text-gray-400">PropertyHub Realty</p></div></div>
        </Card>
        <Card><CardTitle>Virtual Tour</CardTitle>
          <div className="w-full h-32 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center mt-3"><button className="px-4 py-2 bg-green-600 text-white rounded-xl text-sm font-medium">▶ Launch 3D Tour</button></div>
        </Card>
      </div>
    </div>
  </div>)
}
