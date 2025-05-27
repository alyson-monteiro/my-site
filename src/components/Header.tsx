'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Logo3D = dynamic(() => import('./Logo3D'), { ssr: false })

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-transparent z-20">
      <div className="flex justify-between items-center w-full px-8 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-[#FCA554]"
        >
          <Logo3D />
          Alyson Monteiro
        </Link>


        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 text-[#FCA554]">
          <Link href="#hero" className="hover:underline">
            01. Início
          </Link>
          <Link href="#about" className="hover:underline">
            02. Sobre
          </Link>
          <Link href="#projects" className="hover:underline">
            03. Projetos
          </Link>
          <Link href="#contact" className="hover:underline">
            04. Contato
          </Link>
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden text-[#239DC9]"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu dropdown mobile */}
      {open && (
        <nav className="md:hidden bg-black/70 backdrop-blur-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-[#239DC9]">
            <li>
              <Link href="#hero" onClick={() => setOpen(false)}>
                Início
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={() => setOpen(false)}>
                Sobre
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={() => setOpen(false)}>
                Projetos
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setOpen(false)}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
