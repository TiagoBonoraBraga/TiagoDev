import Link from "next/link";
import Image from "next/image";
import whatsappLogo from "../../public/assets/whatsap.png";

const whatsapp = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=5541988082384&text=Ol%C3%A1,%20me%20chamo%20Tiago%20Bonora%20Braga%20posso%20ajudar?"
      target="_blank"
    >
      <div className="fixed bottom-0 right-0 z-9999 mr-5 mb-2 ">
        <Image src={whatsappLogo} width={60} height={60} alt="whats" />
      </div>
    </Link>
  );
};

export default whatsapp;
