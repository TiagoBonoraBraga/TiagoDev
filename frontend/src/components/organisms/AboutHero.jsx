import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import profile from '../../../public/images/profile.png'

const stats = [
  { value: '10+', label: 'projetos entregues' },
  { value: 'Full-stack', label: 'front · back · design' },
  { value: 'Curitiba', label: 'BR · remoto' },
]

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-accent/10 to-transparent" />
        <div className="absolute right-[8%] top-[-8%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-12 pb-14 md:grid-cols-[1.15fr_1fr] md:items-center md:pt-20 md:pb-16">
        <div>
          <p className="font-mono text-xs tracking-wider text-accent sm:text-sm">
            {'// sobre mim'}
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Oi, eu sou o{' '}
            <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
              Tiago
            </span>
            .
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            Desenvolvedor full-stack apaixonado por transformar ideias em
            produtos digitais — da interface ao banco de dados.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              Ver projetos <FiArrowUpRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-line bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Entrar em contato
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden="true"
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/10 blur-2xl"
          />
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-paper-soft shadow-xl">
            <Image
              src={profile}
              alt="Tiago Braga"
              width={520}
              height={650}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-14 md:pb-20">
        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-paper p-6">
              <dt className="font-display text-2xl font-bold text-ink md:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
