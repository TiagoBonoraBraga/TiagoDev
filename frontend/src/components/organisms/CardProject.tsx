import { useState } from 'react'
import ProjectsSection from '../molecules/ProjectsSection'
import ProjectModal from '../molecules/ProjectModal'
import { projects } from '../../utils/mocks'
import type { Project } from '@/types'

export default function CardProject() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <>
      <ProjectsSection
        eyebrow={'// projetos'}
        title="Todos os projetos"
        projects={projects}
        onSelect={setSelected}
      />

      <ProjectModal
        project={selected}
        tag={selected?.tag}
        onClose={() => setSelected(null)}
      />
    </>
  )
}
