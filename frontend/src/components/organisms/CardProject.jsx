import { useState } from 'react'
import ProjectsSection from '../molecules/ProjectsSection'
import ProjectModal from '../molecules/ProjectModal'
import {
  reactProjects,
  nextProjects,
  javascriptProjects,
  wordpressProjects,
  backendProjects,
} from '../../utils/mocks'

const sections = [
  { key: 'react', eyebrow: '// projetos react.js', title: 'React', tag: 'React', projects: reactProjects },
  { key: 'next', eyebrow: '// projetos next.js', title: 'Next.js', tag: 'Next.js', projects: nextProjects },
  { key: 'vanilla', eyebrow: '// projetos javascript', title: 'JavaScript Vanilla', tag: 'JavaScript', projects: javascriptProjects },
  { key: 'wordpress', eyebrow: '// projetos wordpress', title: 'WordPress', tag: 'WordPress', projects: wordpressProjects },
  { key: 'backend', eyebrow: '// projetos backend', title: 'Back-end', tag: 'Node · API', projects: backendProjects },
]

export default function CardProject() {
  const [selected, setSelected] = useState(null)

  const selectedTag = selected
    ? sections.find((s) => s.projects.includes(selected))?.tag
    : undefined

  return (
    <>
      {sections.map((s) => (
        <ProjectsSection
          key={s.key}
          eyebrow={s.eyebrow}
          title={s.title}
          tag={s.tag}
          projects={s.projects}
          onSelect={setSelected}
        />
      ))}

      <ProjectModal
        project={selected}
        tag={selectedTag}
        onClose={() => setSelected(null)}
      />
    </>
  )
}
