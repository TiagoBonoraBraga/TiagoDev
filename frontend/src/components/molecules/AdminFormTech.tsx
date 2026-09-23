import { useState, type FormEvent } from "react"
import CustomInput from "../atoms/CustomInput"
import CustomButton from "../atoms/CustomButton"
import { toast } from 'react-toastify'

interface AdminFormTechProps {
    /** Grupo da stack (ex.: "Front-end") — vai no payload e nos ids dos campos */
    group: string
}

export default function AdminFormTech({ group }: AdminFormTechProps) {
    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [url, setUrl] = useState('')

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const techPayload = {
            name: name,
            image: img,
            url: url,
            group: group,
        }
        // TODO: integrar com o backend (NestJS) — cadastro de tecnologia.
        const techData = null
        if (!techData) {
            toast.error('Erro ao cadastrar')
        } else {
            toast.success('Tecnologia cadastrada com sucesso!')
        }
    }

    const idBase = group.toLowerCase().replace(/[^a-z0-9]+/g, '-')

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="grid gap-3 sm:grid-cols-2">
                <CustomInput
                    id={`${idBase}-name`}
                    name="name"
                    value={name}
                    type="text"
                    setValue={setName}
                    placeholder="Nome da tecnologia (ex.: React)"
                />
                <CustomInput
                    id={`${idBase}-image`}
                    name="image"
                    value={img}
                    type="text"
                    setValue={setImg}
                    placeholder="Endereço da imagem"
                />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <CustomInput
                    id={`${idBase}-url`}
                    name="url"
                    value={url}
                    type="url"
                    setValue={setUrl}
                    placeholder="Link da documentação (ex.: https://react.dev)"
                />
                <CustomButton title="Adicionar" />
            </div>
        </form>
    )
}
