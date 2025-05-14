// src/app/layout.tsx
import './globals.css'
import ThreeBackground from '../components/ThreeBackground'

export const metadata = {
  title: 'Meu Portfólio',
  description: 'Apresentação pessoal e portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="relative bg-black text-white min-h-screen">
        {/* fundo 3D (canvas) */}
        <ThreeBackground />

        {/* container das seções */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-16">
          {children}
        </div>
      </body>
    </html>
  )
}
