import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { FiArrowUpRight, FiGithub, FiX } from 'react-icons/fi'
import { resolveLiveUrl } from '../../utils/projectLinks'
import type { Project } from '@/types'

interface ProjectModalProps {
  project: Project | null
  tag?: string
  onClose: () => void
}

export default function ProjectModal({ project, tag, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  const liveUrl = resolveLiveUrl(project)

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/60 backdrop-blur-sm sm:items-center sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-up relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-paper shadow-2xl sm:rounded-3xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-paper/80 text-ink backdrop-blur transition-colors hover:bg-accent hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <FiX size={18} />
        </button>

        <div className="aspect-[16/9] w-full shrink-0 overflow-hidden bg-paper-soft">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={450}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col overflow-y-auto p-6 md:p-8">
          <span className="inline-flex w-fit rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[11px] tracking-wide text-accent">
            {tag}
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
            {project.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            {project.description}
          </p>

          {(project.repository || liveUrl) && (
            <div className="mt-7 flex flex-wrap gap-3">
              {project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
                >
                  <FiGithub size={16} /> Repositório
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  Ver site <FiArrowUpRight size={16} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
