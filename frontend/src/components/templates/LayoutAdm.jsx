import AdminHeader from "@/components/organisms/AdminHeader";
import Footer from "@/components/organisms/Footer";


const Layout = ({ children }) => {
  return (
    <>
      <AdminHeader />
     {children}
      <Footer />
    </>
  );
};

export default Layout;
