import { FormatData } from "@/utils/functions";


export default function CardContact({contact}) {

  const {
    attributes: {  name, email, phone, message, createdAt },
  } = contact;

  return (
    <div>
      <section className="flex flex-col justify-start items-start w-auto p-5 rounded ring-2 gap-5 tracking-wider bg-blue-100 ring-blue-200 text-white-500 mt-20 ss:gap-0  ss:flex ss:flex-col ss:justify-center ss:items-center ">
        <div key={contact.id} className="flex flex-row px-5 py-1 rounded">
          <div className="w-auto">
          <div>
            <h3 className="w-48">{FormatData(createdAt)}</h3>
          </div>
            <h3 className="w-96">Nome:{name}</h3>
          </div>
          <div>
            <h3 className="w-96">Email:{email}</h3>
          </div>
          <div>
            <h3 className="w-48">Fone:{phone}</h3>
          </div>          
        </div>
        <div className="flex flex-row w-auto px-5 py-1 rounded">
          <h3 className="w-full">Mensagem: {message}</h3>
        </div>
      </section>
    </div>
  )
}
