export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-400">
      <a href="#hero" className="block mb-2 hover:text-white transition">
        ↑ Voltar ao topo
      </a>
      <p>© {new Date().getFullYear()} Alyson Monteiro. Todos os direitos reservados.</p>
    </footer>
  )
}
