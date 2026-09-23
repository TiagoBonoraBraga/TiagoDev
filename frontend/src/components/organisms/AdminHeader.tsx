import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { FiLogOut } from 'react-icons/fi'
import CustomLogo from '@/components/atoms/CustomLogo'
import ThemeToggle from '@/components/atoms/ThemeToggle'

export default function AdminHeader() {
  const router = useRouter()

  function handleLogout() {
    Cookies.remove('SECRET_PASSWORD', { path: '/' })
    router.push('/')
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <CustomLogo />
          <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] tracking-wide text-accent">
            admin
          </span>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <FiLogOut size={15} /> Sair
          </button>
        </div>
      </nav>
    </header>
  )
}
