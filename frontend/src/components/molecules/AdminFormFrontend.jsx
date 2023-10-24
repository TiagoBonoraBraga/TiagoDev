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