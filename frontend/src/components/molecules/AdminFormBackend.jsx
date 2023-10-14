import { useState } from "react"
import CustomInput from "../atoms/CustomInput"

import CustomButton from "../atoms/CustomButton";

export default function AdminFormBackend() {

    const [img, setImg] = useState('');


    function handleClick() {
        return (<></>)
    }
    return (
        <>
            <CustomInput
                id="Backend"
                value={img}
                type="text"
                onChange={handleClick}
                placeholder="Insira o endereço da imagem aqui!"
            />
            <CustomButton title="enviar" />
        </>
    )
}