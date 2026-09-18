import Link from 'next/link'

export default function CustomLogo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-baseline font-display text-xl font-bold tracking-tight text-ink"
    >
      Tiago Dev
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125"
      />
    </Link>
  )
}
