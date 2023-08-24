import { Inter } from "next/font/google";
import Layout from "@/components/templates/Layout";
import SeoHead from "@/components/organisms/SeoHead";
import Whatsapp from "@/components/atoms/Whatsapp";
import SecondHeader from "@/components/molecules/SecondHeader";




export default function Home() {
 
  return (
    <>
      <SeoHead />
      <SecondHeader />           
      <Whatsapp />     
    </>
   
  );
}
