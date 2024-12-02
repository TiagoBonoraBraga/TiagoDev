import nookies from 'nookies';
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
        <>
        <LayoutAdm>
            <main className="flex flex-row justify-center items-center w-auto ml-10 mr-10 ring-2 ss:ring-0 ring-blue-300 mt-20 gap-28 ss:gap-0 mb-60 ss:flex ss:flex-col ss:justify-center ss:items-center ">
            <AdminCardTecno />
            <AdminCardProjects />
            </main>
        </LayoutAdm>        
        </>
    )
}