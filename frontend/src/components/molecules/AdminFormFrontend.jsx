import { useState } from "react"
import CustomInput from "../atoms/CustomInput"

import CustomButton from "../atoms/CustomButton";

export default function AdminFormFrontend() {

    const [img, setImg] = useState('');


    function handleSubmit(e) {
        e.preventDefault();

        const imgFrontendPayload = {
            image: img,
        }
        console.log("aki", imgFrontendPayload)
    }
    return (
        <>
        <form className="w-auto ss:w-60 py-1 flex justify-center items-center gap-2" onSubmit={handleSubmit}>
            <CustomInput
                id="frontend"
                value={img}
                name="frontend"
                type="text"
                setValue={setImg}
                placeholder="Insira o endereço da imagem aqui!"
            />
            {img}
            <CustomButton title="enviar" />
        </form>
        </>
    )
}