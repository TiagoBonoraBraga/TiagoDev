import type { Project, TechItem } from "@/types";

import Html from "../../public/images/html.png";
import JavaScript from "../../public/images/javascript.png";
import React from "../../public/images/react.png";
import Next from "../../public/images/next.png";
import Css from "../../public/images/css.png";
import Typescript from "../../public/images/typescript.png";
import Sass from "../../public/images/Sass_logo.png";
import StyledComponent from "../../public/images/styled-comp.png";
import Tailwind from "../../public/images/tailwindcss.png";
import Prisma from "../../public/images/prisma.png";
import Postgre from "../../public/images/postgre.png";
import Php from "../../public/images/php.png";
import node from "../../public/images/node.png";
import Mongo from "../../public/images/mongo.png";
import Express from "../../public/images/express.png";
import Figma from "../../public/images/figma.png";
import Miro from "../../public/images/miro.png";
import Trello from "../../public/images/trello.png";
import BoxFood from "../../public/images/boxfood.png";
import Familia from "../../public/images/familia.png";
import Elgeladon from "../../public/images/elGeladon.png";
import Backend from "../../public/images/backend.png";
import Site from "../../public/images/site.jpg";
import ExtFaciencia from "../../public/images/extFaciencia.jpg";
import Biotta from "../../public/images/biotta.jpg";
import BiottaBlog from "../../public/images/biottaBlog.jpg";
import Ananias from "../../public/images/ananias.jpg";
import Cbc from "../../public/images/cbc.jpg";
import Lavick from "../../public/images/lavick.jpg";
import GetulioWorks from "../../public/images/getulioWorks.jpg";





//frontend
export const imagens: TechItem[] = [
  {
    img: Html,
    name: "HTML",
    url: "https://developer.mozilla.org/docs/Web/HTML",
  },
  {
    img: JavaScript,
    name: "JavaScript",
    url: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    img: Css,
    name: "CSS",
    url: "https://developer.mozilla.org/docs/Web/CSS",
  },
  {
    img: Next,
    name: "Next.js",
    url: "https://nextjs.org/docs",
  },
  {
    img: React,
    name: "React",
    url: "https://react.dev",
  },
  {
    img: Typescript,
    name: "TypeScript",
    url: "https://www.typescriptlang.org/docs",
  },
  {
    img: Sass,
    name: "Sass",
    url: "https://sass-lang.com/documentation",
  },
  {
    img: StyledComponent,
    name: "Styled Components",
    url: "https://styled-components.com/docs",
  },
  {
    img: Tailwind,
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/docs",
  },
];

//backend
export const imagensBackend: TechItem[] = [
  {
    img: Prisma,
    name: "Prisma",
    url: "https://www.prisma.io/docs",
  },
  {
    img: Postgre,
    name: "PostgreSQL",
    url: "https://www.postgresql.org/docs/",
  },
  {
    img: Php,
    name: "PHP",
    url: "https://www.php.net/docs.php",
  },
  {
    img: node,
    name: "Node.js",
    url: "https://nodejs.org/en/docs",
  },
  {
    img: Mongo,
    name: "MongoDB",
    url: "https://www.mongodb.com/docs/",
  },
  {
    img: Express,
    name: "Express",
    url: "https://expressjs.com/",
  },
];

// DESING E PROJETO
export const imagesDesing: TechItem[] = [
  {
    img: Figma,
    name: "Figma",
    url: "https://help.figma.com/",
  },
  {
    img: Miro,
    name: "Miro",
    url: "https://help.miro.com/",
  },
  {
    img: Trello,
    name: "Trello",
    url: "https://support.atlassian.com/trello/",
  },
];

// Projetos (lista única, sem divisão por tecnologia).
// Os três primeiros são os destaques exibidos na home (FeaturedProjects).

export const projects: Project[] = [
  {
    image: Site,
    title: "FaCiencia",
    tag: "Next.js · Tailwind",
    description: "Projeto FaCiencia, site institucional da Faculdade FaCiencia, instituição de ensino superior de Curitiba/PR fundada em 2010, com cursos EAD reconhecidos pelo MEC e nota 4 na avaliação institucional. A plataforma reúne em um só lugar tudo o que o aluno precisa: inscrição no Vestibular 2026, cursos de Graduação, Pós-Graduação e Extensão, Portal do Aluno, AVA, Biblioteca Virtual, Validador de Documentos e Documentos Institucionais. O site também conta com galeria, depoimentos de alunos e as seções FaCiencia Cast e Eventos e Palestras, que exibem automaticamente os vídeos mais recentes publicados no YouTube. Utilizamos o Next.js, um framework React com funcionalidades avançadas como pré-renderização e otimização de imagens, com as mídias servidas pelo Google Cloud Storage, além de uma estrutura completa de SEO e recursos de acessibilidade. Em resumo, o site da FaCiencia é mais do que uma página institucional. É a porta de entrada digital da faculdade, conectando futuros alunos, estudantes e a comunidade acadêmica a uma educação de qualidade e acessível.",
    repository: "",
    deploy: "https://faciencia.edu.br",
  },
  {
    image: Biotta,
    title: "Cachaça Biotta",
    tag: "Site bilíngue PT/EN",
    description: "Site oficial da Cachaça Biotta, destilado artesanal produzido na terra roxa paranaense. A página apresenta a marca e a Biotta Prata com seções de degustação passo a passo, carrossel interativo de drinks, manifesto sobre tradição e produção artesanal e formulário de contato, além de verificação de maioridade (18+), link direto de compra e versão bilíngue em português e inglês com seletor de idioma.",
    deploy: "https://cachacabiotta.com.br/pt/",
  },
  {
    image: ExtFaciencia,
    title: "FaCiencia Extensão",
    tag: "Portal educacional",
    description: "Portal de Cursos de Extensão da Faculdade FaCiencia. Plataforma dedicada à divulgação dos cursos de extensão e formação continuada da instituição, reunindo o catálogo completo de cursos com informações e inscrição em um só lugar. Voltado a profissionais e à comunidade acadêmica que buscam formação complementar com a qualidade FaCiencia.",
    deploy: "https://extensao.faciencia.edu.br",
  },
  {
    image: Cbc,
    title: "CBC",
    tag: "Site corporativo",
    description: "Site institucional da CBC — Companhia Brasileira de Cartuchos, uma das maiores fabricantes de munições do mundo. Portal corporativo com catálogo completo de produtos, seções institucionais de história, esporte e governança, área de suporte com downloads, FAQ, legislação e assistência técnica, busca de revendedores, notícias e podcasts no CBC News, além de verificação de maioridade e canais de ouvidoria e LGPD.",
    deploy: "https://www.cbc.com.br",
  },
  
  {
    image: BiottaBlog,
    title: "Biotta Blog",
    tag: "Blog",
    description: "Blog da Cachaça Biotta, portal de conteúdo dedicado à cultura da cachaça artesanal brasileira. Os artigos são organizados nas categorias História, Curiosidades, Dicas e Diferenças entre tipos de cachaça, com navegação por postagens e integração com as redes sociais da marca — aproximando a Biotta dos apreciadores da bebida e fortalecendo sua presença digital.",
    deploy: "https://cachacabiotta.com.br/blog/",
  },
  {
    image: Ananias,
    title: "Auto Elétrica Ananias",
    tag: "Landing page",
    description: "Site da Auto Elétrica Ananias, oficina especializada em diagnóstico e reparo de sistemas elétricos automotivos em Curitiba/PR. Apresenta as especialidades da oficina — diagnóstico eletrônico, bateria e sistema de carga, motor de partida, alternador, fiação e iluminação —, galeria de trabalhos realizados, sintomas comuns de falhas, perguntas frequentes e localização com mapa, com botões de WhatsApp em pontos estratégicos para orçamento e agendamento direto.",
    deploy: "https://ananiasautoeletrica.cia.tv",
  },
  {
    image: Lavick,
    title: "Lavick Marcenaria",
    tag: "Site institucional",
    description: "Site da Lavick Marcenaria, empresa de Curitiba/PR especializada em móveis planejados e sob medida desde 1989. Apresenta o portfólio de ambientes residenciais e comerciais — dormitórios, cozinhas, closets, lavanderias, home theater e escritórios —, além de persianas, cortinas, pisos laminados e vinílicos e papel de parede, com galeria de projetos realizados, blog, formulário de solicitação de projeto e WhatsApp integrado para orçamentos.",
    deploy: "https://lavickmarcenaria.cia.tv",
  },
  {
    image: GetulioWorks,
    title: "Getulio Works",
    tag: "Landing page",
    description: "Site do Getulio Works, espaço de coworking e aluguel de salas em Curitiba/PR. Divulga as modalidades de salas privadas, coletivas e de reuniões e treinamentos, com destaque para a infraestrutura moderna, WiFi veloz e a comunidade profissional do espaço, além de eventos corporativos e happy hours de networking. Conta com formulário de inscrição com desconto para novos membros e contato direto via WhatsApp.",
    deploy: "https://www.getulioworks.cia.tv",
  },  
  {
    image: Familia,
    title: "Familia Chimiloski",
    tag: "WordPress",
    description: "O Projeto Panificadora e Confeitaria Família Chimiloski é um exemplo vibrante de como a tecnologia pode aprimorar os negócios familiares tradicionais. Desenvolvido com o CMS Wordpress, esse projeto emprega a versatilidade do PHP e o poder do plugin WooCommerce para criar um cardápio virtual abrangente e envolvente. Através dessa plataforma, a Panificadora e Confeitaria Família Chimiloski oferece uma experiência de compra online conveniente e personalizada, garantindo que seus produtos deliciosos e artesanais estejam ao alcance dos clientes com apenas alguns cliques.",
    repository: "https://github.com/TiagoBonoraBraga/modulo2proj1",
    deploy: "www.familiachimiloski.com.br",
    link: "https://familiachimiloski.com.br",
  },
  {
    image: BoxFood,
    title: "FoodBox",
    tag: "JavaScript Vanilla",
    description:
      "Projeto Cardápio Digital - Projeto desenvolvido através da aulas do Mestre Gustavo Guanabara do canal Curso em Video no youtube - O FoodBox foi desenvolvido totalmente na linguagem Javascript Vanilla, visando aprimorar meus conhecimentos na linguagem pura. Na estilização do projeto foi utilizado css 3 e também foi feita a integração dos pedidos através de mensagens via whatsapp.",
    repository: "https://github.com/TiagoBonoraBraga/foodbox",
    deploy: "www.foodbox.cia.tv",
    link: "https://tiagobonorabraga.github.io/foodbox/"
  },
  {
    image: Backend,
    title: "Backend - El-Geladon",
    tag: "Node · API",
    description: "Projeto Backend - El-Geladon - Projeto backend que implementa operações CRUD (Create, Read, Update, Delete) utilizando Node.js, Express e MongoDB. Essas tecnologias são comumente combinadas para criar aplicativos web ou APIs que manipulam dados de forma eficiente e escalável. Um projeto backend com Node.js, Express e MongoDB para implementar operações CRUD oferece uma maneira eficiente e flexível de criar APIs e aplicativos web que manipulam dados em um banco de dados NoSQL como o MongoDB. Essa combinação de tecnologias é amplamente utilizada na indústria para construir sistemas escaláveis e de alto desempenho.",
    repository: "https://github.com/TiagoBonoraBraga/elgeladon",
    deploy: "",
  },
  
]

