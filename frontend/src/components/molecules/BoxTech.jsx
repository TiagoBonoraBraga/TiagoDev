import Image from "next/image";
import {
  imagens,
  imagens2,
  imagens3,
  imagens4,
  imagens5,
  imagens6,
} from "@/utils/mocks";
import CustomTitle from "../atoms/CustomTitle";
// import Background from "@/components/atoms/Background";

export default function BoxTech() {
  return (
    <section className="flex flex-row ss:flex ss:flex-col ss:justify-center ss:items-center  gap-5 justify-center  mb-10">
       {/* <Background /> */}
      <div className="flex flex-col justify-center items-center mt-5 ring-2 ring-blue-100 bg-blue-200 bg-opacity-20 p-5 rounded-lg">
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
        <div className="flex flex-row justify-center items-center mt-5 gap-3">
          {imagens2.map((image, index) => (
            <div key={index}>
              <Image
                src={image.img2}
                width={100}
                height={100}
                alt="Tecnologias"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center mt-5 gap-3">
          {imagens3.map((image, index) => (
            <div key={index}>
              <Image
                src={image.img3}
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
          {imagens4.map((image, index) => (
            <div key={index}>
              <Image
                src={image.img4}
                width={100}
                height={100}
                alt="Tecnologias"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center mt-5 gap-3">
          {imagens5.map((image, index) => (
            <div key={index}>
              <Image
                src={image.img5}
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
          {imagens6.map((image, index) => (
            <div key={index}>
              <Image
                src={image.img6}
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
