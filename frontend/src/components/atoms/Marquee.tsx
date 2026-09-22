import type { CSSProperties, ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  /** Duração de uma volta completa, em segundos */
  duration?: number
  /** Ponto do ciclo em que a animação começa (0 a 1) — linhas com offsets
   *  diferentes ficam dessincronizadas entre si */
  offset?: number
  /** Inverte o sentido: entra pela esquerda e sai pela direita */
  reverse?: boolean
  className?: string
}

export default function Marquee({
  children,
  duration = 30,
  offset = 0,
  reverse = false,
  className = '',
}: MarqueeProps) {
  return (
    <div className={`marquee min-w-0 ${className}`.trim()}>
      <div
        className="marquee-track"
        style={
          {
            '--marquee-duration': `${duration}s`,
            '--marquee-delay': `${-(offset * duration)}s`,
            '--marquee-direction': reverse ? 'reverse' : 'normal',
          } as CSSProperties
        }
      >
        {children}
      </div>
    </div>
  )
}
