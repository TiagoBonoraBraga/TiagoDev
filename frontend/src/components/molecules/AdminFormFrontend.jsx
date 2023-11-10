import { useState } from "react"
import CustomInput from "../atoms/CustomInput"
import { api } from "@/utils/api"
import CustomButton from "../atoms/CustomButton";
import { toast } from 'react-toastify'


export default function AdminFormFrontend() {

    const [img, setImg] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const imgFrontendPayload = {
            image: img,
        }
        console.log("aki", imgFrontendPayload)

        const frontendData = await api.createFrontend({data: imgFrontendPayload });
        console.log("front", frontendData);
        if(!frontendData){
            toast.error('Erro ao cadastrar')     
          } else {
            toast.success('Tecnologia Frontend cadastrada com sucesso!')
          }
    }

    return (
        <>
            <form className="w-auto ss:w-60 py-1 flex justify-center items-center gap-2 ss:flex ss:flex-col" onSubmit={handleSubmit}>
                <CustomInput
                    id="frontend"
                    value={img}
                    name="frontend"
                    type="text"
                    setValue={setImg}
                    placeholder="Endereço da imagem aqui!"
                />
                <CustomButton title="Cadastrar" />
            </form>
        </>
    )
}