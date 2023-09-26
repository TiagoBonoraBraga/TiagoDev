import Link from "next/link";
import Image from "next/image";
import { javascriptProjects } from "@/utils/mocks";
export default function VanillaProjects() {
  return (
    <>
      <h2 className="flex justify-center mt-10 text-lg font-extrabold">
        Projetos Javascript Vanilla
      </h2>
      <div className="flex flex-row justify-center items-center w-2/3 gap-5">
        {javascriptProjects.map((javascriptProject, index) => (
          <div
            key={index}
            className="flex flex-col w-2/3  ss:flex ss:flex-col ss:max-w-sm ring-2 mt-3 mb-10 ring-blue-200 bg-blue-100 bg-opacity-25 rounded-lg "
          >
            <div className="flex justify-center items-center p-3">
              <Image
                src={javascriptProject.image}
                width={200}
                height={200}
                alt="Project"
                className="rounded"
              />
            </div>
            <div>
              <h2 className="flex justify-center mb-2 mt-5 text-2xl font-bold tracking-tight text-black-500">
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
                href="https://www.foodbox.cia.tv"
                Target="_blank"
                className="flex justify-center items-center mb-3"
              >
                {javascriptProject.deploy}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
