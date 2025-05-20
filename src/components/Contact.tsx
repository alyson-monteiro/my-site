'use client'

import { Mail, Github, Linkedin, Instagram } from 'lucide-react' // ou react-icons/fa
import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-6">Contato</h2>
      <p className="text-gray-300 mb-8">
        Me mande um e-mail ou me encontre nas redes sociais:
      </p>
      <div className="flex justify-center space-x-6">
        <Link href="mailto:seu@email.com" className="text-white hover:text-green-400">
          <Mail size={32} />
        </Link>
        <Link href="https://github.com/alyson-monteiro" target="_blank" className="text-white hover:text-green-400">
          <Github size={32} />
        </Link>
        <Link href="https://linkedin.com/in/seu-perfil" target="_blank" className="text-white hover:text-green-400">
          <Linkedin size={32} />
        </Link>
        <Link href="https://instagram.com/seu-perfil" target="_blank" className="text-white hover:text-green-400">
          <Instagram size={32} />
        </Link>
      </div>
    </section>
  )
}
