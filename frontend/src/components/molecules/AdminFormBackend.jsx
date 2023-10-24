import { useState } from "react"
import CustomInput from "../atoms/CustomInput"

import CustomButton from "../atoms/CustomButton";

export default function AdminFormBackend() {

    const [img, setImg] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        const backendPayload = {
            image: img,
        }
        console.log("back", backendPayload);
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
            <CustomButton title="enviar" />
        </form>
        </>
    )
}