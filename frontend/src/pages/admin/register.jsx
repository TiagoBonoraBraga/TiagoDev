import AdminCardTecno from "@/components/organisms/AdminCardTecno";
import AdminCardProjects from "@/components/organisms/AdminCardProjects";
import Layout from "@/components/templates/Layout";

export default function Register() {
    return (
        <>
        <Layout>
            <main className="flex flex-row justify-center items-center w-auto ml-10 mr-10 ring-2 ring-blue-300 mt-20 gap-28 ss:gap-0 mb-60 ss:flex ss:flex-col ss:justify-center ss:items-center ">
            <AdminCardTecno />
            <AdminCardProjects />
            </main>
        </Layout>        
        </>
    )
}