import AdminFormFrontend from "../molecules/AdminFormFrontend"
import AdminFormBackend from "../molecules/AdminFormBackend"
import CustomTitle from "../atoms/CustomTitle"

export default function AdminCardTecno() {
    return (<>
    <section className="flex flex-col gap-1 mb-10">
     <div className="flex flex-row justify-center items-center w-auto mt-10 gap-2  ss:flex ss:flex-col ss:justify-center ss:items-center ">  
        <CustomTitle title="Frontend" />
        <AdminFormFrontend /> 
     </div>
     <div className="flex flex-row justify-center items-center w-auto mt-10 gap-2  ss:flex ss:flex-col ss:justify-center ss:items-center ">
        <CustomTitle title="Backend" /> 
        <AdminFormBackend />
     </div>
    </section>

    </>)
}