'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo3D from './Logo3D'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-20">
      <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Nome */}
        <Link href="/" className="text-2xl font-bold text-white">
          Alyson Monteiro
          {/* Logo 3D */}
          <Logo3D />
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 text-white">
          <Link href="#hero" className="hover:underline">Início</Link>
          <Link href="#about" className="hover:underline">Sobre</Link>
          <Link href="#projects" className="hover:underline">Projetos</Link>
          <Link href="#contact" className="hover:underline">Contato</Link>
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu dropdown mobile */}
      {open && (
        <nav className="md:hidden bg-black/70 backdrop-blur-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-white">
            <li><Link href="#hero" onClick={()=>setOpen(false)}>Início</Link></li>
            <li><Link href="#about" onClick={()=>setOpen(false)}>Sobre</Link></li>
            <li><Link href="#projects" onClick={()=>setOpen(false)}>Projetos</Link></li>
            <li><Link href="#contact" onClick={()=>setOpen(false)}>Contato</Link></li>
          </ul>
        </nav>
      )}
    </header>
)
}
