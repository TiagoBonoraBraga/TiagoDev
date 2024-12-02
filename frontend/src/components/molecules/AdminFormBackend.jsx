import { useState } from "react"
import CustomInput from "../atoms/CustomInput"

import CustomButton from "../atoms/CustomButton";
import { api } from "../../utils/api";
import { toast } from 'react-toastify'

export default function AdminFormBackend() {

    const [img, setImg] = useState('');


    async function handleSubmit(e) {
        e.preventDefault();
        const backendPayload = {
            image: img,
        }
        console.log("back", backendPayload);
        const backendData = await api.createBackend({data: backendPayload });
        console.log("back", backendData);
        if(!backendData){
            toast.error('Erro ao cadastrar')     
          } else {
            toast.success('Tecnologia Backend cadastrada com sucesso!')
          }
    }
    return (
        <>
        <form className="w-auto ss:w-60 py-1 flex justify-center items-center gap-2 ss:flex ss:flex-col" onSubmit={handleSubmit}>
            <CustomInput
                id="Backend"
                value={img}
                type="text"
                name="backend"
                setValue={setImg}
                placeholder="Endereço da imagem aqui!"
                
            />
            <CustomButton title="Adicionar" />
        </form>
        </>
    )
}