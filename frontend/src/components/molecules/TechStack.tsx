import Image from 'next/image'
import { SiNestjs } from 'react-icons/si'
import { imagens, imagensBackend, imagesDesing } from '../../utils/mocks'
import Marquee from '../atoms/Marquee'
import type { TechItem } from '@/types'

interface TechGroup {
  label: string
  items: TechItem[]
}

const groups: TechGroup[] = [
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

const cardClassName =
  'group relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-xl border border-line bg-paper shadow-sm grayscale transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md hover:grayscale-0'

function TechCard({ tech }: { tech: TechItem }) {
  const Icon = tech.Icon
  const inner = (
    <>
      {Icon ? (
        <Icon
          style={{ color: tech.color }}
          className="h-7 w-7"
        />
      ) : tech.img ? (
        <Image
          src={tech.img}
          alt={tech.name || ''}
          width={40}
          height={40}
          className="h-7 w-auto"
        />
      ) : null}
      {tech.name && (
        <span className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-ink px-2 py-1 font-mono text-[11px] text-paper opacity-0 shadow-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {tech.name}
        </span>
      )}
    </>
  )

  if (tech.url) {
    return (
      <a
        href={tech.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Documentação de ${tech.name}`}
        className={cardClassName}
      >
        {inner}
      </a>
    )
  }
  return <div className={cardClassName}>{inner}</div>
}

// Percurso ≈ janela do carrossel (max-w-md ~450px) + largura da fileira
// (~68px/card); o extra por índice varia levemente a velocidade entre as linhas
function rowDuration(count: number, index: number) {
  return Math.round((450 + count * 68) / 40) + index * 3
}

export default function TechStack() {
  return (
    <section className="border-y border-line bg-paper-soft">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="font-mono text-xs tracking-wider text-accent">{'// stack'}</p>
        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
          Tecnologias que eu uso
        </h2>

        <div className="mt-10 flex flex-col gap-10">
          {groups.map((group, index) => (
            <div
              key={group.label}
              className="grid gap-4 md:grid-cols-[200px_1fr] md:items-start"
            >
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted md:pt-3">
                {group.label}
              </h3>
              <Marquee
                duration={rowDuration(group.items.length, index)}
                offset={0.15 + index * 0.28}
                className="-mt-12 max-w-md pt-12"
              >
                {group.items.map((tech, i) => (
                  <TechCard key={i} tech={tech} />
                ))}
              </Marquee>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
