import AdminFormFrontend from "../molecules/AdminFormFrontend"
import AdminFormBackend from "../molecules/AdminFormBackend"
import AdminFormDesing from "../molecules/AdminFormDesing"
import CustomTitle from "../atoms/CustomTitle"

export default function AdminCardTecno() {
    return (<>
    <section className="flex flex-col gap-1 mb-10 5 ring-1 ring-blue-200 p-5 ss:p-3 ss:mt-5 rounded-sm">
      <CustomTitle title="ADICIONAR TECNOLOGIAS" />
        <CustomTitle title="Frontend" />
     <div className="flex flex-row justify-start items-center w-auto  gap-2  ss:flex ss:flex-col ss:justify-center ss:items-center ">  
        <AdminFormFrontend /> 
     </div>
        <CustomTitle title="Backend" /> 
     <div className="flex flex-row justify-start items-center w-auto  gap-2  ss:flex ss:flex-col ss:justify-center ss:items-center ">
        <AdminFormBackend />
     </div>
        <CustomTitle title="Projeto e Desing" /> 
     <div className="flex flex-row justify-start items-center w-auto  gap-2  ss:mb-10 ss:flex ss:flex-col ss:justify-center ss:items-center ">
        <AdminFormDesing />
     </div>
    </section>

    </>)
}