import { Inter } from "next/font/google";
import Layout from "@/components/templates/Layout";
import SeoHead from "@/components/organisms/SeoHead";
import Whatsapp from "@/components/atoms/Whatsapp";
import SecondHeader from "@/components/molecules/SecondHeader";
import BoxTech from "@/components/molecules/BoxTech";





export default function Home() {
 
  return (
    <>
      <SeoHead />
      <SecondHeader />  
      <BoxTech />
              
      <Whatsapp />     
    </>
   
  );
}
