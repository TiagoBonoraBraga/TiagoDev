import AdminFormFrontend from "../molecules/AdminFormFrontend"
import CustomTitle from "../atoms/CustomTitle"

export default function AdminCardTecno() {
    return (<>
     <section className="flex flex-row  justify-center items-center ring-2 ring-blue-300 w-1/2 ss:flex ss:flex-col ss:justify-center ss:items-center mt-20 gap-2 justify-center  mb-60">
        <CustomTitle title="Frontend" />
        <AdminFormFrontend />        
     </section>

    </>)
}