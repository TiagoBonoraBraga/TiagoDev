# Apostila — Backend NestJS no monorepo TiagoDev

> Curso passo a passo da criação do backend em **NestJS**, integrado ao **Turborepo + pnpm**,
> com banco de dados em **Drizzle ORM + MySQL**.
>
> Legenda de status ao longo do documento:
> - ✅ **Já feito** — executado na configuração inicial do projeto.
> - 📝 **A fazer** — passos que você segue quando for evoluir o backend.

---

## Sumário

- [Parte 0 — Conceitos: o que é NestJS](#parte-0--conceitos-o-que-é-nestjs)
- [Parte 1 — Scaffold do NestJS no monorepo](#parte-1--scaffold-do-nestjs-no-monorepo-)
- [Parte 2 — Anatomia do projeto NestJS](#parte-2--anatomia-do-projeto-nestjs)
- [Parte 3 — Integração com Turborepo + pnpm](#parte-3--integração-com-turborepo--pnpm-)
- [Parte 4 — Construindo a API (geradores do Nest CLI)](#parte-4--construindo-a-api-geradores-do-nest-cli-)
- [Parte 5 — Banco de dados: Drizzle ORM + MySQL](#parte-5--banco-de-dados-drizzle-orm--mysql-)
- [Parte 6 — Recriando as entidades do Strapi antigo](#parte-6--recriando-as-entidades-do-strapi-antigo-)
- [Parte 7 — Reconectando o frontend](#parte-7--reconectando-o-frontend-)
- [Apêndice A — Cheat sheet de comandos](#apêndice-a--cheat-sheet-de-comandos)
- [Apêndice B — Troubleshooting](#apêndice-b--troubleshooting)

---

## Parte 0 — Conceitos: o que é NestJS

**NestJS** é um framework Node.js para construir o *lado servidor* (APIs, serviços) usando **TypeScript**. Ele traz uma arquitetura opinativa inspirada no Angular, o que dá organização e previsibilidade a projetos que crescem.

### Os 4 blocos fundamentais

| Bloco | Papel | Decorator |
|---|---|---|
| **Module** | Agrupa um recurso (controllers + providers relacionados). O app é uma árvore de módulos. | `@Module()` |
| **Controller** | Recebe as requisições HTTP e devolve respostas. Define as **rotas**. | `@Controller()`, `@Get()`, `@Post()`… |
| **Provider / Service** | Contém a **lógica de negócio** (regras, acesso ao banco). Injetável. | `@Injectable()` |
| **DTO** | *Data Transfer Object* — descreve o formato dos dados que entram/saem, com validação. | (classe simples + `class-validator`) |

### Injeção de Dependência (DI)

O NestJS instancia os serviços pra você e os "injeta" onde forem declarados no construtor. Você **não dá `new`** nos serviços — pede-os no construtor e o Nest resolve:

```ts
@Controller()
export class AppController {
  // O Nest cria o AppService e injeta aqui automaticamente.
  constructor(private readonly appService: AppService) {}
}
```

### Fluxo de uma requisição

```
Cliente (frontend)
   │  GET /health
   ▼
Controller  ──►  Service  ──►  (banco de dados)
   │                 │
   └──── resposta ◄──┘
```

---

## Parte 1 — Scaffold do NestJS no monorepo ✅

O projeto já foi criado. Aqui está **exatamente** o comando usado, na raiz do monorepo:

```bash
pnpm dlx @nestjs/cli@latest new backend --skip-install --skip-git --package-manager pnpm
```

Explicando cada parte:

| Trecho | O que faz |
|---|---|
| `pnpm dlx @nestjs/cli@latest` | Baixa e executa o **Nest CLI** sem instalar globalmente. |
| `new backend` | Cria o projeto na pasta `backend/`. |
| `--skip-install` | **Não** instala as dependências ali dentro — quem instala é o `pnpm install` da raiz (é um monorepo, o node_modules é gerenciado no topo). |
| `--skip-git` | Não cria um repositório git dentro de `backend/` (já estamos num repo). |
| `--package-manager pnpm` | Evita o prompt interativo e configura os scripts para pnpm. |

> 💡 Se um dia quiser criar outro serviço do zero, é esse o comando (trocando o nome).

---

## Parte 2 — Anatomia do projeto NestJS

Estrutura gerada em `backend/`:

```
backend/
├── src/
│   ├── main.ts              # ponto de entrada — sobe o servidor
│   ├── app.module.ts        # módulo raiz
│   ├── app.controller.ts    # rotas do app
│   ├── app.service.ts       # lógica do app
│   └── app.controller.spec.ts  # teste unitário de exemplo
├── test/                    # testes end-to-end (e2e)
├── nest-cli.json            # config do Nest CLI
├── tsconfig.json            # config do TypeScript
├── eslint.config.mjs        # regras de lint
└── package.json             # deps e scripts
```

### `main.ts` — o bootstrap ✅

Este arquivo foi **customizado** na configuração inicial (porta e CORS):

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Libera o frontend (Next.js) a consumir esta API.
  app.enableCors();

  // Porta 3333 para NÃO colidir com o Next.js (que roda na 3000).
  const port = process.env.PORT ?? 3333;
  await app.listen(port);

  console.log(`🚀 Backend NestJS rodando em http://localhost:${port}`);
}
bootstrap();
```

- `NestFactory.create(AppModule)` — cria a aplicação a partir do módulo raiz.
- `app.enableCors()` — permite requisições vindas de outra origem (o front em `:3000`).
- `app.listen(port)` — coloca o servidor no ar.

### `app.module.ts` — o módulo raiz

```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],            // outros módulos que este usa
  controllers: [AppController],  // quem responde às rotas
  providers: [AppService],       // serviços injetáveis
})
export class AppModule {}
```

Todo recurso novo que você criar (contatos, projetos…) vira um **módulo** que é registrado no `imports` daqui.

### `app.controller.ts` — as rotas ✅

Customizado para incluir uma rota de saúde:

```ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()               // GET /
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')       // GET /health
  getHealth() {
    return this.appService.getHealth();
  }
}
```

### `app.service.ts` — a lógica ✅

```ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHealth() {
    return {
      status: 'ok',
      service: 'backend',
      timestamp: new Date().toISOString(),
    };
  }
}
```

> ✅ **Validado:** `GET http://localhost:3333/health` responde
> `{"status":"ok","service":"backend","timestamp":"..."}`.

---

## Parte 3 — Integração com Turborepo + pnpm ✅

O que faz o backend rodar **junto** com o frontend por um comando só.

### 1. Registrar o app no workspace

`pnpm-workspace.yaml` (raiz):

```yaml
packages:
  - "frontend"
  - "backend"
```

### 2. Script `dev` no backend

O Nest gera `start:dev`, mas o Turbo procura por um script chamado `dev` (o mesmo nome que o front usa). Por isso foi adicionado em `backend/package.json`:

```json
"scripts": {
  "build": "nest build",
  "dev": "nest start --watch",
  "start": "nest start",
  ...
}
```

> **Por que "dev"?** O Turbo casa tarefas pelo **nome do script**. Como o front tem `dev` e o back também, `turbo run dev` sobe os dois.

### 3. Porta sem colisão

Front (Next) usa `:3000`. Backend foi fixado em `:3333` no `main.ts`. Sem isso, o segundo a subir quebraria.

### 4. Saída de build no `turbo.json`

O Nest compila para `dist/`. Isso foi adicionado aos `outputs` da tarefa `build` (para o cache do Turbo funcionar):

```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "dev":   { "cache": false, "persistent": true },
    "build": { "dependsOn": ["^build"], "outputs": [".next/**", "!.next/cache/**", "out/**", "dist/**"] },
    "lint":  {},
    "start": { "dependsOn": ["build"], "cache": false, "persistent": true }
  }
}
```

### Comandos do dia a dia

```bash
pnpm dev                    # sobe front (:3000) + back (:3333) juntos
pnpm build                  # builda os dois, com cache do Turbo
pnpm --filter backend dev   # sobe SÓ o backend
pnpm --filter tiagodev dev  # sobe SÓ o frontend (nome do pkg do front é "tiagodev")
```

> ✅ **Validado:** `pnpm dev` sobe os dois em paralelo; ambos respondem `200`.

---

## Parte 4 — Construindo a API (geradores do Nest CLI) 📝

Quando for criar um recurso novo (ex.: contatos), **não escreva os arquivos na mão** — use o gerador do Nest.

### `nest g resource` — o atalho completo

```bash
# rode dentro de backend/  (ou: pnpm --filter backend exec nest g resource contacts)
cd backend
pnpm exec nest generate resource contacts
```

O CLI pergunta o *transport* (escolha **REST API**) e se quer *CRUD entry points* (escolha **Yes**). Ele cria:

```
src/contacts/
├── contacts.module.ts
├── contacts.controller.ts      # já com GET/POST/PATCH/DELETE
├── contacts.service.ts
├── dto/
│   ├── create-contact.dto.ts
│   └── update-contact.dto.ts
└── entities/contact.entity.ts
```

…e registra o `ContactsModule` no `app.module.ts` automaticamente.

### Geradores individuais

```bash
pnpm exec nest g module contacts       # só o módulo
pnpm exec nest g controller contacts   # só o controller
pnpm exec nest g service contacts      # só o service
```

### Validação de entrada (DTOs)

Instale os pacotes de validação:

```bash
pnpm --filter backend add class-validator class-transformer
```

Ative o `ValidationPipe` global no `main.ts`:

```ts
import { ValidationPipe } from '@nestjs/common';
// ...dentro de bootstrap(), antes do listen:
app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
```

Exemplo de DTO com validação:

```ts
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateContactDto {
  @IsString() @MinLength(2)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString() @MinLength(5)
  message: string;
}
```

### Variáveis de ambiente (`@nestjs/config`)

```bash
pnpm --filter backend add @nestjs/config
```

No `app.module.ts`:

```ts
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })], // lê o .env
})
export class AppModule {}
```

---

## Parte 5 — Banco de dados: Drizzle ORM + MySQL 📝

**Drizzle** é um ORM TypeScript-first, leve e com SQL "de verdade" (você escreve queries próximas do SQL, com tipagem forte). Vamos usá-lo com **MySQL** (o mesmo banco que o Strapi usava).

### 5.1 Instalar as dependências

```bash
pnpm --filter backend add drizzle-orm mysql2
pnpm --filter backend add -D drizzle-kit
```

- `drizzle-orm` — o ORM.
- `mysql2` — o driver de conexão com o MySQL.
- `drizzle-kit` — a CLI de migrations (gera/aplica SQL).

### 5.2 Subir um MySQL local (Docker)

```bash
docker run --name tiagodev-mysql \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=tiagodev \
  -p 3306:3306 -d mysql:8
```

### 5.3 Configurar o `.env`

Crie `backend/.env`:

```
DATABASE_URL="mysql://root:root@localhost:3306/tiagodev"
PORT=3333
```

> O formato da URL é `mysql://<usuário>:<senha>@<host>:<porta>/<banco>`.
> **Nunca** commite o `.env` (o `.gitignore` do backend já o ignora).

### 5.4 Config do Drizzle Kit

Crie `backend/drizzle.config.ts` (formato **atual**, com `defineConfig` + `dialect`):

```ts
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

### 5.5 Definir o schema

Crie `backend/src/db/schema.ts`. Exemplo com a tabela de contatos:

```ts
import { mysqlTable, int, varchar, text, timestamp } from 'drizzle-orm/mysql-core';

export const contacts = mysqlTable('contacts', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  message: text('message'),
  createdAt: timestamp('created_at').defaultNow(),
});
```

### 5.6 Migrations com o Drizzle Kit

```bash
cd backend

# 1) Gera o SQL a partir do schema (cria arquivos em ./drizzle)
pnpm exec drizzle-kit generate

# 2) Aplica as migrations no banco
pnpm exec drizzle-kit migrate

# Alternativa para protótipo rápido (empurra o schema direto, sem arquivos):
pnpm exec drizzle-kit push

# GUI para inspecionar o banco:
pnpm exec drizzle-kit studio
```

### 5.7 Conexão como módulo do NestJS

Crie `backend/src/db/db.module.ts` — expõe o `db` do Drizzle para injeção:

```ts
import { Global, Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';

export const DB = 'DB_CONNECTION';

@Global()
@Module({
  providers: [
    {
      provide: DB,
      useFactory: () => {
        const pool = mysql.createPool(process.env.DATABASE_URL!);
        return drizzle(pool, { schema, mode: 'default' });
      },
    },
  ],
  exports: [DB],
})
export class DbModule {}
```

> Usamos `createPool` (não `createConnection`) porque a API é um servidor de longa duração — o pool reaproveita conexões.

Registre o `DbModule` no `app.module.ts` (`imports: [DbModule]`).

### 5.8 Usar o `db` num service

```ts
import { Inject, Injectable } from '@nestjs/common';
import { MySql2Database } from 'drizzle-orm/mysql2';
import { eq } from 'drizzle-orm';
import { DB } from '../db/db.module';
import * as schema from '../db/schema';

@Injectable()
export class ContactsService {
  constructor(@Inject(DB) private readonly db: MySql2Database<typeof schema>) {}

  findAll() {
    return this.db.select().from(schema.contacts);
  }

  create(data: typeof schema.contacts.$inferInsert) {
    return this.db.insert(schema.contacts).values(data);
  }

  remove(id: number) {
    return this.db.delete(schema.contacts).where(eq(schema.contacts.id, id));
  }
}
```

---

## Parte 6 — Recriando as entidades do Strapi antigo 📝

O frontend antigo consumia **6 recursos**. Abaixo, o modelo de dados (deduzido do que o front envia/consome — veja `frontend/src/utils/api.js` no histórico) para recriar no Drizzle.

| Recurso (rota do front) | Campos |
|---|---|
| `contacts` | `name`, `email`, `phone`, `message` |
| `projects` | `title`, `image`, `description`, `repository`, `deploy`, `types` (lista de tecnologias) |
| `frontends` | `image` |
| `backends` | `image` |
| `desings` | `image` |
| `seo` | metadados (`title`, `description`, `keywords`) |

Schema Drizzle sugerido (`src/db/schema.ts`):

```ts
import { mysqlTable, int, varchar, text, json, timestamp } from 'drizzle-orm/mysql-core';

export const contacts = mysqlTable('contacts', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  message: text('message'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const projects = mysqlTable('projects', {
  id: int('id').primaryKey().autoincrement(),
  title: varchar('title', { length: 255 }).notNull(),
  image: varchar('image', { length: 512 }),
  description: text('description'),
  repository: varchar('repository', { length: 512 }),
  deploy: varchar('deploy', { length: 512 }),
  types: json('types'),           // ["Next", "React", ...]
  createdAt: timestamp('created_at').defaultNow(),
});

// Tecnologias por categoria (frontends / backends / desings): só uma imagem.
const techColumns = {
  id: int('id').primaryKey().autoincrement(),
  image: varchar('image', { length: 512 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
};
export const frontends = mysqlTable('frontends', techColumns);
export const backends  = mysqlTable('backends',  techColumns);
export const desings   = mysqlTable('desings',   techColumns);

export const seo = mysqlTable('seo', {
  id: int('id').primaryKey().autoincrement(),
  title: varchar('title', { length: 255 }),
  description: text('description'),
  keywords: varchar('keywords', { length: 512 }),
});
```

Para cada recurso, gere o CRUD com `nest g resource <nome>` (Parte 4) e ligue o service ao Drizzle (Parte 5.8).

> 💡 **Compatibilidade de formato:** o front antigo espera respostas no formato do Strapi
> (`{ data: {...} }` e envia `{ data: {...} }`). Você pode: (a) replicar esse formato no NestJS,
> ou (b) simplificar a API e ajustar o `api.js`. A opção (b) é mais limpa — decida na Parte 7.

---

## Parte 7 — Reconectando o frontend 📝

Quando a API estiver de pé, religue o front (hoje ele tem `// TODO: integrar com o backend (NestJS)` nos handlers).

### 1. Apontar para o NestJS

`frontend/src/utils/api.js` (recriar o cliente):

```js
import axios from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333",
});

export const api = {
  getContacts: async () => (await http.get("/contacts")).data,
  createContact: async (payload) => (await http.post("/contacts", payload)).data,
  createProjects: async (payload) => (await http.post("/projects", payload)).data,
  createFrontend: async (payload) => (await http.post("/frontends", payload)).data,
  createBackend:  async (payload) => (await http.post("/backends",  payload)).data,
  createDesing:   async (payload) => (await http.post("/desings",   payload)).data,
  getMeta: async () => (await http.get("/seo")).data,
};
```

> O `axios` foi removido na limpeza do Strapi. Reinstale: `pnpm --filter tiagodev add axios`.

### 2. Substituir os stubs

Nos arquivos com `// TODO: integrar com o backend (NestJS)` — `ContactForm.jsx`, `AdminForm*.jsx`,
`AdminCardProjects.jsx`, `pages/admin/contacts.jsx` — troque o `const x = null`/`[]` pela chamada real ao `api`.

### 3. CORS

Já está habilitado (`app.enableCors()` no `main.ts`). Em produção, restrinja a origem:

```ts
app.enableCors({ origin: process.env.FRONTEND_URL });
```

---

## Apêndice A — Cheat sheet de comandos

```bash
# --- Monorepo (rodar na raiz) ---
pnpm install                       # instala tudo
pnpm dev                           # front + back juntos
pnpm build                         # build com cache do Turbo
pnpm --filter backend <script>     # roda um script só no backend

# --- NestJS (dentro de backend/ ou via --filter backend exec) ---
pnpm exec nest generate resource <nome>   # CRUD completo de um recurso
pnpm exec nest generate module|controller|service <nome>
pnpm exec nest build

# --- Drizzle (dentro de backend/) ---
pnpm exec drizzle-kit generate     # gera SQL a partir do schema
pnpm exec drizzle-kit migrate      # aplica migrations
pnpm exec drizzle-kit push         # empurra schema (protótipo)
pnpm exec drizzle-kit studio       # GUI do banco
```

---

## Apêndice B — Troubleshooting

| Sintoma | Causa provável | Solução |
|---|---|---|
| `pnpm dev` não sobe o back | falta script `dev` no `backend/package.json` | adicionar `"dev": "nest start --watch"` |
| `EADDRINUSE :3000/:3333` | porta já ocupada (outro dev rodando) | matar o processo da porta ou mudar `PORT` |
| turbo trava com *Illegal instruction* | turbo **2.10.x** não roda nesta máquina (CPU) | manter `"turbo": "2.9.18"` (fixo) no `package.json` da raiz |
| pnpm: *Ignored build scripts: sharp/unrs-resolver* | pnpm 10 bloqueia scripts de build por segurança | inofensivo aqui; se precisar, `pnpm approve-builds` |
| Drizzle não conecta | `DATABASE_URL` errada ou MySQL fora do ar | conferir `.env` e `docker ps` |

---

## Próximos passos sugeridos

1. Recriar as entidades (Parte 6) começando por **contacts** (é a única do site público).
2. Autenticação da área admin com **JWT** (`@nestjs/jwt` + `@nestjs/passport`).
3. Testes (o Nest já vem com Jest configurado).
4. Deploy (o backend builda para `dist/` — roda com `node dist/main`).

---

*Documento vivo — atualize conforme o backend evoluir.*
