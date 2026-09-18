import Layout from '@/components/templates/Layout'
import SeoHead from '@/components/organisms/SeoHead'
import AboutHero from '@/components/organisms/AboutHero'
import AboutStory from '@/components/molecules/AboutStory'
import AboutServices from '@/components/molecules/AboutServices'
import ContactCta from '@/components/molecules/ContactCta'
import Whatsapp from '@/components/atoms/Whatsapp'

export default function About() {
  return (
    <Layout>
      <SeoHead />
      <AboutHero />
      <AboutStory />
      <AboutServices />
      <ContactCta />
      <Whatsapp />
    </Layout>
  )
}
