import Image from "next/image";
import profilePicture from "@/public/images/profilePicture.jpg";
export default function CardAbout() {
  return (
    <>
      <section classNameName="flex flex-row  ss:flex ss:flex-col ss:justify-center ss:items-center mt-20 gap-5 justify-center  mb-10">

        <div className=" mt-5 max-w-sm w-full lg:max-w-full lg:flex">
          <div className="  flex-none bg-cover text-center overflow-hidden p-8 ">
            <Image
              src={profilePicture}
              width={400}
              height={400}
              alt="About Picture"
              className="rounded-full"
            />
          </div>
          <div className="border border-blue-300 bg-blue-200 bg-opacity-20 mb-10 mr-5 ss:mr-0 ss:flex ss:justify-center  rounded p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                Sobre mim...
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                Tiago Bonora Braga - Desenvolvedor FullStack
              </div>
              <p className="text-gray-700 text-base text-justify">
                Sou um Desenvolvedor de Software Full Stack apaixonado pela criação de soluções tecnológicas inovadoras. Meu compromisso é entregar produtos de alta qualidade que superem as expectativas dos clientes. Do front-end ao back-end, meu objetivo é transformar ideias em realidade por meio de código eficiente e design intuitivo. Minha abordagem vai além do código. Eu me esforço para compreender as necessidades específicas dos clientes, colaborando de perto para garantir que cada solução atenda não apenas aos requisitos técnicos, mas também às metas de negócios. Sou apaixonado por aprender e me manter atualizado com as últimas tendências tecnológicas para oferecer soluções modernas e inovadoras. Ao escolher minha expertise, você está optando por um parceiro estratégico comprometido em transformar desafios em oportunidades. Estou pronto para enfrentar projetos complexos, oferecendo soluções que impulsionam o crescimento e a inovação. Vamos juntos criar software que faz a diferença! Me considero ágil e consistente em aprender uma nova linguagem e me adaptar a qualquer mudança, pronto para superar qualquer desafio. Se pudesse me definir em três palavras, certamente seria: Otimista, Perseverante e Esforçado!

              </p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-900 leading-none mb-2">Tiago Dev</p>
                <p className="text-gray-600">Hoje é dia {new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()} - {new Date().getHours()}:{new Date().getMinutes()}hrs</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}