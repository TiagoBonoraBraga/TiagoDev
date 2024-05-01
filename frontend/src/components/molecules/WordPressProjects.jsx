import Link from "next/link";
import Image from "next/image";
import { wordpressProjects } from "@/utils/mocks";
import CustomCard from "../atoms/CustomCard";
export default function WordPress() {
  return (
    <>
      <h2 className="flex justify-center mt-10 text-lg font-bold tracking-wider dark:text-white-500">
        Projetos WordPress
      </h2>
      <div className="flex flex-row justify-center items-center w-2/3 gap-5">
        {wordpressProjects.map((wordpressProject, index) => (
          // <div
          //   key={index}
          //   className="flex flex-col w-2/3  ss:flex ss:flex-col ss:max-w-sm ring-2 mt-3 mb-10 ring-blue-200 bg-blue-100 bg-opacity-25 rounded-lg "
          // >
          <CustomCard key={index}>

            <div className="flex justify-center items-center p-3">
              <Image
                src={wordpressProject.image}
                width={300}
                height={200}
                alt="Project"
                className="rounded"
              />
            </div>
            <div>
              <h2 className="flex justify-center mb-2 mt-5 text-2xl font-bold tracking-wider text-black-500">
                {wordpressProject.title}
              </h2>
              <p className="mt-2 mb-2 text-justify p-5 ">
                {wordpressProject.description}
              </p>


            {/* {wordpressProject.deploy} */}
            </div>

              <Link
                href={wordpressProject.link}
                Target="_blank"
                className="flex justify-center items-center mb-3"
                >
                {wordpressProject.deploy}
              </Link>
              </CustomCard>
        ))}
      </div>
    </>
  )
}