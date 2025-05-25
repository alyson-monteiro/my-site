'use client'

import { ReactNode, useState, useEffect } from 'react'

export default function SplashScreen({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<'enter' | 'exit' | 'done'>('enter')

  useEffect(() => {
    // Após 1s de entrada, começa a saída
    const t1 = setTimeout(() => setPhase('exit'), 1000)
    // Após +0.5s (duração de exit), esconde tudo
    const t2 = setTimeout(() => setPhase('done'), 1500)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (phase === 'done') {
    return <>{children}</>
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <img
        src="/images/logoSemBack.png"       /* substitua por /images/logo.png se quiser */
        alt="Logo"
        className={`
          w-32 h-32
          ${phase === 'enter' ? 'animate-logo-enter' : 'animate-logo-exit'}
        `}
      />
    </div>
  )
}
