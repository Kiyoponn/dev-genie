import { Badge } from '@/components/ui/badge'
import { fontSansCD } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { GithubIcon } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex max-w-2xl px-1 mx-auto py-14 flex-col justify-center items-center text-center">
      <a
        href="https://github.com/Kiyoponn/dev-genie"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Badge
          variant={'outline'}
          className="shadow-md rounded-full font-medium text-sm py-2 px-4 hover:cursor-pointer hover:bg-muted"
        >
          <GithubIcon size={14} className="mr-2" />
          <p>Star on GitHub</p>
        </Badge>
      </a>
      <h1
        className={cn(
          'text-3xl min-[520px]:text-4xl sm:text-5xl tracking-wide font-sans-cd font-extrabold mt-6',
          fontSansCD.variable
        )}
      >
        Craft a Standout Profile with AI Assistance
      </h1>
    </header>
  )
}
