import { FiLayout, FiServer, FiPenTool } from 'react-icons/fi'

const services = [
  {
    Icon: FiLayout,
    title: 'Front-end',
    desc: 'Interfaces responsivas e acessíveis com React, Next.js e Tailwind CSS.',
  },
  {
    Icon: FiServer,
    title: 'Back-end',
    desc: 'APIs e regras de negócio com Node, NestJS, Express e bancos SQL/NoSQL.',
  },
  {
    Icon: FiPenTool,
    title: 'Design & Gestão',
    desc: 'Prototipação no Figma e organização de projetos com Miro e Trello.',
  },
]

export default function AboutServices() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <p className="font-mono text-xs tracking-wider text-accent">
        {'// o que eu faço'}
      </p>
      <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
        Como eu posso ajudar
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map(({ Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-2xl border border-line bg-paper p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-paper">
              <Icon size={20} />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
