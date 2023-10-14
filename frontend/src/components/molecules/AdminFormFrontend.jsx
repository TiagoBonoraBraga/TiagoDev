import { useState } from "react"
import CustomInput from "../atoms/CustomInput"

import CustomButton from "../atoms/CustomButton";

export default function AdminFormFrontend() {

    const [img, setImg] = useState('');


    function handleClick() {
        return (<></>)
    }
    return (
        <>
            <CustomInput
                id="frontend"
                value={img}
                type="text"
                onChange={handleClick}
                placeholder="Insira o endereço da imagem aqui!"
            />
            <CustomButton title="enviar" />
        </>
    )
}