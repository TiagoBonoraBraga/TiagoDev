export default function ProjectsHero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Camada ambiente: tint + textura de pontos + brilho de destaque (decorativa) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[460px] bg-gradient-to-b from-accent/10 to-transparent" />
        <div className="absolute inset-0 [background-image:radial-gradient(var(--line)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_55%_50%_at_50%_0%,#000,transparent_70%)] [-webkit-mask-image:radial-gradient(ellipse_55%_50%_at_50%_0%,#000,transparent_70%)]" />
        <div className="absolute left-1/2 top-[-12%] h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-28 pb-10 md:pt-36 md:pb-14">
        <p className="animate-fade-up font-mono text-xs tracking-wider text-accent sm:text-sm">
          {'// meus trabalhos'}
        </p>

        <h1 className="animate-fade-up mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink [animation-delay:60ms] sm:text-6xl">
          Projetos que{' '}
          <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
            coloquei no ar
          </span>
          <span className="text-accent">.</span>
        </h1>

        <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-muted [animation-delay:140ms] md:text-xl">
          Uma seleção de aplicações que construí — do front-end ao back-end.
          Agrupadas pela tecnologia principal; toque em um card para ver os
          detalhes.
        </p>
      </div>
    </section>
  )
}
