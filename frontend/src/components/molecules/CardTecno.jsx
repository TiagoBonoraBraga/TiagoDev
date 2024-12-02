import Image from "next/image";
import {
  imagens,
  imagensBackend,
  imagesDesing,
} from "@/utils/mocks";
import CustomTitle from "../atoms/CustomTitle";


export default function CardTecno() {
  return (
    <section className=" flex flex-col items-center ss:flex ss:flex-col ss:justify-center ss:items-center  gap-5 justify-center p-10  ">
      {/* <Background /> */}
      <div className="flex flex-col justify-start items-center mt-5 ring-2 ring-blue-100 dark:ring-black-500 bg-blue-200 dark:bg-gray-100 bg-opacity-20 p-5 rounded-lg">
        <CustomTitle title="FRONTEND" />
        <div className="flex flex-wrap justify-center">
          {imagens.map((image, index) => (
            <div
              key={index}
              className="flex justify-center sm:w-1/2 md:w-1/4 lg:w-1/6 p-2"
            >
              <Image
                src={image.img}
                width={100}
                height={100}
                alt="Tecnologias"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>


      <div className="flex flex-col items-center mt-5 ring-2 ring-blue-100 dark:ring-black-500 bg-blue-200 bg-opacity-20 dark:bg-gray-100 p-5 rounded-lg">
        <CustomTitle title="BACKEND" />
        <div className="flex flex-wrap gap-3 justify-center">
          {imagensBackend.map((imageBackend, index) => (
            <div
              key={index}
              className="flex justify-center sm:w-1/2 md:w-1/4 lg:w-1/6 p-2"
            >
              <Image
                src={imageBackend.img}
                width={100}
                height={100}
                alt="Tecnologias"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>


      <div className="flex flex-col items-center mt-5 ring-2 ring-blue-100 dark:ring-black-500 bg-blue-200 dark:bg-gray-100 bg-opacity-20 p-5 rounded-lg">
        <CustomTitle title="GERENCIAMENTO DE PROJETOS E DESING " />
        <div className="flex flex-row justify-center items-center mt-5 gap-3">
          {imagesDesing.map((imageDesing, index) => (
            <div key={index}>
              <Image
                src={imageDesing.img}
                width={100}
                height={100}
                alt="Tecnologias"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
