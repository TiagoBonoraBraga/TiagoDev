import type { ReactNode } from "react";
import AdminHeader from "@/components/organisms/AdminHeader";
import Footer from "@/components/organisms/Footer";


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AdminHeader />
     {children}
      <Footer />
    </>
  );
};

export default Layout;
