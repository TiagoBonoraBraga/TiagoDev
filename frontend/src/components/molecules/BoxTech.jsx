import Image from "next/image";
import Html from "@/public/images/html.png";
import JavaScript from "@/public/images/JavaScript.png";
import React from "@/public/images/react.png";
import Next from "@/public/images/next.jpg";
import CustomTitle from "../atoms/CustomTitle";

export default function BoxTech() {
  const images = [
    {
      img: Html,
      title: "blabla",
    },
    {
      img: JavaScript,
      title: "blabla",
    },
    {
      img: React,
      title: "blabla",
    },
    {
      img: Next,
      title: "blabla",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center mt-5">
      <CustomTitle title="FRONTEND" />
      <div className="flex flex-row justify-center items-center">
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image.img} width={50} height={50} alt="Tecnologias" />
            <div>{image.title}</div>
          </div>
        ))}
      </div>
      <CustomTitle title="BACKEND" />
      <div className="flex flex-row justify-center items-center">
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image.img} width={50} height={50} alt="Tecnologias" />
          </div>
        ))}
      </div>
      <CustomTitle title="BANCO DE DADOS" />
      <div className="flex flex-row justify-center items-center">
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image.img} width={50} height={50} alt="Tecnologias" />
          </div>
        ))}
      </div>
      <CustomTitle title="TECNOLOGIAS AGEIS" />
      <div className="flex flex-row justify-center items-center">
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image.img} width={50} height={50} alt="Tecnologias" />
          </div>
        ))}
      </div>
    </section>
  );
}
