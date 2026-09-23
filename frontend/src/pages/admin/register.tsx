import AdminCardTecno from "@/components/organisms/AdminCardTecno";
import AdminCardProjects from "@/components/organisms/AdminCardProjects";
import LayoutAdm from '@/components/templates/LayoutAdm';

// export async function getServerSideProps(context) {
//     const cookies = nookies.get(context);
//     console.log('cookies', cookies);
//     const SECRET_PASSWORD = '123456'
//     const USERPASSWORD = cookies.SECRET_PASSWORD;
//     const isAuthorized = SECRET_PASSWORD === USERPASSWORD;

//     if(!isAuthorized){
//       console.log('NÂO Autorizado');
//       return {
//         redirect: {
//           permanent: false,
//           destination: '/login',
//         }
//       };
//     }
//     console.log('Autorizado!!!');
//     return {
//       props: {}
//     }
//   }

export default function Registe() {
    return (
        <LayoutAdm>
            <main className="mx-auto max-w-6xl px-6 pb-24 pt-10 md:pt-14">
                <p className="font-mono text-xs tracking-wider text-accent">{'// admin'}</p>
                <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                    Novos registros
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                    Cadastre novas tecnologias e projetos para exibir no portfólio.
                </p>

                <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
                    <AdminCardTecno />
                    <AdminCardProjects />
                </div>
            </main>
        </LayoutAdm>
    )
}
