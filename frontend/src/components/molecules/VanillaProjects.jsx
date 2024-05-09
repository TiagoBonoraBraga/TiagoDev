import Link from "next/link";
import Image from "next/image";
import { javascriptProjects, wordpressProjects } from "@/utils/mocks";
import CustomCard from "../atoms/CustomCard";
export default function VanillaProjects() {
  return (
    <>
      <h2 className="flex justify-center mt-10 text-lg font-bold tracking-wider dark:text-white-500 ">
        Projetos Javascript Vanilla
      </h2>
      <div className="flex flex-row ss:flex-col justify-center items-center w-2/3 ss:ss:w-[120%] gap-5 ">
        {javascriptProjects.map((javascriptProject, index) => (
          <CustomCard key={index}>
            <div className="flex justify-center items-center p-3">
              <Image
                src={javascriptProject.image}
                width={300}
                height={200}
                alt="Project"
                className="rounded"
              />
            </div>
            <div>
              <h2 className="flex justify-center mb-2 mt-5 text-2xl font-bold tracking-wider text-black-500">
                {javascriptProject.title}
              </h2>
              <p className="mt-2 mb-2 text-justify p-5 ">
                {javascriptProject.description}
              </p>

              <Link
                href={javascriptProject.repository}
                className="flex justify-center items-center mb-3"
                Target="_blank"
              >
                GitHub - Repositório
              </Link>
              <Link
                href={javascriptProject.link}
                Target="_blank"
                className="flex justify-center items-center mb-3"
              >
                {javascriptProject.deploy}
              </Link>
            </div>
          </CustomCard>
                   
        ))}
      </div>
    </>
  );
}
