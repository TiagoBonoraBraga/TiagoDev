import { Inter } from "next/font/google";
import Layout from "@/components/templates/Layout";

import SeoHead from "@/components/organisms/SeoHead";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
