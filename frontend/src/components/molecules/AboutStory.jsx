const values = [
  { word: 'Otimista', desc: 'Encaro cada desafio enxergando a oportunidade por trás dele.' },
  { word: 'Perseverante', desc: 'Não desisto até a solução ficar de pé e bem feita.' },
  { word: 'Esforçado', desc: 'Dedicação total em cada detalhe do projeto.' },
]

export default function AboutStory() {
  return (
    <section className="border-y border-line bg-paper-soft">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="font-mono text-xs tracking-wider text-accent">
          {'// minha história'}
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
          Um pouco da minha jornada
        </h2>

        <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-ink/80 md:text-lg">
          <p>
            Sou desenvolvedor full-stack e gosto de construir soluções que
            sejam, ao mesmo tempo, bonitas, rápidas e fáceis de manter. Do
            front-end ao back-end, meu foco é transformar ideias em código
            eficiente com um design intuitivo.
          </p>
          <p>
            Mais do que escrever código, procuro entender o problema por trás de
            cada projeto — colaborando de perto pra garantir que a solução
            atenda tanto aos requisitos técnicos quanto aos objetivos de
            negócio.
          </p>
          <p>
            Estou sempre estudando e acompanhando novas tecnologias pra entregar
            produtos modernos. Me adapto rápido a novas linguagens e desafios —
            e se eu tivesse que me definir em três palavras, seriam estas:
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {values.map(({ word, desc }) => (
            <div
              key={word}
              className="rounded-2xl border border-line bg-paper p-6"
            >
              <span
                aria-hidden="true"
                className="block h-1 w-8 rounded-full bg-accent"
              />
              <h3 className="mt-4 font-display text-xl font-bold text-ink">
                {word}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
