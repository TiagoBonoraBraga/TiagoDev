import Link from 'next/link'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Sobre' },
  { href: '/projects', label: 'Projetos' },
  { href: '/contact', label: 'Contato' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-tight text-ink"
          >
            Tiago Dev<span className="text-accent">.</span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Desenvolvedor full-stack. Transformo ideias em aplicações web
            rápidas e bem construídas.
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            Navegação
          </span>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-ink/80 transition-colors hover:text-accent"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            Contato
          </span>
          <a
            href="mailto:ogait.desenvolvedor@gmail.com"
            className="text-sm text-ink/80 transition-colors hover:text-accent"
          >
            ogait.desenvolvedor@gmail.com
          </a>
          <a
            href="tel:+5541988082384"
            className="text-sm text-ink/80 transition-colors hover:text-accent"
          >
            +55 41 98808-2384
          </a>
          <div className="mt-1 flex items-center gap-3">
            <a
              href="https://github.com/TiagoBonoraBraga"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-accent"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/tiagocode/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted">
          © {year} Tiago Dev. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
