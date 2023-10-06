import { useState } from "react"
import CustomInput from "../atoms/CustomInput"
import CustomLabel from "../atoms/CustomLabel"
import CustomButton from "../atoms/CustomButton";

export default function AdminFormFrontend(){

const [img,setImg] = useState('');


function handleClick(){
    return(<></>)
}
    return (
        <>
        <CustomLabel title="Imagem"/>
        <CustomInput 
        id="frontend"       
        value={img}
        type='text'
        onChange={handleClick}
        />    
        <CustomButton title="enviar"/>    
        </>
    )
}