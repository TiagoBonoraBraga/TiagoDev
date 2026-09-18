import Layout from '@/components/templates/Layout'
import SeoHead from '@/components/organisms/SeoHead'
import Hero from '@/components/organisms/Hero'
import TechStack from '@/components/molecules/TechStack'
import FeaturedProjects from '@/components/molecules/FeaturedProjects'
import ContactCta from '@/components/molecules/ContactCta'
import Whatsapp from '@/components/atoms/Whatsapp'

export default function Home() {
  return (
    <Layout>
      <SeoHead />
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <ContactCta />
      <Whatsapp />
    </Layout>
  )
}
