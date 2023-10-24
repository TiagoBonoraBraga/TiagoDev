import { useState } from "react"
import CustomInput from "../atoms/CustomInput"

import CustomButton from "../atoms/CustomButton";

export default function AdminFormDesing() {

    const [img, setImg] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        const desingPayload = {
            image: img,
        }
        console.log("desing", desingPayload);
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
            <CustomButton title="enviar" />
         </form>
        </>
    )
}