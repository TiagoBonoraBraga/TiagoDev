import Image from 'next/image'
import { FiArrowRight, FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { resolveLiveUrl } from '../../utils/projectLinks'

export default function ProjectCard({ project, tag, onSelect }) {
  const liveUrl = resolveLiveUrl(project)

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-md transition duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-2xl">
      <button
        type="button"
        onClick={() => onSelect(project)}
        aria-label={`Ver detalhes de ${project.title}`}
        className="block aspect-[16/10] w-full overflow-hidden bg-paper-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={480}
          height={300}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </button>

      <div className="flex flex-1 flex-col p-5">
        <span className="inline-flex w-fit rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[11px] tracking-wide text-accent">
          {tag}
        </span>
        <h3 className="mt-3 font-display text-lg font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-5">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 rounded text-sm font-medium text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Ver detalhes
            <FiArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>

          <div className="flex items-center gap-1">
            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                aria-label={`Repositório de ${project.title} no GitHub`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-accent/10 hover:text-accent"
              >
                <FiGithub size={16} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir site de ${project.title}`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-accent/10 hover:text-accent"
              >
                <FiArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
