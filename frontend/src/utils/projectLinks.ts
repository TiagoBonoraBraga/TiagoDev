import type { Project } from "@/types";

// Resolve a "live site" URL from a project's mock fields.
// Prefere o `link` explícito (URL completa); na falta dele usa `deploy`
// (muitas vezes um domínio "pelado"), normalizando para uma URL https absoluta.
export function resolveLiveUrl(project?: Project | null): string | null {
  if (!project) return null
  if (project.link) return project.link
  if (project.deploy) {
    const clean = project.deploy.trim().replace(/^https?:\/\//, '')
    return clean ? `https://${clean}` : null
  }
  return null
}
