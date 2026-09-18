import ProjectCard from './ProjectCard'
import type { Project } from '@/types'

interface ProjectsSectionProps {
  eyebrow: string
  title: string
  tag?: string
  projects: Project[]
  onSelect: (project: Project) => void
}

export default function ProjectsSection({ eyebrow, title, tag, projects, onSelect }: ProjectsSectionProps) {
  if (!projects?.length) return null

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-14">
      <p className="font-mono text-xs tracking-wider text-accent">{eyebrow}</p>
      <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
        {title}
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            tag={tag}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  )
}
