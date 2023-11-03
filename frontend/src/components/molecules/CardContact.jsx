import { contacts } from "@/utils/mocks";
export default function CardContact() {

  return (
    <div>
      {contacts.map((contact, index) => (
        <section className="flex flex-col justify-start items-start w-auto p-5 rounded ring-2 gap-5 bg-blue-100 ring-blue-200 text-white-500 mt-20 ss:gap-0  ss:flex ss:flex-col ss:justify-center ss:items-center ">
          <div  key={index} className="flex flex-row px-5 py-1 rounded">
            <div className="w-auto">
              <h3 className="w-96">Nome:{contact.name}</h3>
            </div>
            <div>
              <h3 className="w-96">Email:{contact.email}</h3>
            </div>
            <div>
              <h3 className="w-48">Fone:{contact.phone}</h3>
            </div>
          </div>
          <div className="flex flex-row w-auto px-5 py-1 rounded">
            <h3 className="w-full">Mensagem: {contact.message}</h3>
          </div>  
        </section>   
    ))}
    </div>
  )
}
