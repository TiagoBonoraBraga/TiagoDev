import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import Whatsapp from "@/components/atoms/Whatsapp";
import ContactForm from "@/components/organisms/ContactForm";
import FormikForm from "../organisms/FormikForm";


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ContactForm />
      <FormikForm />
      <Whatsapp />

      <Footer />
    </>
  );
};



export default Layout;
