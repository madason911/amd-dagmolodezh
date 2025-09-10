import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
  children: ReactNode
}

export function Button({ 
  variant = 'primary', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-200'
  
  const variants = {
    primary: 'bg-accent text-primary hover:bg-accent/90',
    ghost: 'text-primary hover:bg-accent/10'
  }

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}