import { Inter } from "next/font/google";
import Layout from "@/components/templates/Layout";
import Whatsapp from "@/components/atoms/whatsapp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Layout>
      </Layout>
        
    </main>
  );
}
