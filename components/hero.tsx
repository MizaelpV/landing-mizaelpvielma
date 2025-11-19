import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight text-balance">
              Building elegant solutions for complex problems
            </h1>
            <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl">
              Full-stack software engineer focused on AI and web technologies. I create products that are both beautiful and functional.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <a href="#contact">
              <Button size="lg" className="rounded-sm font-medium">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="/resume.pdf" download>
              <Button variant="outline" size="lg" className="rounded-sm font-medium">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
