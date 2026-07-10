import Image from 'next/image'
import { SiNestjs } from 'react-icons/si'
import { imagens, imagensBackend, imagesDesing } from '../../utils/mocks'

const groups = [
  { label: 'Front-end', items: imagens },
  {
    label: 'Back-end',
    items: [
      ...imagensBackend,
      {
        Icon: SiNestjs,
        color: '#e0234e',
        name: 'NestJS',
        url: 'https://docs.nestjs.com',
      },
    ],
  },
  { label: 'Ferramentas', items: imagesDesing },
]

export default function TechStack() {
  return (
    <section className="border-y border-line bg-paper-soft">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="font-mono text-xs tracking-wider text-accent">{'// stack'}</p>
        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
          Tecnologias que eu uso
        </h2>

        <div className="mt-10 flex flex-col gap-10">
          {groups.map((group) => (
            <div
              key={group.label}
              className="grid gap-4 md:grid-cols-[200px_1fr] md:items-start"
            >
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted md:pt-3">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((tech, i) => {
                  const Icon = tech.Icon
                  const Tag = tech.url ? 'a' : 'div'
                  return (
                    <Tag
                      key={i}
                      {...(tech.url && {
                        href: tech.url,
                        target: '_blank',
                        rel: 'noreferrer',
                        'aria-label': `Documentação de ${tech.name}`,
                      })}
                      className="group relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-xl border border-line bg-paper shadow-sm grayscale transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md hover:grayscale-0"
                    >
                      {Icon ? (
                        <Icon
                          style={{ color: tech.color }}
                          className="h-7 w-7"
                        />
                      ) : (
                        <Image
                          src={tech.img}
                          alt={tech.name || ''}
                          width={40}
                          height={40}
                          className="h-7 w-auto"
                        />
                      )}
                      {tech.name && (
                        <span className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-ink px-2 py-1 font-mono text-[11px] text-paper opacity-0 shadow-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          {tech.name}
                        </span>
                      )}
                    </Tag>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
