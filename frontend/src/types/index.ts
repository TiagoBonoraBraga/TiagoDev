import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons";

// Projeto exibido nos cards/modais (dados vindos de utils/mocks).
export interface Project {
  image: StaticImageData | string;
  title: string;
  description: string;
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

// Mensagem de contato "crua" (mock local).
export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Contato como vem da API (formato attributes + id), usado em CardContact.
export interface ContactEntry {
  id?: number | string;
  attributes: ContactMessage & { createdAt: string };
}
