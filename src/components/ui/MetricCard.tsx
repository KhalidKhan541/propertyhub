import { cn } from '@/lib/utils'; import Card from './Card'
export default function MetricCard({ label, value, change, positive, icon }: { label: string; value: number | string; change?: string; positive?: boolean; icon: string }) {
  return <Card><div className="flex items-start justify-between"><div><p className="text-sm text-gray-500">{label}</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>{change && <p className={cn('text-xs font-semibold mt-1', positive ? 'text-emerald-600' : 'text-red-500')}>{change}</p>}</div><span className="text-2xl">{icon}</span></div></Card>
}
