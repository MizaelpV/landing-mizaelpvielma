export default function Experience() {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Leading development of AI-powered features, architecting scalable backend systems, and mentoring junior engineers.',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
    },
    {
      title: 'Full-Stack Engineer',
      company: 'Startup',
      period: '2021 - 2023',
      description: 'Built and shipped multiple products from zero to production, handling both frontend and backend responsibilities.',
      skills: ['Next.js', 'PostgreSQL', 'TypeScript', 'Vercel'],
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2020 - 2021',
      description: 'Developed responsive web applications, implemented real-time features, and collaborated with design teams.',
      skills: ['React', 'JavaScript', 'CSS', 'REST APIs'],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-2 border-primary pl-6 pb-8 relative"
            >
              <div className="absolute -left-3 top-0 w-4 h-4 bg-primary rounded-full" />
              <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
              <p className="text-foreground/60 text-sm">{exp.company}</p>
              <p className="text-foreground/50 text-xs uppercase tracking-wide mt-1">
                {exp.period}
              </p>
              <p className="mt-3 text-foreground/70 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-accent/10 text-accent text-xs rounded font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
