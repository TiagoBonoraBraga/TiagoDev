import CardContact from "@/components/molecules/CardContact";
import { useState, useEffect } from "react";
import { api } from "@/utils/api";
import Layout from "@/components/templates/Layout";



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
    <Layout>
      <div className=" flex flex-wrap justify-center items-center mt-20 mb-20  ">
        <ul>
          {loading && <li className="text-blue-200">Carregando...</li>}
        </ul>
        {contacts?.map((contact, index) => {
          <CardContact key={index} contact={contact} />
        })}
      </div>
    </Layout>
  );
}
