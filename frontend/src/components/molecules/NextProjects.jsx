import Link from "next/link";
import Image from "next/image";
import { nextProjects } from '@/utils/mocks';
import CustomCard from "../atoms/CustomCard";
export default function NextProjects() {
  return (
    <>
      <h2 className="flex justify-center items-center  mt-10 text-lg font-bold tracking-wider dark:text-white-500">Projetos Next.js</h2>
      <div className="flex flex-row ss:flex-col justify-center items-center w-2/3 ss:w-[120%] gap-5">


        {nextProjects.map((nextProject, index) =>
          // <div key={index} className="flex flex-col w-2/3  ss:flex ss:flex-col ss:max-w-sm ring-2 mt-3 mb-10 ring-blue-200 bg-blue-100 bg-opacity-25 rounded-lg ">
          <CustomCard key={index}>
            <div className="flex justify-center items-center p-3">
              <Image
                src={nextProject.image}
                width={300}
                height={200}
                alt="Project"
                className="rounded"
              />
            </div>
            <div>

              <h2 className="flex justify-center mb-2 mt-5 text-2xl font-bold tracking-tight text-black-500">
                {nextProject.title}
              </h2>
              <p className="mt-2 mb-2 text-justify p-5 ">
                {nextProject.description}
              </p>

              <Link href={nextProject.repository} className="flex justify-center items-center mb-3">Repositório GitHub</Link>
              <Link href={nextProject.deploy} className="flex justify-center items-center mb-3">{nextProject.deploy}</Link>
            </div>
          </CustomCard>
        )}
      </div>
    </>
  )
}