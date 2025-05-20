import { projects } from '../data/projects'
import Link from 'next/link'

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Projetos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <Link
            key={proj.title}
            href={proj.url}
            target="_blank"
            className="block group bg-black/30 hover:bg-black/50 transition rounded-lg overflow-hidden"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover group-hover:scale-105 transform transition"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">{proj.title}</h3>
              <p className="text-gray-300">{proj.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
