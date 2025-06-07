import { Project, User, Service, BlogPost, Testimonial, Client, Sector, ProjectDocument } from '../types';

export const users: User[] = [
  {
    id: '1',
    name: 'Juan Quispe',
    email: 'client@yeul.pe',
    password: 'client123', // Test password
    role: 'client',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '2',
    name: 'Ana Rodriguez',
    email: 'member@yeul.pe',
    password: 'member123', // Test password
    role: 'member',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '3',
    name: 'Carlos Huamán',
    email: 'admin@yeul.pe',
    password: 'admin123', // Test password
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Consultoría Ambiental',
    description: 'Evaluación y gestión de impacto ambiental para proyectos industriales y de construcción.',
    icon: 'leaf',
    features: ['Estudios de Impacto Ambiental', 'Planes de Manejo Ambiental', 'Monitoreo Ambiental']
  },
  {
    id: '2',
    title: 'Ingeniería Civil',
    description: 'Diseño y supervisión de proyectos de infraestructura civil y obras públicas.',
    icon: 'building',
    features: ['Diseño Estructural', 'Supervisión de Obras', 'Estudios de Suelos']
  },
  {
    id: '3',
    title: 'Topografía',
    description: 'Levantamientos topográficos precisos para proyectos de construcción y desarrollo.',
    icon: 'map',
    features: ['Levantamientos Topográficos', 'Replanteo de Obras', 'Cartografía Digital']
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Centro Comercial Plaza Norte',
    description: 'Estudio de impacto ambiental y diseño estructural para centro comercial de 50,000 m²',
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Comercial',
    status: 'completed',
    client: 'Grupo Inmobiliario del Norte',
    startDate: '2023-01-15',
    endDate: '2023-08-30',
    budget: 2500000,
    location: 'Lima, Perú',
    services: ['Consultoría Ambiental', 'Ingeniería Civil'],
    team: ['Carlos Huamán', 'Ana Rodriguez'],
    progress: 100,
    documents: []
  },
  {
    id: '2',
    title: 'Complejo Residencial Los Jardines',
    description: 'Proyecto integral de viviendas sostenibles con certificación ambiental',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Residencial',
    status: 'in-progress',
    client: 'Constructora Verde SAC',
    startDate: '2023-06-01',
    endDate: '2024-03-15',
    budget: 1800000,
    location: 'Arequipa, Perú',
    services: ['Consultoría Ambiental', 'Topografía'],
    team: ['Ana Rodriguez'],
    progress: 65,
    documents: []
  },
  {
    id: '3',
    title: 'Planta Industrial Textil',
    description: 'Evaluación ambiental y diseño de infraestructura para planta textil',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Industrial',
    status: 'planning',
    client: 'Textiles del Sur EIRL',
    startDate: '2024-01-10',
    endDate: '2024-09-30',
    budget: 3200000,
    location: 'Cusco, Perú',
    services: ['Consultoría Ambiental', 'Ingeniería Civil', 'Topografía'],
    team: ['Carlos Huamán', 'Ana Rodriguez'],
    progress: 15,
    documents: []
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Nuevas Regulaciones Ambientales en el Perú 2024',
    excerpt: 'Análisis de las últimas normativas ambientales y su impacto en proyectos de construcción.',
    content: 'Las nuevas regulaciones ambientales implementadas en 2024 representan un cambio significativo...',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Carlos Huamán',
    publishedAt: '2024-01-15',
    category: 'Regulaciones',
    tags: ['medio ambiente', 'regulaciones', 'construcción'],
    readTime: 8
  },
  {
    id: '2',
    title: 'Tecnologías Sostenibles en Construcción',
    excerpt: 'Exploramos las últimas innovaciones en construcción sostenible y su aplicación práctica.',
    content: 'La construcción sostenible ha evolucionado significativamente en los últimos años...',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Ana Rodriguez',
    publishedAt: '2024-01-10',
    category: 'Tecnología',
    tags: ['sostenibilidad', 'construcción', 'innovación'],
    readTime: 6
  },
  {
    id: '3',
    title: 'Gestión de Residuos en Proyectos de Construcción',
    excerpt: 'Mejores prácticas para la gestión eficiente de residuos en obras de construcción.',
    content: 'La gestión adecuada de residuos es fundamental para cualquier proyecto de construcción...',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Carlos Huamán',
    publishedAt: '2024-01-05',
    category: 'Gestión',
    tags: ['residuos', 'gestión', 'medio ambiente'],
    readTime: 7
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María González',
    position: 'Gerente de Proyectos',
    company: 'Constructora del Norte',
    content: 'YEUL ha sido fundamental en el éxito de nuestros proyectos. Su expertise en consultoría ambiental nos ha permitido cumplir con todas las regulaciones.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5
  },
  {
    id: '2',
    name: 'Roberto Silva',
    position: 'Director Técnico',
    company: 'Inmobiliaria Central',
    content: 'La calidad técnica y profesionalismo de YEUL superó nuestras expectativas. Recomendamos sus servicios sin dudarlo.',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5
  },
  {
    id: '3',
    name: 'Carmen Ruiz',
    position: 'Jefa de Operaciones',
    company: 'Desarrollos Sostenibles SAC',
    content: 'Trabajar con YEUL ha sido una experiencia excepcional. Su enfoque integral nos ayudó a optimizar nuestros procesos.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5
  }
];

export const clients: Client[] = [
  {
    id: '1',
    name: 'Constructora del Norte',
    logo: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=200',
    sector: 'Construcción',
    description: 'Líder en construcción de proyectos comerciales y residenciales'
  },
  {
    id: '2',
    name: 'Inmobiliaria Central',
    logo: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=200',
    sector: 'Inmobiliario',
    description: 'Desarrollo de proyectos inmobiliarios sostenibles'
  },
  {
    id: '3',
    name: 'Minera del Sur',
    logo: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=200',
    sector: 'Minería',
    description: 'Operaciones mineras responsables con el medio ambiente'
  },
  {
    id: '4',
    name: 'Textiles del Pacífico',
    logo: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=200',
    sector: 'Textil',
    description: 'Producción textil con estándares ambientales certificados'
  }
];

export const sectors: Sector[] = [
  {
    id: '1',
    name: 'Construcción',
    description: 'Proyectos de infraestructura y edificación',
    projectCount: 45,
    icon: 'building'
  },
  {
    id: '2',
    name: 'Minería',
    description: 'Evaluación ambiental para operaciones mineras',
    projectCount: 23,
    icon: 'mountain'
  },
  {
    id: '3',
    name: 'Industrial',
    description: 'Plantas industriales y manufactureras',
    projectCount: 18,
    icon: 'factory'
  },
  {
    id: '4',
    name: 'Energía',
    description: 'Proyectos de energía renovable y convencional',
    projectCount: 12,
    icon: 'zap'
  }
];