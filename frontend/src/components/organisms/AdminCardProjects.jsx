import { useState } from "react"
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


    return (
        <>
            <form className="flex flex-col gap-2 mb-10 mt-10 ring-1 ring-blue-200 p-5 ss:p-0.5 rounded-sm ss:flex ss:justify-center ss:items-center">
                <CustomTitle title="ADICIONAR PROJETOS" />
                <CustomLabel title="Imagem do Projeto" />
                <CustomInput
                    id="title"
                    value={title}
                    type="text"
                    onChange={(e) => { }}
                    placeholder="Insira o endereço da imagem aqui!"
                />
                <CustomLabel title="Titulo do Projeto" />
                <CustomInput
                    id="image"
                    value={img}
                    type="text"
                    onChange={(e) => { }}
                    placeholder="Insira o endereço da imagem aqui!"
                />
                <CustomLabel title="Descrição do Projeto" />
                <CustomInput
                    id="description"
                    value={description}
                    type="text"
                    onChange={(e) => { }}
                    placeholder="Insira o endereço da imagem aqui!"
                />
                <CustomLabel title="Repositório do Projeto" />
                <CustomInput
                    id="repository"
                    value={repository}
                    type="text"
                    onChange={(e) => { }}
                    placeholder="Insira o endereço da imagem aqui!"
                />
                <CustomLabel title="Deploy do Projeto" />
                <CustomInput
                    id="deploy"
                    value={deploy}
                    type="text"
                    onChange={(e) => { }}
                    placeholder="Insira o endereço da imagem aqui!"
                />
                <div className="flex flex-row gap-5">
                    <div className="flex flex-col justify-start items-start">
                        <CustomLabel title="Next" />
                        <CustomCheckbox
                            id="next"
                            name="next"
                            value={next}
                            type="checkbox"
                            onChange={(e) => { }}
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <CustomLabel title="React" />
                        <CustomCheckbox
                            id="react"
                            name="react"
                            value={react}
                            type="checkbox"
                            onChange={(e) => { }}
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <CustomLabel title="Javascript" />
                        <CustomCheckbox
                            id="javascript"
                            name="javascript"
                            value={javascript}
                            type="checkbox"
                            onChange={(e) => { }}

                        />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <CustomLabel title="Backend" />
                        <CustomCheckbox
                            id="backend"
                            name="backend"
                            value={backend}
                            type="checkbox"
                            onChange={(e) => { }}

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
                        onChange={(e) => { }}

                    />
                </div>
                <button className="w-80 ss:w-60 ss:mb-10 bg-blue-300 text-white-500 p-1.5 rounded hover:bg-blue-200 hover:text-white-500 border-blue-300 " type="submit">Adicionar</button>
            </form>
        </>
    )
}