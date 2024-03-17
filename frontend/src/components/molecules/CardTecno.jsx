import Image from "next/image";
import {
  imagens,
  imagensBackend,
  imagesDesing,
  imagens4,
  imagens5,
  imagens6,
} from "@/utils/mocks";
import CustomTitle from "../atoms/CustomTitle";
// import Background from "@/components/atoms/Background";

export default function CardTecno() {
  return (
    <section className="flex flex-wrap items-center ss:flex ss:flex-col ss:justify-center ss:items-center  gap-5 justify-center  mb-20">
      {/* <Background /> */}
      <div className="flex flex-col justify-start items-center mt-5 ring-2 ring-blue-100 bg-blue-200 bg-opacity-20 p-5 rounded-lg">
        <CustomTitle title="FRONTEND" />
        <div className="flex flex-row gap-3">
          {imagens.map((image, index) => (
            <div key={index}>
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

      <div className="flex flex-col items-center mt-5 ring-2 ring-blue-100 bg-blue-200 bg-opacity-20 p-5 rounded-lg">
        <CustomTitle title="BACKEND" />
        <div className="flex flex-row gap-3">
          {imagensBackend.map((imageBackend, index) => (
            <div key={index}>
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

      <div className="flex flex-col items-center mt-5 ring-2 ring-blue-100 bg-blue-200 bg-opacity-20 p-5 rounded-lg">
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
