import Link from 'next/link'
import { FiArrowUpRight, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function ContactCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      {/* Banner sempre escuro: forçamos os tokens do tema claro neste subtree,
          então o fundo continua "ink" (escuro) e o texto "paper" (claro) tanto
          no light quanto no dark mode — sem inverter as cores. */}
      <div
        style={{
          '--paper': '#fbfbfc',
          '--paper-soft': '#e8edf5',
          '--ink': '#0e1116',
          '--ink-soft': '#39414e',
          '--muted': '#5b6470',
          '--line': '#e6e7eb',
          '--accent': '#2d4bd8',
          '--accent-soft': '#6274e5',
        }}
        className="relative isolate overflow-hidden rounded-3xl bg-ink px-8 py-14 md:px-14 md:py-20"
      >
        {/* brilho + textura decorativos */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_80%_80%_at_100%_0%,#000,transparent_70%)] [-webkit-mask-image:radial-gradient(ellipse_80%_80%_at_100%_0%,#000,transparent_70%)]"
        />

        <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs tracking-wider text-accent-soft">
              {'// contato'}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-paper md:text-5xl">
              Vamos construir
              <br />
              algo juntos?
            </h2>
          </div>

          <div className="flex flex-col items-start gap-5 md:items-end">
            <a
              href="mailto:ogait.desenvolvedor@gmail.com"
              className="font-mono text-sm text-paper/70 transition-colors hover:text-accent-soft md:text-base"
            >
              ogait.desenvolvedor@gmail.com
            </a>
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent hover:text-paper"
              >
                Enviar mensagem <FiArrowUpRight size={16} />
              </Link>
              <a
                href="https://github.com/TiagoBonoraBraga"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-paper transition-colors hover:border-accent-soft hover:text-accent-soft"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/tiagocode/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-paper transition-colors hover:border-accent-soft hover:text-accent-soft"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
