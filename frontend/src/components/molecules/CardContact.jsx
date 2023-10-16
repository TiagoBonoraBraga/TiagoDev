export default function CardContact() {

  return (
    <section className="flex flex-col justify-start items-start w-auto p-10 rounded ring-2 gap-5 bg-blue-100 ring-blue-200 text-white-500 mt-20 ss:gap-0 mb-60 ss:flex ss:flex-col ss:justify-center ss:items-center ">
      <div className="flex flex-row px-5 py-1 rounded">
        <div className="w-auto">
          <h3 className="w-96">Nome:</h3>
        </div>
        <div>
          <h3 className="w-96">Email:</h3>
        </div>
        <div>
          <h3 className="w-48">Fone:</h3>
        </div>
      </div>
      <div className="flex flex-row w-auto px-5 py-1 rounded">
        <h3 className="w-full">Mensagem:</h3>
      </div>

    </section>

  );
}
