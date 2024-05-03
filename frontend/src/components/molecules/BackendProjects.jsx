import Link from "next/link";
import Image from "next/image";
import { backendProjects } from '@/utils/mocks';
import CustomCard from "../atoms/CustomCard";

export default function BackendProjects() {
  return (
    <>
      <h2 className="flex justify-center mt-10 text-lg font-bold tracking-wider dark:text-white-500">Projetos Backend</h2>
      <div className="flex flex-row justify-center items-center w-2/3 gap-5">


        {backendProjects.map((backendProject, index) =>
          <CustomCard key={index}>
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

              <Link href={backendProject.repository} className="flex justify-center items-center mb-3">Repositório GitHub</Link>
              <Link href={backendProject.deploy} className="flex justify-center items-center mb-3">{backendProject.deploy}</Link>

            </div>
          </CustomCard>
        )}
      </div>
    </>


  )
}