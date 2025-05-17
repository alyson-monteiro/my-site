import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <h1 className="text-6xl font-extrabold mb-4">
        Olá, eu sou Alyson Monteiro
      </h1>
      <p className="text-xl text-gray-300 max-w-xl mb-8">
        Estudante de Ciência da Computação apaixonada por Front-end, Back-end e Visão Computacional.
      </p>
      <Link
        href="#projects"
        className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold py-3 px-6 rounded-full hover:opacity-90 transition"
      >
        Ver Projetos
      </Link>
    </section>
  )
}
