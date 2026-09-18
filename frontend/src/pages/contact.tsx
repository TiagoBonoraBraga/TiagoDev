import Layout from '@/components/templates/Layout'
import SeoHead from '@/components/organisms/SeoHead'
import ContactHero from '@/components/organisms/ContactHero'
import ContactForm from '@/components/molecules/ContactForm'
import Whatsapp from '@/components/atoms/Whatsapp'

export default function Contact() {
  return (
    <Layout>
      <SeoHead />
      <ContactHero />
      <ContactForm />
      <Whatsapp />
    </Layout>
  )
}
