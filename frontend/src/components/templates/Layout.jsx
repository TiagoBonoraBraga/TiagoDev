import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
    
        {children}
      
      <Footer />
    </>
  );
};

export default Layout;
