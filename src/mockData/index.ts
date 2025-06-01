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

// Rest of the existing mock data...