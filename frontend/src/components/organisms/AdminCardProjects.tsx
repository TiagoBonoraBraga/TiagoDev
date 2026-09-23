import { useState, type FormEvent } from "react"
import CustomInput from "../atoms/CustomInput";
import CustomLabel from "../atoms/CustomLabel";
import CustomTextarea from "../atoms/CustomTextarea";
import { toast } from 'react-toastify'


export default function AdminCardProjects() {

    const [title, setTitle] = useState('');
    const [tag, setTag] = useState('');
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');
    const [repository, setRepository] = useState('');
    const [deploy, setDeploy] = useState('');

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const projectsPayload = {
            title: title,
            tag: tag,
            image: img,
            description: description,
            repository: repository,
            deploy: deploy,
        }
        // TODO: integrar com o backend (NestJS) — cadastro de projetos.
        const projectsData = null;
        if(!projectsData){
            toast.error('Erro ao cadastrar')
          } else {
            toast.success('Projeto cadastrado com sucesso!')
          }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-line bg-paper p-6 shadow-md md:p-8"
        >
            <p className="font-mono text-xs tracking-wider text-accent">{'// projetos'}</p>
            <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-ink">
                Adicionar projetos
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
                Cadastre um novo projeto para exibir na página de projetos.
            </p>

            <div className="mt-8 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <CustomLabel title="Título do projeto" />
                    <CustomInput
                        id="title"
                        value={title}
                        type="text"
                        name="title"
                        setValue={setTitle}
                        placeholder="Ex.: FaCiencia"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <CustomLabel title="Tag do projeto" />
                    <CustomInput
                        id="tag"
                        value={tag}
                        type="text"
                        name="tag"
                        setValue={setTag}
                        placeholder="Rótulo exibido no card (ex.: Next.js · Tailwind)"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <CustomLabel title="Imagem do projeto" />
                    <CustomInput
                        id="image"
                        value={img}
                        type="text"
                        name="image"
                        setValue={setImg}
                        placeholder="Endereço da imagem (ex.: /images/site.jpg)"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <CustomLabel title="Descrição do projeto" />
                    <CustomTextarea
                        id="description"
                        value={description}
                        name="description"
                        setValue={setDescription}
                        placeholder="Descreva o projeto: o que é, para quem e o que foi usado na construção."
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <CustomLabel title="Repositório do projeto" />
                    <CustomInput
                        id="repository"
                        value={repository}
                        type="url"
                        name="repository"
                        setValue={setRepository}
                        placeholder="URL do GitHub (opcional — ex.: https://github.com/usuario/repo)"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <CustomLabel title="Deploy do projeto" />
                    <CustomInput
                        id="deploy"
                        value={deploy}
                        type="url"
                        name="deploy"
                        setValue={setDeploy}
                        placeholder="URL do site no ar (ex.: https://faciencia.edu.br)"
                    />
                </div>

                <button
                    className="mt-2 w-full rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
                    type="submit"
                >
                    Adicionar projeto
                </button>
            </div>
        </form>
    )
}
