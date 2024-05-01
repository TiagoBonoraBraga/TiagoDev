import { api } from "@/utils/api";
import { useState } from "react";
import Image from "next/image";
import CustomButton from "../atoms/CustomButton";
import CustomLabel from "../atoms/CustomLabel";
import CustomTitle from "../atoms/CustomTitle";
import Contact from '@/public/images/contact.jpg'
import CustomInput from "../atoms/CustomInput";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  function handleNameChange(e) {
    setName(e.target.value);
    console.log("entrou", e.target.value);
    if (e.target.value.lenght <= 2) {
      setErrorName(true);
    } else {
      setErrorName(false);
    }
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
    if (e.target.value.lenght <= 10) {
      setErrorPhone(true);
    } else {
      setErrorPhone(false);
    }
  }
  function handleMessageChange(e) {
    setMessage(e.target.value);
    if (e.target.value.lenght <= 5) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const contactPayload = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    console.log("aqui", contactPayload);

    const contactData = await api.createContact({ data: contactPayload });
    console.log("veio", contactData);
  }

  return (
    <section className="flex-row flex justify-center items-center gap-40 ss:flex-col ss:gap-5">
      <div>
        <Image 
          src={Contact}
          width={500}
          height={500}
          alt="About Picture"
          className="rounded-full"
        />
      </div>
      <form className=" mt-20 ss:mt-0 flex flex-col ring-2 ring-blue-200 p-10 rounded-lg mb-20 dark:bg-gray-200" onSubmit={handleSubmit}>
      <CustomTitle title="Entre em contato comigo"/>
        <CustomLabel title="Nome:" />
        <CustomInput
          className="shadow-md appearance-none border rounded border-blue-200 w-full py-2 px-3 text-blue-200 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="name"
          value={name}
          setValue={setName}
          onChange={handleNameChange}
        />
        <CustomLabel title="E-mail:" />
        <CustomInput
          className="shadow-md appearance-none border rounded border-blue-200 w-full py-2 px-3 text-blue-200 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          id="email"
          value={email}
          setValue={setEmail}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <CustomLabel title="Fone:" />
        <CustomInput
          className="shadow-md appearance-none border rounded border-blue-200 w-full py-2 px-3 text-blue-200 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="phone"
          value={phone}
          setValue={setPhone}
          onChange={handlePhoneChange}
        />
        <CustomLabel title="Message:" />
        <textarea
          className="shadow-md appearance-none border rounded border-blue-200 w-full py-2 px-3 text-blue-200 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="message"
          value={message}
          onChange={handleMessageChange}
          rows={5}
        />
        <button className="w-80 ss:w-64 ss:mb-5 bg-blue-300 text-white-500 p-1.5 rounded hover:bg-blue-200 hover:text-white-500 border-blue-300 my-5 ">Enviar</button>
      </form>
    </section>
  );
}

