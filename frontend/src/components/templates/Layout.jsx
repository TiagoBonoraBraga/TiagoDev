import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-[65vh] overflow-hidden">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
