import AdminFormTech from "../molecules/AdminFormTech"

const groups = ['Front-end', 'Back-end', 'Projeto e design']

export default function AdminCardTecno() {
    return (
        <section className="rounded-2xl border border-line bg-paper p-6 shadow-md md:p-8">
            <p className="font-mono text-xs tracking-wider text-accent">{'// tecnologias'}</p>
            <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-ink">
                Adicionar tecnologias
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
                Cadastre o nome, a imagem e o link da documentação — é para ele que
                a tecnologia aponta quando clicada na stack da home.
            </p>

            <div className="mt-8 flex flex-col gap-7">
                {groups.map((label) => (
                    <div key={label}>
                        <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                            {label}
                        </h3>
                        <div className="mt-3">
                            <AdminFormTech group={label} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
