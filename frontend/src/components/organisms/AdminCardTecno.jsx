import AdminFormFrontend from "../molecules/AdminFormFrontend"
import CustomTitle from "../atoms/CustomTitle"

export default function AdminCardTecno() {
    return (<>
     <section className="flex flex-col  ring-2 ring-blue-300  ss:flex ss:flex-col ss:justify-center ss:items-center mt-20 gap-5 justify-center  mb-10">
        <CustomTitle title="Frontend" />
        <AdminFormFrontend />
        
     </section>

    </>)
}