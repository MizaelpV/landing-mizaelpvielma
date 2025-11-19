import { ArrowUpRight, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'AI Content Generator',
      description: 'Intelligent platform for content generation powered by LLMs with real-time streaming.',
      technologies: ['Next.js', 'Python', 'OpenAI'],
      link: '#',
      github: '#',
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Comprehensive analytics platform with real-time data visualization and insights.',
      technologies: ['React', 'Node.js', 'WebSocket'],
      link: '#',
      github: '#',
    },
    {
      title: 'Open Source ML Toolkit',
      description: 'Maintained library for streamlining machine learning workflows and experimentation.',
      technologies: ['Python', 'Scikit-learn', 'NumPy'],
      link: '#',
      github: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-foreground">Projects</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="border-b border-border pb-12 last:border-0">
              <div className="space-y-3 mb-4">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <p className="text-foreground/60 leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-foreground/50 border border-border rounded px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
                >
                  View
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
