import Image from "next/image";
import profilePicture from "@/public/images/profilePicture.jpg";
export default function CardAbout() {
    return(
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
             Me chamo Tiago Bonora braga tenho 39 anos sou casado em moro em Curitiba,
Venho de uma familia bem estruturada, o que me deu a oportunidade de focar nos estudos
desde cedo, entrei na faculdade de Ed.Fisica ja com 17 anos e me formei com 21 anos, após
esse periodo tambem realizei uma pós graduação na área e trabalhei por 8 anos com musculação
e ed. especial como pss - processo seleção simplificado.
 Após esse periodo ja em 2012 comecei a sentir que o crescimento na area da ed. fisica estava limitado a aulas em academias e personal, e mesmo tendo especialização na area
ainda continuava com a mesma remuneração de pessoas que nao tinham o mesmo grau de formação.
 Por esse motivo tive a oportunidade de mudar de area, para a area de vendas, visando uma 
melhor colocação salarial. Abri uma empresa de vendas de pisos laminado em curitiba, pois minha familia vem desta area de vendas de artefatos para casa, chegando a ter 3 funcionarios.
 Essa experiencia foi muito valida , pois tive a oportunidade de gerenciar uma equipe
e aprender muito com essa experiencia, e assim conseguindo atingir o lucro que desejava.
 Em 2016 quando começou a crise nesta area no brasil, sendo mutio dificil ter os lucros
que estava tendo anteriormente. Então resolvi voltar a um sonho antigo que foi minha segunda opção quando entrei na faculdade de ed.fisica, que foi a area da t.i. Busquei cursos na area e vim me desenvolvendo juntamente com o trabalho com pisos laminados.
ate que consegui um estagio na area no segundo semestre de 2021, atuando como frontend.
ja no estagio fui encaminhado a fazer uma formação mais profunda na area
Ate que fui indicado por uma amigo a fazer um curso de fullstack pela Blue Ed.tech aonde consegui aprimorar mais meus conhecimentos e ver que esta é minha paixao, a Tecnologia
Atualmente trabalho como Freelancer na empresa Fpinfo como desenvolvedor Frontend e também na empresa BrGiga desenvolvendo sites em WordPress e WooCommerce.

Me considero ágil e consistente em aprender uma nova linguagem e me adaptar a qualquer mudança, pronto para superar qualquer desafio.
Se pudesse me definir em 3 palavras certamente seria: Otimista, Perseverante e Esforçado!
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