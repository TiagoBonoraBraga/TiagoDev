import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { reactProjects, nextProjects } from '../../utils/mocks'

const featured = [
  { ...reactProjects[0], tag: 'React · Styled Components' },
  { ...reactProjects[1], tag: 'React · TypeScript' },
  { ...nextProjects[0], tag: 'Next.js · Tailwind' },
]

export default function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs tracking-wider text-accent">
            {'// projetos em destaque'}
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Alguns trabalhos recentes
          </h2>
        </div>
        <Link
          href="/projects"
          className="hidden shrink-0 items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-accent sm:inline-flex"
        >
          Ver todos <FiArrowRight size={15} />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-md transition duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-2xl"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={480}
                height={300}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <span className="inline-flex w-fit rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[11px] tracking-wide text-accent">
                {project.tag}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {project.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              {project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
                >
                  <FiGithub size={15} /> Repositório
                  <FiArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 sm:hidden">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent"
        >
          Ver todos os projetos <FiArrowRight size={15} />
        </Link>
      </div>
    </section>
  )
}
