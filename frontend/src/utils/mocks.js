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
import FoodBox from "../../public/images/foodbox.jpg";
import BoxFood from "../../public/images/boxfood.png";
import PecoTheCat from "../../public/images/pecoTheCat.jpg";
import Familia from "../../public/images/familia.png";
import Protech from "../../public/images/protech.png";
import Bola from "../../public/images/bola.png";
import Elgeladon from "../../public/images/elGeladon.png";
import OldGames from "../../public/images/oldgames.png";
import JunkieDust from "../../public/images/junkiedust.png";
import Fpinfo from "../../public/images/fpinfo.png";
import Ogait from "../../public/images/ogait.png";
import Backend from "../../public/images/backend.png";




//frontend
export const imagens = [
  {
    img: Html,
  },
  {
    img: JavaScript,
  },
  {
    img: Css,
  },
  {
    img: Next,
  },
  {
    img: React,    
  },
  {
    img: Typescript,    
  },
  {
    img: Sass,    
  },
  {
    img: StyledComponent,    
  },
  {
    img: Tailwind,   
  },
];

//backend
export const imagensBackend = [
  {
    img: Prisma,
  },
  {
    img: Postgre,
  },
  {
    img: Php,
  },
  {
    img: node,
  },
  {
    img: Mongo,
  },
  {
    img: Express,
  },
];

// DESING E PROJETO
export const imagesDesing = [
  {
    img: Figma,
  },
  {
    img: Miro,
  },
  {
    img: Trello,
  },
];

//mocks projects

export const javascriptProjects = [
  {
    image: BoxFood,
    title: "FoodBox",
    description:
      "Projeto Cardápio Digital - Projeto desenvolvido através da aulas do Mestre Gustavo Guanabara do canal Curso em Video no youtube - O FoodBox foi desenvolvido totalmente na linguagem Javascript Vanilla, visando aprimorar meus conhecimentos na linguagem pura. Na estilização do projeto foi utilizado css 3 e também foi feita a integração dos pedidos através de mensagens via whatsapp.",
    repository: "https://github.com/TiagoBonoraBraga/foodbox",
    deploy: "www.foodbox.cia.tv",
    link: "https://tiagobonorabraga.github.io/foodbox/"
  },
  {
    image: PecoTheCat,
    title: "Jogo do Humor",
    description: "Projeto Jogo do Humor - Projeto desenvolvido no módulo 2 do curso de  Desenvolvimento Fullstack da Blue Ed.Tech.  O Jogo do Humor foi desenvolvido totalmente na linguagem Javascript Vanilla, visando aprimorar meus conhecimentos na linguagem pura. Na estilização do projeto foi utilizado css 3. O jogo consiste em fazer a manipulação do DOM trocando a imagem e o humor do Peco The Cat através da ação do botão.",
    repository: "https://github.com/TiagoBonoraBraga/modulo2proj1",
    deploy: "www.jogodohumor.cia.tv",
    link: "https://tiagobonorabraga.github.io/modulo2proj1/"
  },
];

export const reactProjects = [
  {
    image: Elgeladon ,
    title: "El-Geladon",
    description: "Projeto El-Geladon - Cardápio de Paletas Mexicanas, Este projeto foi desenvolvido com o objetivo de proporcionar uma experiência moderna e interativa aos clientes da paleteria El-Geladon, ao mesmo tempo em que facilita a gestão e atualização do cardápio para a equipe. Utilizamos o React.js como framework principal para desenvolver a interface do usuário. O React.js é ideal para criar componentes reutilizáveis e uma experiência responsiva e para sua estilização, empregamos o Styled-Components. Essa biblioteca permite criar estilos de forma modular e dinâmica, integrando-os diretamente com os componentes React. ",
    repository: "https://github.com/TiagoBonoraBraga/Front-ElgeladonReact",
    deploy: "www.jogodohumor.cia.tv",
  },
  // {
  //   image: FoodBox,
  //   title: "Pizza fresh",
  //   description: "Projeto Pizza Fresh,  Είπε, κι εμάς μάς έκοψε μεμιάς τα ήπατά μας το μουγκρητό του το βαρύ    κι η όψη η γιγαντένια. Όμως του απολογήθηκα κι αυτά τα λόγια του είπα· Από την Τροία ερχόμαστε, Αχαιοί που μύριοι ανέμοι μάς πέταξαν στης θάλασσας τα τρίσβαθα τα πλάτια. Πατρίδα θέλαμε, κι αλλού μάς φέραν άλλοι δρόμοι· τέτοιο του Δία στάθηκε το θέλημα κι η γνώμη. Και λέμε απ' του Αγαμέμνονα του γιού του Ατρέα τ' ασκέρι πως είμαστε",
  //   repository: "https://github.com/TiagoBonoraBraga/modulo2proj1",
  //   deploy: "www.jogodohumor.cia.tv",
  // },
  {
    image: OldGames,
    title: "Old-Games",
    description: "Projeto Old-Games - É com entusiasmo que apresento o projeto Old Games, um catálogo online dedicado a jogos antigos, desenvolvido com tecnologias modernas para oferecer uma experiência dinâmica e informativa aos entusiastas de jogos retrô. Utilizamos o React.js juntamente com TypeScript para criar uma base sólida e tipada para o desenvolvimento do frontend. O TypeScript adiciona um nível extra de robustez ao código, ajudando a evitar erros comuns e a facilitar o trabalho em equipe. Para estilização, optamos pelo Styled-Components. Essa biblioteca permite criar estilos de forma componentizada e dinâmica, integrando-os diretamente com os componentes React. Isso promove uma manutenção mais fácil e evita problemas de escopo de estilos.",
    repository: "https://github.com/TiagoBonoraBraga/oldgamesfrontend",
    deploy: "www.jogodohumor.cia.tv",
  },
];

export const nextProjects = [
  {
    image: JunkieDust,
    title: "Junkie Dust",
    description: "Projeto Junkie Dust, É com grande entusiasmo que apresento o Junkie Dust Player, uma plataforma online dedicada a bandas e músicos, permitindo que eles compartilhem suas composições, fotos e letras de músicas de forma interativa e envolvente.  Utilizamos o Next.js, um framework React com funcionalidades avançadas, juntamente com Typescript, como geração estática e pré-renderização, para criar uma aplicação robusta e otimizada. Para estilização, adotamos o Tailwind CSS, uma biblioteca de utilitários CSS altamente customizável. Em resumo, o Junkie Dust Player é mais do que uma simples plataforma de música. É um espaço dedicado à expressão artística, onde bandas e músicos podem conectar-se com os fãs e compartilhar sua paixão pela música de forma autêntica e significativa. ",
    repository: "https://github.com/TiagoBonoraBraga/junkiedust",
    deploy: "www.junkiedust.com",
  },
  {
    image: Fpinfo,
    title: "Fpinfo",
    description: "Projeto Fpinfo, Estou empolgado em apresentar o projeto Fpinfo, uma empresa especializada em construção de sites modernos e soluções tecnológicas, desenvolvido com tecnologias avançadas para oferecer produtos de alta qualidade aos nossos clientes. Em resumo, a Fpinfo é uma empresa comprometida em oferecer soluções tecnológicas inovadoras e personalizadas para construção de sites e aplicações web. Com o uso de tecnologias como Next.js, TypeScript e Tailwind CSS, buscamos superar as expectativas de nossos clientes e impulsionar seus negócios para o próximo nível. O Next.js é um framework React com funcionalidades avançadas, como pré-renderização, geração estática e suporte a TypeScript. Para estilização, utilizamos o Tailwind CSS, uma biblioteca de utilitários CSS altamente customizável. ",
    repository: "",
    deploy: "www.fpinfo.com",
  },
  {
    image: Ogait,
    title: "Ogait Ashtar",
    description: "Projeto Tiago Dev, Estou animado em apresentar o projeto Ogait Ashtar, um portfólio multifacetado que destaca as habilidades musicais do guitarrista Ogait Ashtar, bem como seus interesses esportivos em patins inline e trilhas pela natureza. Em resumo, o projeto Ogait Ashtar é mais do que um simples portfólio - é uma narrativa visual e interativa que celebra a versatilidade e paixões de Ogait Ashtar, desde sua música até suas aventuras esportivas. Estamos entusiasmados em compartilhar esta iniciativa e ansiosos para ver como ela inspirará outros e fortalecerá a comunidade criativa e esportiva. Utilizamos o Next.js, um framework React com funcionalidades avançadas de renderização, para criar uma aplicação web eficiente e otimizada. Para estilização, adotamos o Tailwind CSS, uma biblioteca de utilitários CSS que permite criar designs modernos de forma rápida e customizável.",
    repository: "https://github.com/TiagoBonoraBraga/ogaitashtar",
    deploy: "www.ogaitashtar.cia.tv",
  },
];

export const backendProjects = [
  {
    image: Backend,
    title: "Backend - El-Geladon",
    description: "Projeto Backend - El-Geladon - Projeto backend que implementa operações CRUD (Create, Read, Update, Delete) utilizando Node.js, Express e MongoDB. Essas tecnologias são comumente combinadas para criar aplicativos web ou APIs que manipulam dados de forma eficiente e escalável. Um projeto backend com Node.js, Express e MongoDB para implementar operações CRUD oferece uma maneira eficiente e flexível de criar APIs e aplicativos web que manipulam dados em um banco de dados NoSQL como o MongoDB. Essa combinação de tecnologias é amplamente utilizada na indústria para construir sistemas escaláveis e de alto desempenho.",
    repository: "https://github.com/TiagoBonoraBraga/elgeladon",
    deploy: "",
  }
]

export const wordpressProjects = [
  {
    image: Familia,
    title: "Familia Chimiloski",
    description: "O Projeto Panificadora e Confeitaria Família Chimiloski é um exemplo vibrante de como a tecnologia pode aprimorar os negócios familiares tradicionais. Desenvolvido com o CMS Wordpress, esse projeto emprega a versatilidade do PHP e o poder do plugin WooCommerce para criar um cardápio virtual abrangente e envolvente. Através dessa plataforma, a Panificadora e Confeitaria Família Chimiloski oferece uma experiência de compra online conveniente e personalizada, garantindo que seus produtos deliciosos e artesanais estejam ao alcance dos clientes com apenas alguns cliques.",
    repository: "https://github.com/TiagoBonoraBraga/modulo2proj1",
    deploy: "www.familiachimiloski.com.br",
    link: "https://familiachimiloski.com.br", 
  },
  {
    image: Protech,
    title: "Pro Tech",
    description: "O projeto do site Pro Tech Portões Automáticos, desenvolvido com o CMS WordPress, exemplifica o compromisso com a excelência e a modernidade no setor de automação residencial. Utilizando a versatilidade e a robustez do WordPress, o site oferece uma plataforma dinâmica e interativa para apresentar os serviços e produtos da Pro Tech. Com uma interface intuitiva e design sofisticado, os clientes podem explorar facilmente as opções de portões automáticos, sistemas de segurança e serviços de instalação oferecidos pela empresa. Com o Pro Tech Portões Automáticos, a automação residencial está ao alcance de todos, graças à tecnologia acessível e eficiente fornecida pelo CMS WordPress",
    repository: "https://github.com/TiagoBonoraBraga/modulo2proj1",
    deploy: "www.protechportoesautomaticos.com.br",
    link: "https://protechportoesautomaticos.com.br", 
  },
  {
    image: Bola,
    title: "Espaço da Bola",
    description: "Projeto Espaço da Bola - Explore o universo do futebol como nunca antes visto, com o Espaço da Bola, mergulhe em uma jornada emocionante através do esporte mais popular do mundo. Com nosso site desenvolvido utilizando o CMS WordPress, oferecemos uma plataforma interativa e informativa para todos os apaixonados por futebol. Não importa se você é um torcedor fervoroso, um jogador amador ou um entusiasta casual, o Espaço da Bola tem algo para todos. Junte-se a nós e embarque nessa jornada emocionante pelo mundo do futebol!  ",
    repository: "https://github.com/TiagoBonoraBraga/modulo2proj1",
    deploy: "www.espacodabola.com.br", 
    link: "https://espacodabola.com.br", 
  },
]

export const contacts = [
  {
    name: "Tiago Braga",
    email: "ogait.desenvolvedor.jr@gmail.com",
    phone: "41-988082384",
    message: "olá, gostaria de fazer um orçamento"
  },
  {
    name: "Tiago Braga",
    email: "ogait.desenvolvedor.jr@gmail.com",
    phone: "41-988082384",
    message: "olá, gostaria de fazer um orçamento"
  }
]
