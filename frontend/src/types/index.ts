import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons";

// Projeto exibido nos cards/modais (dados vindos de utils/mocks).
export interface Project {
  image: StaticImageData | string;
  title: string;
  description: string;
  /** Rótulo exibido na pill do card/modal (ex.: stack ou tipo do projeto) */
  tag?: string;
  repository?: string;
  deploy?: string;
  link?: string;
}

// Tecnologia exibida em TechStack/CardTecno: imagem estática (mocks)
// ou ícone de react-icons (ex.: NestJS).
export interface TechItem {
  name: string;
  url?: string;
  img?: StaticImageData;
  Icon?: IconType;
  color?: string;
}

