import { useState, type ChangeEvent, type FormEvent } from 'react'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from 'react-icons/fi'

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
    href: 'https://api.whatsapp.com/send?phone=5541988082384&text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio!',
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

type FormValues = { name: string; email: string; phone: string; message: string }
type FormErrors = Partial<Record<keyof FormValues, string>>
type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const initialValues: FormValues = { name: '', email: '', phone: '', message: '' }

function validate(v: FormValues) {
  const errors: FormErrors = {}
  if (v.name.trim().length < 2) errors.name = 'Informe seu nome.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    errors.email = 'Digite um e-mail válido.'
  if (v.phone.trim().length < 8) errors.phone = 'Digite um telefone válido.'
  if (v.message.trim().length < 5)
    errors.message = 'Conte um pouco mais (mín. 5 caracteres).'
  return errors
}

interface FieldProps {
  id: string
  label: string
  type?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  placeholder?: string
  multiline?: boolean
  rows?: number
}

function Field({ id, label, type = 'text', value, onChange, error, placeholder, multiline, rows }: FieldProps) {
  const base = `w-full rounded-xl border bg-paper-soft px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 ${
    error
      ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20'
      : 'border-line focus:border-accent focus:ring-accent/20'
  }`

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted"
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={!!error}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={!!error}
          className={base}
        />
      )}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
          <FiAlertCircle size={13} /> {error}
        </p>
      )}
    </div>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = e.target.name as keyof FormValues
    const { value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
    if (status !== 'idle' && status !== 'sending') setStatus('idle')
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('sending')

    // TODO: integrar com o backend (NestJS) — envio do formulário de contato.
    // Enquanto o backend não existir, o envio fica inativo.
    const response = null

    if (response) {
      setStatus('success')
      setValues(initialValues)
    } else {
      setStatus('error')
    }
  }

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

        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-line bg-paper p-6 shadow-sm md:p-8"
        >
          <h2 className="font-display text-xl font-bold tracking-tight text-ink">
            Envie uma mensagem
          </h2>
          <p className="mt-1.5 text-sm text-muted">
            Preencha o formulário e eu retorno o quanto antes.
          </p>

          {status === 'success' && (
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/10 p-4 text-sm text-ink">
              <FiCheckCircle className="mt-0.5 shrink-0 text-accent" size={18} />
              <p>
                Mensagem enviada! Obrigado pelo contato — retorno o mais rápido
                possível.
              </p>
            </div>
          )}
          {status === 'error' && (
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-400/40 bg-red-500/10 p-4 text-sm text-ink">
              <FiAlertCircle className="mt-0.5 shrink-0 text-red-500" size={18} />
              <p>
                Algo deu errado ao enviar. Tente novamente ou use um dos canais
                ao lado.
              </p>
            </div>
          )}

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field
              id="name"
              label="Nome"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Seu nome"
            />
            <Field
              id="email"
              label="E-mail"
              type="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="voce@email.com"
            />
          </div>

          <div className="mt-4">
            <Field
              id="phone"
              label="Telefone"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              error={errors.phone}
              placeholder="(41) 90000-0000"
            />
          </div>

          <div className="mt-4">
            <Field
              id="message"
              label="Mensagem"
              value={values.message}
              onChange={handleChange}
              error={errors.message}
              placeholder="Conte um pouco sobre o que você precisa…"
              multiline
              rows={5}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {status === 'sending' ? (
              'Enviando…'
            ) : (
              <>
                Enviar mensagem
                <FiSend
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
