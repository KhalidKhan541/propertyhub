import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline' | 'gradient'; size?: 'xs' | 'sm' | 'md' | 'lg'; loading?: boolean; icon?: ReactNode }
const Button = forwardRef<HTMLButtonElement, Props>(({ className, variant = 'primary', size = 'md', loading, icon, children, disabled, ...props }, ref) => (
  <button ref={ref} disabled={disabled || loading} className={cn('inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]',
    { 'bg-green-600 hover:bg-green-500 text-white focus:ring-green-500 shadow-sm shadow-green-500/25': variant === 'primary', 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200': variant === 'secondary', 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400': variant === 'ghost', 'bg-red-600 hover:bg-red-500 text-white': variant === 'danger', 'border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200': variant === 'outline', 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/25': variant === 'gradient' },
    { 'h-7 px-2 text-xs': size === 'xs', 'h-9 px-3.5 text-sm': size === 'sm', 'h-10 px-4 text-sm': size === 'md', 'h-12 px-6 text-base': size === 'lg' }, className )} {...props}>
    {loading ? <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg> : icon ? <span className="shrink-0">{icon}</span> : null}{children}
  </button>))
Button.displayName = 'Button'
export default Button
