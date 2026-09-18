import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=5541988082384&text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio!'

const channels = [
  {
    Icon: FiMail,
    label: 'E-mail',
    value: 'ogait.desenvolvedor@gmail.com',
    href: 'mailto:ogait.desenvolvedor@gmail.com',
  },
  {
    Icon: FiPhone,
    label: 'WhatsApp',
    value: '+55 (41) 98808-2384',
    href: WHATSAPP_URL,
  },
  {
    Icon: FiMapPin,
    label: 'Localização',
    value: 'Curitiba · BR (remoto)',
    href: null,
  },
]

const socials = [
  { Icon: FiGithub, label: 'GitHub', href: 'https://github.com/TiagoBonoraBraga' },
  { Icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/tiagocode/' },
]

export default function ContactForm() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        {/* Coluna de canais diretos */}
        <div>
          <p className="font-mono text-xs tracking-wider text-accent">
            {'// canais diretos'}
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Prefere ir direto ao ponto?
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted">
            Escolha o canal que for mais confortável pra você. Estou de olho em
            todos eles.
          </p>

          <ul className="mt-8 space-y-3">
            {channels.map(({ Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-paper">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-medium text-ink">
                      {value}
                    </span>
                  </span>
                </>
              )

              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-line bg-paper p-3 transition-colors hover:border-accent/40"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 rounded-xl border border-line bg-paper p-3">
                      {inner}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>

          <div className="mt-8 flex items-center gap-3">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-paper-soft px-4 py-2 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Disponível para novos projetos
          </div>
        </div>

        {/* CTA de WhatsApp (no lugar do antigo formulário) */}
        <div className="flex flex-col justify-center rounded-2xl border border-line bg-paper p-6 shadow-sm md:p-10">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <FaWhatsapp size={24} />
          </span>
          <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink">
            Fale conosco
          </h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted md:text-base">
            Me chame no WhatsApp e conte um pouco sobre seu projeto, ideia ou
            oportunidade — respondo o quanto antes.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent sm:w-fit"
          >
            <FaWhatsapp size={18} />
            Fale conosco
            <FiArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
