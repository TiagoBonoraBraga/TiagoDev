import CardContact from "@/components/molecules/CardContact";
import { useState, useEffect } from "react";
import { api } from "../../utils/api";
import { toast } from 'react-toastify'
import LayoutAdm from "@/components/templates/LayoutAdm";



export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  async function ContactsData() {
    setLoading(true);
    try {
      const contacts = await api.getContacts();
      console.log("conteudo", contacts);
      setContacts(contacts);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  


  useEffect(() => {
    ContactsData();
  }, []);

  return (
    <LayoutAdm>
      <div className=" flex flex-wrap justify-center items-center mt-20 mb-20  ">
        <ul>
          {loading && <li className="text-blue-200">Carregando...</li>}
          {error && <li className="text-blue-200">Errouuuu...</li>}
        </ul>
        {contacts?.map((contact, index) => {
          <CardContact key={index} contact={contact} />
        })}
      </div>
    </LayoutAdm>
  );
}
