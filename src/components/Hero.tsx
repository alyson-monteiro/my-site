import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <h1 className="text-6xl font-extrabold mb-4">
        Salve, eu sou o Alyson
      </h1>
      <div className="relative max-w-xl w-full mb-8">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-lg pointer-events-none" />
        <p className="relative text-xl text-[#FCA554] px-6 py-4">
          Eu construo coisas para a internet.
          Sou um desenvolvedor de software apaixonado por transformar ideias em experiências digitais.
        </p>
      </div>
      <Link
        href="#projects"
        className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold py-3 px-6 rounded-full hover:opacity-90 transition"
      >
        Ver Projetos
      </Link>
    </section>
  )
}
