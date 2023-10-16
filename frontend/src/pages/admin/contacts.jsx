import CardContact from "@/components/molecules/CardContact";
import { useState, useEffect } from "react";
import { api } from "@/utils/api";
import Layout from "@/components/templates/Layout";



export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  // async function ContactsData() {
  //   const contacts = await api.getContacts();
  //   console.log("conteudo",  contacts);
  //   setContacts(contacts);
  // }

  // useEffect(() => {
  //   ContactsData();
  // }, []);

  return (
    <Layout>
    <div className=" flex flex-wrap justify-center items-center mt-20 mb-20  ">
      {/* {(contacts).map((contact) => {
        // <CardContacts key={contact.id} contact={contact} />;
        
     
       
      })} */}
      <CardContact />
    </div>
    </Layout>
  );
}
