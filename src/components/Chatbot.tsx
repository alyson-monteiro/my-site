// src/components/ChatbotCTA.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function ChatbotCTA() {
  return (
    <section
      id="chatbot"
      className="py-20 flex flex-col md:flex-row items-center max-w-3xl mx-auto px-4 gap-8"
    >
      {/* Foto do chatbot */}
      <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
        <Image
          src="/images/chatbot.png"
          alt="Chatbot do Alyson"
          width={192}
          height={192}
          className="rounded-full object-cover"
        />
      </div>

      {/* Texto e botão */}
      <div className="text-center md:text-left flex-1">
        {/* Container do parágrafo com blur atrás */}
        <div className="relative mb-4 max-w-full">
          {/* Camada de blur atrás do texto */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-lg pointer-events-none" />
          {/* Parágrafo em primeiro plano */}
          <p className="relative p-4 text-lg md:text-xl text-beige">
            Treinei um chatbot à minha semelhança que sabe tudo sobre meus projetos, 
            minha trajetória e meus gostos pessoais. Vai trocar uma ideia com ele.
          </p>
        </div>

        <Link
          href="https://chatgpt.com/g/g-68361a658dbc81918b6ff7f5fd01f052-bot-do-alyson"
          className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold py-3 px-6 rounded-full hover:opacity-90 transition"
        >
          Conversar com o meu Bot.
        </Link>
      </div>
    </section>
  )
}
