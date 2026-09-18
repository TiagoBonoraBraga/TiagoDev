import type { ReactNode } from "react";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

        {children}

      <Footer />
    </>
  );
};

export default Layout;
