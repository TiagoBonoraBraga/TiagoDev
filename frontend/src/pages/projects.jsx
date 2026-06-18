import Layout from '@/components/templates/Layout'
import SeoHead from '@/components/organisms/SeoHead'
import ProjectsHero from '@/components/organisms/ProjectsHero'
import CardProject from '@/components/organisms/CardProject'
import ContactCta from '@/components/molecules/ContactCta'
import Whatsapp from '@/components/atoms/Whatsapp'

export default function Projects() {
  return (
    <Layout>
      <SeoHead />
      <ProjectsHero />
      <CardProject />
      <ContactCta />
      <Whatsapp />
    </Layout>
  )
}
