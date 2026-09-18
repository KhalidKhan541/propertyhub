'use client'; import { useState, ReactNode } from 'react'; import { cn } from '@/lib/utils'
export default function Tabs({ tabs }: { tabs: { label: string; content: ReactNode }[] }) {
  const [active, setActive] = useState(0)
  return <div><div className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-xl p-1 mb-4">{tabs.map((t, i) => <button key={i} onClick={() => setActive(i)} className={cn('px-4 py-2 rounded-lg text-sm font-medium transition-all', active === i ? 'bg-white dark:bg-gray-700 shadow text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300')}>{t.label}</button>)}</div>{tabs[active].content}</div>
}
