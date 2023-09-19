import Link from "next/link";
import Image from "next/image";
import { backendProjects} from '@/utils/mocks';

export default function BackendProjects(){
    return(
        <>
        <h2 className="flex justify-center mt-10 text-lg font-extrabold">Projetos Backend</h2>
         <div className="flex flex-row justify-center items-center w-2/3 gap-5">


         {backendProjects.map((backendProject, index) => 
        <div key={index} className="flex flex-col w-2/3  ss:flex ss:flex-col ss:max-w-sm ring-2 mt-3 mb-10 ring-blue-200 bg-blue-100 bg-opacity-25 rounded-lg ">
          <div className="flex justify-center items-center p-3">
            <Image
                src={backendProject.image}
                width={200}
                height={200}
                alt="Project"
                className="rounded"
            />
          </div>
          <div>

          <h2 className="flex justify-center mb-2 mt-5 text-2xl font-bold tracking-tight text-black-500">
            {backendProject.title}
          </h2>
          <p className="mt-2 mb-2 text-justify p-5 ">
           {backendProject.description}
          </p>
          
          <Link href="https://github.com/TiagoBonoraBraga/TiagoDev" className="flex justify-center items-center mb-3">Repositório GitHub</Link>
          <Link href="https://www.foodbox.cia.tv" className="flex justify-center items-center mb-3">www.foodbox.cia.tv</Link>
         
          </div>
        </div>
        )}
         </div>
        </>


    )
}