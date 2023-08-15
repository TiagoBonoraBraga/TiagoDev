import CardContacts from "@/components/molecules/CardContacts";
import { useState, useEffect } from "react";
import { api } from "@/utils/api";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  async function ContactsData() {
    const contacts = await api.getContacts();
    console.log("cont", contacts);
    setContacts(contacts);
  }

  useEffect(() => {
    ContactsData();
  }, [contacts]);

  return (
  <div className=" flex flex-wrap justify-center items-center max-w-screen-xl px-0 xl:px-16 mx-auto gap-16 xs:gap-3 xs:mb-16 mt-20">
    <CardContacts contacts={contacts} />
  </div>
  )
}

// export async function getServerSideProps() {
//     const data = await api.getContacts()
//     console.log(data)
//     return { props: { data } }
//   }
