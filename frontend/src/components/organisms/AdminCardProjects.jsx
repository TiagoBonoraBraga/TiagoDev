import { useState } from "react"
import { api } from "@/utils/api";
import CustomInput from "../atoms/CustomInput";
import CustomLabel from "../atoms/CustomLabel";
import CustomCheckbox from "../atoms/CustomCheckbox";
import CustomTitle from "../atoms/CustomTitle";
import CustomButton from "../atoms/CustomButton";

export default function AdminCardProjects() {

    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');
    const [repository, setRepository] = useState('');
    const [deploy, setDeploy] = useState('');
    const [next, setNext] = useState('');
    const [react, setReact] = useState('');
    const [javascript, setJavascript] = useState('');
    const [backend, setBackend] = useState('');
    const [wordpress, setWordpress] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const projectsPayload = {
            title: title,
            image: img,
            description: description,
            repository: repository,
            deploy: deploy,
            next: next,
            react: react,
            javascript: javascript,
            backend: backend,
            wordpress: wordpress,
        }
        console.log("projects", projectsPayload);
        const projectsData = await api.createProjects({data: projectsPayload});
        console.log("proj", projectsData);
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-10 mt-10 ring-1 ring-blue-200 p-5 ss:p-0.5 rounded-sm ss:flex ss:justify-center ss:items-center">
                <CustomTitle title="ADICIONAR PROJETOS" />
                <CustomLabel title="Título do Projeto" />
                <CustomInput
                    id="title"
                    value={title}
                    type="text"
                    name="title"
                    setValue={setTitle}
                    placeholder="Insira o título do projeto aqui!"
                />
                <CustomLabel title="Imagem do Projeto" />
                <CustomInput
                    id="image"
                    value={img}
                    type="text"
                    name="image"
                    setValue={setImg}
                    placeholder="Insira o endereço da imagem aqui!"
                />
                <CustomLabel title="Descrição do Projeto" />
                <CustomInput
                    id="description"
                    value={description}
                    type="text"
                    name="description"
                    setValue={setDescription}
                    placeholder="Insira a descrição do projeto aqui!"
                />
                <CustomLabel title="Repositório do Projeto" />
                <CustomInput
                    id="repository"
                    value={repository}
                    type="text"
                    name="repository"
                    setValue={setRepository}
                    placeholder="Insira o repositório do projeto aqui!"
                />
                <CustomLabel title="Deploy do Projeto" />
                <CustomInput
                    id="deploy"
                    value={deploy}
                    type="text"
                    setValue={setDeploy}
                    placeholder="Insira o deploy do projeto aqui!"
                />
                <div className="flex flex-row gap-5">
                    <div className="flex flex-col justify-start items-start">
                        <CustomLabel title="Next" />
                        <CustomCheckbox
                            id="next"
                            name="next"
                            value={next}
                            type="checkbox"
                            setValue={setNext}
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <CustomLabel title="React" />
                        <CustomCheckbox
                            id="react"
                            name="react"
                            value={react}
                            type="checkbox"
                            setValue={setReact}
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <CustomLabel title="Javascript" />
                        <CustomCheckbox
                            id="javascript"
                            name="javascript"
                            value={javascript}
                            type="checkbox"
                            setValue={setJavascript}

                        />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <CustomLabel title="Backend" />
                        <CustomCheckbox
                            id="backend"
                            name="backend"
                            value={backend}
                            type="checkbox"
                            setValue={setBackend}

                        />
                    </div>

                </div>
                <div className="flex flex-col justify-start items-start ">
                    <CustomLabel title="Wordpress" />
                    <CustomCheckbox
                        id="wordpress"
                        name="wordpress"
                        value={wordpress}
                        type="checkbox"
                        setValue={setWordpress}

                    />
                </div>
                <button className="w-80 ss:w-60 ss:mb-10 bg-blue-300 text-white-500 p-1.5 rounded hover:bg-blue-200 hover:text-white-500 border-blue-300 " type="submit">Adicionar</button>
            </form>
        </>
    )
}