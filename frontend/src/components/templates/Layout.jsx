import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import Whatsapp from "@/components/atoms/Whatsapp";


const Layout = ({children}) => {
    return (
        <>
        <Header />
        <Whatsapp />     
        <Footer />
        </>
    )
}

export default Layout;