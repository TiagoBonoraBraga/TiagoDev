import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiMenu, FiX } from 'react-icons/fi'
import CustomLogo from '@/components/atoms/CustomLogo'
import ThemeToggle from '@/components/atoms/ThemeToggle'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Sobre' },
  { href: '/projects', label: 'Projetos' },
  { href: '/contact', label: 'Contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useRouter()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <CustomLogo />

        <ul className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm transition-colors ${
                  pathname === href ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <Link
            href="/login"
            className="rounded-full border border-line px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Login
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className="text-ink"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                    pathname === href
                      ? 'bg-paper-soft text-ink'
                      : 'text-muted hover:bg-paper-soft hover:text-ink'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block rounded-full border border-line px-4 py-2 text-center text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
