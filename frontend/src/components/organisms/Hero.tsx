import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Camada ambiente: tint + textura de pontos + brilho de destaque (decorativa) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-accent/10 to-transparent" />
        <div className="absolute inset-0 [background-image:radial-gradient(var(--line)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_0%,#000,transparent_70%)] [-webkit-mask-image:radial-gradient(ellipse_60%_55%_at_50%_0%,#000,transparent_70%)]" />
        <div className="absolute left-1/2 top-[-12%] h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-accent/25 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-10 pb-20 md:pt-16 md:pb-28">
        <p className="animate-fade-up font-mono text-xs tracking-wider text-accent sm:text-sm">
          {'// desenvolvedor full-stack · Curitiba, Brasil'}
        </p>

        <h1 className="animate-fade-up mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink [animation-delay:60ms] sm:text-6xl lg:text-7xl">
          Construo aplicações web{' '}
          <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
            de ponta a ponta
          </span>
          <span className="text-accent">.</span>
          <span
            aria-hidden="true"
            className="ml-2 inline-block h-[0.8em] w-[3px] translate-y-[2px] animate-caret-blink bg-accent align-baseline"
          />
        </h1>

        <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-muted [animation-delay:140ms] md:text-xl">
          React, Next.js e Node — da interface ao banco de dados. Aberto a novos
          projetos e oportunidades.
        </p>

        <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-3 [animation-delay:220ms]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper shadow-sm transition-colors hover:bg-accent"
          >
            Ver projetos
            <FiArrowUpRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-line bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Falar comigo
          </Link>
        </div>

        <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted [animation-delay:300ms]">
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Disponível para projetos
          </span>
          <a
            href="https://github.com/TiagoBonoraBraga"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-ink"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/tiagocode/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-ink"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  )
}
