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
    image: '/images/aim-analyzer-copy.png',
  },
  {
    title: 'Aim Analyzer',
    description: 'Análise de mira em vídeos de Valorant usando OpenCV e K-Means.',
    url: 'https://github.com/alyson-monteiro/aim-analizer',
    image: '/images/aim-analyzer.png',
  },
  // adicione aqui mais objetos para cada projeto
]
