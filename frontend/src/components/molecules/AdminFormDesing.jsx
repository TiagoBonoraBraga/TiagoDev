import { useState } from "react"
import { api } from "../../utils/api";
import CustomInput from "../atoms/CustomInput"
import CustomButton from "../atoms/CustomButton";
import { toast } from 'react-toastify'

export default function AdminFormDesing() {

    const [img, setImg] = useState('');


    async function handleSubmit(e) {
        e.preventDefault();
        const desingPayload = {
            image: img,
        }
        console.log("desing", desingPayload);
        const desingData = await api.createDesing({data: desingPayload});
        console.log("desing", desingData);
        if(!desingData){
            toast.error('Erro ao cadastrar')     
          } else {
            toast.success('Tecnologia de Desing cadastrada com sucesso!')
          }
    }
    return (
        <>
         <form className="w-auto ss:w-60 py-1 flex justify-center items-center gap-2 ss:flex ss:flex-col" onSubmit={handleSubmit}>
            <CustomInput
                id="Desing"
                value={img}
                type="text"
                name="desing"
                setValue={setImg}
                placeholder="Endereço da imagem aqui!"
            />
            <CustomButton title="Adicionar" />
         </form>
        </>
    )
}