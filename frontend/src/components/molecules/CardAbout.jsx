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
             <p className="text-gray-700 text-base">
               It is a long established fact that a reader will be distracted
               by the readable content of a page when looking at its layout.
               The point of using Lorem Ipsum is that it has a more-or-less
               normal distribution of letters, as opposed to using 'Content
               here, content here', making it look like readable English. Many
               desktop publishing packages and web page editors now use Lorem
               Ipsum as their default model text, and a search for 'lorem
               ipsum' will uncover many web sites still in their infancy.
               Various versions have evolved over the years, sometimes by
               accident, sometimes on purpose (injected humour and the like).
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