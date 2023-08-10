import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import Whatsapp from "@/components/atoms/Whatsapp";
import ContactForm from "@/components/organisms/ContactForm";
import CardContacts from "@/components/molecules/CardContacts";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ContactForm />
      <Whatsapp />

      <Footer />
    </>
  );
};



export default Layout;
