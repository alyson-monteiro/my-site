export default function About() {
  return (
    <section
      id="about"
      className="py-20 flex flex-col-reverse md:flex-row items-center md:items-start gap-8"
    >
      {/* Texto */}
      <div className="md:w-2/3 text-gray-100">
        <h2 className="text-4xl font-bold mb-4">Sobre Mim</h2>
        <p className="mb-4 leading-relaxed">
          Sou estudante de Ciência da Computação na Uni-Facef, com experiência em
          desenvolvimento Full-Stack usando Node.js, React e bancos de dados SQL.
          Tenho paixão por criar soluções elegantes e eficientes, e adoro mergulhar
          em projetos de Visão Computacional e IA no meu tempo livre.
        </p>
        <p className="leading-relaxed">
          Além de programar, gosto de compartilhar conhecimento: mantenho um blog
          técnico e participo de comunidades de código aberto. Sempre busco
          aprender novas tecnologias e colaborar em projetos que façam a diferença.
        </p>
      </div>

      {/* Imagem ou ícone */}
      <div className="md:w-1/3 flex justify-center">
        <img
          src="/images/portrait.png"
          alt="Foto de Alyson Monteiro"
          className="w-48 h-48 rounded-full object-cover border-4 border-green-400"
        />
      </div>
    </section>
  )
}
