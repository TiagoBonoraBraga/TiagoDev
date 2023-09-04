import CardContacts from "@/components/molecules/CardContact";
import { useState, useEffect } from "react";
import { api } from "@/utils/api";

// export async function getStaticProps(){
//   const data = await fetch("http://localhost:1337/api/contacts")
//   const contact = await data.json()


//   console.log("aqui", contact)
//   return
// }

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  async function ContactsData() {
    const contacts = await api.getContacts();
    console.log("conteudo",  contacts);
    setContacts(contacts);
  }

  useEffect(() => {
    ContactsData();
  }, []);

  return (
    <div className=" flex flex-wrap justify-center items-center max-w-screen-xl px-0 xl:px-16 mx-auto gap-16 xs:gap-3 xs:mb-16 mt-20">
      {(contacts).map((contact) => {
        // <CardContacts key={contact.id} contact={contact} />;
        <p>{contact}</p>
        // <li className="bg-blue-500 mt-40" key={contact.id}>{contact.name}</li>
       
      })}
    </div>
  );
}
