// src/data/projects.ts
export interface Project {
  title: string
  description: string
  url: string
  image: string
}

export const projects: Project[] = [
  {
    title: 'Task Manager',
    description: 'App full-stack com Next.js, Node.js e Docker para gerenciamento de tarefas.',
    url: 'https://github.com/alyson-monteiro/Task-Manager',
    image: '/images/Task-Manager.png',
  },
  {
    title: 'Aim Analyzer',
    description: 'Análise de mira em vídeos de Valorant usando OpenCV e K-Means.',
    url: 'https://github.com/alyson-monteiro/aim-analizer',
    image: '/images/Aim-analyzer.png',
  },
  {
    title: 'Alien invasion',
    description: 'Jogo shooter 2D de ação feito no Construct3',
    url: 'https://github.com/alyson-monteiro/Alien-Invasion-Game',
    image: '/images/alien-invasion.png',
  },
  {
    title: 'Parking Space Detector',
    description: 'Detecte vagas de estacionamento disponíveis e ocupadas a partir de vídeo usando OpenCV',
    url: 'https://github.com/alyson-monteiro/Parking-Space-Counter',
    image: '/images/parking-space.png',
  },
]
