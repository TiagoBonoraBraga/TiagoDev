import Image from "next/image";
// import Fotoimage from "@/public/images/fotoimage.png";
import {javascriptProjects} from '@/utils/mocks'

export default function CardProject() {
    console.log("aki",javascriptProjects )

  return (
    <>
        <h2 className="flex justify-center mt-10 text-lg font-extrabold">Projetos Javascript Vanilla</h2>
      <section className="flex flex-row justify-center items-center ss:flex ss:flex-col gap-10">
        {javascriptProjects.map((javascriptProject, index) => 
        <div key={index} className="max-w-sm ring-2 mt-10 mb-10 ring-blue-200 bg-blue-100 bg-opacity-25 rounded-lg hadow dark:bg-black-500 dark:border-black-500">
          <div className="flex justify-center items-center">
            <Image
                src={javascriptProject.image}
                width={300}
                height={300}
                alt="Project"
                className="rounded mt-5 "
            />
          </div>
          <h2 className="flex justify-center mb-2 mt-5 text-2xl font-bold tracking-tight text-black-500">
            {javascriptProject.title}
          </h2>
          <p className="mt-2 mb-2 text-justify p-5">
           {javascriptProject.description}
          </p>
          <div className="flex flex-col justify-center items-center mb-5 gap-1">
          <h3>Github - {javascriptProject.repository}</h3>
          <h3>Deploy - {javascriptProject.deploy}</h3>
          </div>
        </div>
        )}
        </section>
    </>
  );
}
