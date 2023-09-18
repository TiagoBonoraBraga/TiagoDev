import SeoHead from "@/components/organisms/SeoHead";
import Whatsapp from "@/components/atoms/Whatsapp";
import SecondHeader from "@/components/molecules/SecondHeader";
import CardTecno from "@/components/molecules/CardTecno";
import Layout from "@/components/templates/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <SeoHead />
        <SecondHeader />
        <CardTecno />
        <Whatsapp />
      </Layout>
    </>
  );
}
