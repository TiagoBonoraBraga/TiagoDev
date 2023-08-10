import { api } from "@/utils/api";
import { useState } from "react";
import CustomButton from "../atoms/CustomButton";
import CustomLabel from "../atoms/CustomLabel";
import CardContacts from "@/components/molecules/CardContacts";

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
    <div>
     

      <form className=" mt-40 flex flex-col" onSubmit={handleSubmit}>
        <CustomLabel title="Nome" />
        <input
          className="shadow-md appearance-none border rounded border-black-500 w-full py-2 px-3 text-black-500 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
        <CustomLabel title="Email" />
        <input
          className="shadow-md appearance-none border rounded border-black-500 w-full py-2 px-3 text-black-500 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="name"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <CustomLabel title="Fone" />
        <input
          className="shadow-md appearance-none border rounded border-black-500 w-full py-2 px-3 text-black-500 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="name"
          value={phone}
          onChange={handlePhoneChange}
        />
        <CustomLabel title="Message" />
        <textarea
          className="shadow-md appearance-none border rounded border-black-500 w-full py-2 px-3 text-black-500 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="name"
          value={message}
          onChange={handleMessageChange}
        />
        <CustomButton title="enviar" />
      </form>
    </div>
  );
}

