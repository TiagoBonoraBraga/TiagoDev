import { Inter } from "next/font/google";
import Layout from "@/components/templates/Layout";


import SeoHead from "@/components/organisms/SeoHead";
// import ContactForm from "@/components/organisms/ContactForm";

const inter = Inter({ subsets: ["latin"] });  

export default function Home({ metaData }) {
  console.log("w", metaData);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <SeoHead />
      <Layout>  
     
       
      </Layout>
    </main>
  );
}

// export const getServerSideProps = async () => {
//   const res = await api.getMeta(); 
//   const metaData = await res.json()
//   return { props:  {metaData} };
// }

// export async function getServerSideProps () {
//   const res = await fetch('http://localhost:1337/api/seo') 
//   const metaData = await res.json()
//   const token =
//       '4eaf15598eabfd4bbfd625aa53898e43497832169888d8c1995c14e6f511ce5a4f7c6f3551faa845d3fe4d2c6962712b9b36b5731dd7f98539c3fe90246c386c322b97ffda65fe67e86f3c700b0673522ebf04a27a052bd4ad1b3b8a0b6afcc0c79cea0823b9ea3e0d670d412147468485d55ae0d7a0449b465c555d8152aae7'
//   return {      
//       Authorization: 'Bearer ' + token,
//       props:  {metaData}     
//   }
// }
