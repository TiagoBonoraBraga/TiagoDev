// import { useState } from "react";
// import { useRouter } from "next/router";
// import nookies from 'nookies';
import SeoHead from "@/components/organisms/SeoHead";
import Whatsapp from "@/components/atoms/Whatsapp";
import SecondHeader from "@/components/molecules/SecondHeader";
import CardTecno from "@/components/molecules/CardTecno";
import Layout from "@/components/templates/Layout";


// export async function getServerSideProps(context) {
//   const cookies = nookies.get(context);
//   console.log('cookies', cookies);
//   const SECRET_PASSWORD = '123456'
//   const USERPASSWORD = cookies.SECRET_PASSWORD;
//   const isAuthorized = SECRET_PASSWORD === USERPASSWORD;

//   if(!isAuthorized){
//     console.log('NÂO Autorizado');
//     return {
//       redirect: {
//         permanent: false,
//         destination: '/login',
//       }
//     };  
//   }
//   console.log('Autorizado!!!');
//   return {
//     props: {}
//   }
// } 

export default function Home() {

  return (
    <>
      <Layout>
        <main className="h-100vh ">
          <SeoHead />
          <SecondHeader />
          <CardTecno />
          <Whatsapp />
        </main>
      </Layout>
    </>
  );
}
