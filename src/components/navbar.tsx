'use client'

import { ThemeToggle } from './themeToggle'
import { Separator } from '@/components/ui/seprator'

import { fontSansCD } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export default function Navbar() {
  return (
    <div className='sticky top-0 backdrop-blur z-50 bg-background/90'>
      <nav className="max-w-2xl mx-auto w-full px-4 flex h-16 justify-between items-center">
        <h1
          className={cn(
            'text-xl font-semibold font-sans-cd',
            fontSansCD.variable
          )}
        >
          DevGenie
        </h1>
        <div className="flex gap-4 items-center">
          <ThemeToggle />
        </div>
      </nav>
      <Separator />
    </div>
  )
}
