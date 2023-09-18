import ContactForm from "@/components/molecules/ContactForm";
import SeoHead from "@/components/organisms/SeoHead";
import Layout from "@/components/templates/Layout";

export default function Contact() {
  return (
    <>
      <Layout>
        <SeoHead />
        <ContactForm />
      </Layout>
    </>
  );
}
