// src/app/page.tsx
export default function HomePage() {
  return (
    <main className="flex flex-col items-center text-center space-y-6">
      <h1 className="text-5xl font-bold">Olá, eu sou Alyson Monteiro</h1>
      <p className="text-lg text-gray-300 max-w-prose">
        Estudante de Ciência da Computação e desenvolvedora full-stack apaixonada por criar experiências digitais.
      </p>
      {/* mais seções virão depois (About, Projects, Contact…) */}
    </main>
  )
}
