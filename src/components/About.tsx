// src/components/About.tsx
export default function About() {
  return (
    <section
      id="about"
      className="py-20 flex flex-col-reverse md:flex-row items-center md:items-start gap-8"
    >
      {/* Texto com blur atrás */}
      <div className="md:w-2/3 relative">
        {/* camada de blur/fundo sem alterar o fluxo */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-lg pointer-events-none" />

        {/* conteúdo real, posicionado acima */}
        <div className="relative p-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#FCA554]">
            Sobre Mim
          </h2>
          <p className="mb-6 text-lg md:text-xl leading-relaxed text-[#FCA554]">
            Sou desenvolvedor de software com foco em aplicações fullstack modernas, combinando lógica robusta, boas práticas e um toque de criatividade.  
            Tenho experiência prévia com suporte técnico e reparo de hardware, 
            e hoje me especializo no desenvolvimento de sistemas eficientes com tecnologias como Python, SQL, Flutter, React, Node.js e serviços em nuvem.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-[#FCA554]">
            Atualmente, mantenho projetos voltados para análise de dados, interfaces intuitivas e automações inteligentes 
            com ferramentas de análise de desempenho em jogos competitivos e sistemas de gerenciamento pessoal.
            Sou curioso por natureza, comprometido com aprendizado constante e acredito em escrever código que não só funcione, mas também resolva problemas reais.  
            Mais que entregar funcionalidades, quero entregar sentido.
          </p>
        </div>
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
